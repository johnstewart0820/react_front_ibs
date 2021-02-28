import React, {useState, useEffect} from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-counties.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapCountyArea = (props) => {
  const { clusterList, selectedCluster, countyList, chartData, data } = props;
  const classes = useStyles();
  const color_list = ['#fd533c', '#9b210a', '#870d00', '#730000', '#5f0000', '#4b0000', '#230000', '#190000'];
  const [margin, setMargin] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.padding = "5px";
    tooltip.style.left = evt.pageX - 30 + 'px';
    tooltip.style.top = evt.pageY - 30 + 'px';
  }

  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

  useEffect(() => {
    let min = 0;
    let max = 0;
    for (let i = 0; i < chartData.length; i ++) {
      if (parseInt(chartData[i].value) < min) {
        min = parseInt(chartData[i].value);
      }
      if (parseInt(chartData[i].value) > max) {
        max = parseInt(chartData[i].value);
      }
    }
    setMin(min);
    setMax(max);
    if (chartData.length === 0)
      setMargin(0);
    else
      setMargin((max - min) / chartData.length);
  }, [chartData]);

  return (
    <>
      <Grid item xs={12} className={classes.controlContainer}>
        <Card className={classes.controlBlock} ref={data}>
          <Grid container>
            <Grid item xs={9}>
              <div id="tooltip" style={{ position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto' }} />
              <ReactSVG
                afterInjection={(error, svg) => {
                  for (let i = 0; i < svg.children.length; i++) {
                    if (svg.children[i].tagName === 'path') {
                      let title = '';
                      for (let j = 0; j < countyList.length; j++) {
                        if (countyList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                          let value = 0;
                          for (let k = 0; k < chartData.length; k ++) {
                            if (parseInt(chartData[k].code) === parseInt(countyList[j].id)) {
                              value = chartData[k].value;
                            }
                          }
                          title = clusterList[countyList[j].cluster_id - 1].name + ' : ' + value;
                        }
                      }
                      svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                      svg.children[i].onmouseout = hideTooltip;
                    }
                  }
                  for (let i = 0; i < selectedCluster.length; i++) {
                    let temp = [];
                    for (let j = 0; j < countyList.length; j++) {
                      if (parseInt(countyList[j].cluster_id) === parseInt(selectedCluster[i])) {
                        temp.push(j);
                      }
                    }
                    for (let k = 0; k < svg.children.length; k++) {
                      for (let j = 0; j < temp.length; j++) {
                        if (parseInt(svg.children[k].getAttribute('data-id')) === parseInt(countyList[temp[j]].id)) {
                          let color = 0;
                          for (let l = 0; l < chartData.length ; l ++) {
                            if (parseInt(chartData[l].code) === parseInt(selectedCluster[i]))
                              color = color_list[Math.round((parseInt(chartData[l].value) - min) / margin) - 1];
                          }
                          svg.children[k].style.fill = color;
                        }
                      }
                    }
                  }
                }
                }
                beforeInjection={(svg) => {
                  svg.classList.add('county_map')
                }}
                src={map_province_svg} />

            </Grid>
            <Grid item xs={3} style={{ alignItems: "flex-end", justifyContent: "flex-end", display: "flex" }}>
              <div className={classes.overflowCotainer}>
                <div className={classes.layoutOverflow}>
                  {selectedCluster.map((item, index) => (
                    <div className={classes.colorBlock}>
                      <div style={{ width: '20px', height: '10px', border: '1px solid gray', backgroundColor: color_list[index] }} />
                      <div style={{ marginLeft: '20px' }}>{parseInt((index) * margin + min)} ~ {parseInt((index + 1) * margin + min)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(MapCountyArea);

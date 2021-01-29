import React from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-counties.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapCountyArea = (props) => {
  const { clusterList, selectedCluster, countyList, selectedShowChartsMode } = props;
  const classes = useStyles();
  const color_list = ['#fd533c', '#9b210a', '#870d00', '#730000', '#5f0000', '#4b0000', '#230000', '#190000'];
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
  return (
    <>
      <Grid item xs={12} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
          <Grid container>
            <Grid item xs={9}>
              <div id="tooltip" style={{ position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto' }} />
              {
                parseInt(selectedShowChartsMode) === 1
                  ?
                  <ReactSVG
                    afterInjection={(error, svg) => {
                      for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].tagName === 'path') {
                          let title = '';
                          for (let j = 0; j < countyList.length; j++) {
                            if (countyList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                              title = clusterList[countyList[j].cluster_id - 1].name;
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
                              svg.children[k].style.fill = color_list[i];
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
                :
                  selectedCluster.map((item, index) => (
                    <ReactSVG
                    afterInjection={(error, svg) => {
                      for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].tagName === 'path') {
                          let title = '';
                          for (let j = 0; j < countyList.length; j++) {
                            if (countyList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                              title = clusterList[countyList[j].cluster_id - 1].name;
                            }
                          }
                          svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                          svg.children[i].onmouseout = hideTooltip;
                        }
                      }
                      for (let i = 0; i < selectedCluster.length; i++) {
                        let temp = [];
                        for (let j = 0; j < countyList.length; j++) {
                          if (parseInt(countyList[j].cluster_id) === parseInt(selectedCluster[index])) {
                            temp.push(j);
                          }
                        }
                        for (let k = 0; k < svg.children.length; k++) {
                          // console.log(parseInt(svg.children[k].getAttribute('data-id')), parseInt(countyList[temp].id));
                          for (let j = 0; j < temp.length; j++) {
                            if (parseInt(svg.children[k].getAttribute('data-id')) === parseInt(countyList[temp[j]].id)) {
                              svg.children[k].style.fill = color_list[index];
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
                  ))
              }

            </Grid>
            <Grid item xs={3} style={{ alignItems: "flex-end", justifyContent: "flex-end", display: "flex" }}>
              <div className={classes.overflowCotainer}>
                <div className={classes.layoutOverflow}>
                  {selectedCluster.map((item, index) => (
                    <div className={classes.colorBlock}>
                      <div style={{ width: '20px', height: '10px', border: '1px solid gray', backgroundColor: color_list[index] }} />
                      <div style={{ marginLeft: '20px' }}>{(index) * 70} ~ {(index + 1) * 70 - 1}</div>
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

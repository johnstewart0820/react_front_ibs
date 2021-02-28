import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-provinces.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapProvinceArea = (props) => {
  const { provinceList, selectedProvince, chartData, data } = props;
  const classes = useStyles();
  const color_list = ['#fd533c', '#c00000', '#a03000', '#9b210a', '#911700', '#870d00', '#7d0300', '#730000', '#690000', '#5f0000', '#550000', '#4b0000', '#410000', '#370000', '#230000', '#190000'];
  const [margin, setMargin] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
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
            <Grid item xs={8}>
              <div id="tooltip" className={classes.tooltip} display="none" style={{ position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto' }} />
              <ReactSVG
                    afterInjection={(error, svg) => {
                      let list = [];
                      for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].tagName === 'path') {
                          let title = '';
                          for (let j = 0; j < provinceList.length; j++) {
                            if (provinceList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                              let value = 0;
                              for (let k = 0; k < chartData.length; k ++) {
                                if (parseInt(chartData[k].code) === parseInt(provinceList[j].id)) {
                                  value = chartData[k].value;
                                }
                              }
                              title = provinceList[j].name + ' : ' + value;
                            }
                          }
                          svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                          svg.children[i].onmouseout = hideTooltip;
                          for (let j = 0; j < selectedProvince.length; j++) {
                            if (parseInt(selectedProvince[j]) === parseInt(svg.children[i].getAttribute('data-id'))) {
                              let color = 0;
                              for (let k = 0; k < chartData.length ; k ++) {
                                if (parseInt(chartData[k].code) === parseInt(selectedProvince[j]))
                                  color = color_list[Math.round((parseInt(chartData[k].value) - min) / margin) - 1];
                              }
                              svg.children[i].style.fill = color;
                            }
                          }
                        }
                      }
                    }}
                    beforeInjection={(svg) => {
                      svg.classList.add('province_map')
                    }}
                    src={map_province_svg} />

            </Grid>
            <Grid item xs={4} style={{ alignItems: "flex-end", justifyContent: "flex-end", display: "flex" }}>
              <div className={classes.overflowCotainer}>
                <div className={classes.layoutOverflow}>
                  {selectedProvince.map((item, index) => (
                    <div className={classes.colorBlock}>
                      <div style={{ width: '20px', height: '10px', border: '1px solid gray', backgroundColor: color_list[index] }} />
                      <div style={{ marginLeft: '20px' }}>{parseInt((index) * margin + min)} ~ {parseInt((index + 1) * margin - 1 + min)}</div>
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

export default withRouter(MapProvinceArea);

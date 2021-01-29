import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-provinces.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapProvinceArea = (props) => {
  const { provinceList, selectedProvince, selectedShowChartsMode } = props;
  const classes = useStyles();
  const color_list = ['#fd533c', '#c00000', '#a03000', '#9b210a', '#911700', '#870d00', '#7d0300', '#730000', '#690000', '#5f0000', '#550000', '#4b0000', '#410000', '#370000', '#230000', '#190000'];
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
  return (
    <>
      <Grid item xs={12} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
          <Grid container>
            <Grid item xs={9}>
              <div id="tooltip" className={classes.tooltip} display="none" style={{ position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto' }} />
              {
                parseInt(selectedShowChartsMode) === 1
                  ?
                  <ReactSVG
                    afterInjection={(error, svg) => {
                      let list = [];
                      for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].tagName === 'path') {
                          let title = '';
                          for (let j = 0; j < provinceList.length; j++) {
                            if (provinceList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                              title = provinceList[j].name;
                            }
                          }
                          svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                          svg.children[i].onmouseout = hideTooltip;
                          for (let j = 0; j < selectedProvince.length; j++) {
                            if (parseInt(selectedProvince[j]) === parseInt(svg.children[i].getAttribute('data-id'))) {
                              svg.children[i].style.fill = color_list[j];
                            }
                          }
                        }
                      }
                    }}
                    beforeInjection={(svg) => {
                      svg.classList.add('province_map')
                    }}
                    src={map_province_svg} />
                  :
                  selectedProvince.map((item, index) => (
                    <ReactSVG
                      afterInjection={(error, svg) => {
                        let list = [];
                        for (let i = 0; i < svg.children.length; i++) {
                          if (svg.children[i].tagName === 'path') {
                            let title = '';
                            for (let j = 0; j < provinceList.length; j++) {
                              if (provinceList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                                title = provinceList[j].name;
                              }
                            }
                            svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                            svg.children[i].onmouseout = hideTooltip;
                            for (let j = 0; j < selectedProvince.length; j++) {
                              if (parseInt(selectedProvince[index]) === parseInt(svg.children[i].getAttribute('data-id'))) {
                                svg.children[i].style.fill = color_list[index];
                              }
                            }
                          }
                        }
                      }}
                      beforeInjection={(svg) => {
                        svg.classList.add('province_map')
                      }}
                      src={map_province_svg} />
                  ))
              }

            </Grid>
            <Grid item xs={3} style={{ alignItems: "flex-end", justifyContent: "flex-end", display: "flex" }}>
              <div className={classes.overflowCotainer}>
                <div className={classes.layoutOverflow}>
                  {selectedProvince.map((item, index) => (
                    <div className={classes.colorBlock}>
                      <div style={{ width: '20px', height: '10px', border: '1px solid gray', backgroundColor: color_list[index] }} />
                      <div style={{ marginLeft: '20px' }}>{(index) * 35} ~ {(index + 1) * 35 - 1}</div>
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

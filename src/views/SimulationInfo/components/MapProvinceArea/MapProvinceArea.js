import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-provinces.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapProvinceArea = (props) => {
  const { provinceList, selectedProvince} = props;
  const classes = useStyles();

  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX - 30  + 'px';
    tooltip.style.top = evt.pageY - 30 + 'px';
  }
  
  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }
  return (
    <>
      <Grid item xs={7} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
        <div id="tooltip" className={classes.tooltip} display="none" style={{position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto'}}/>
          <ReactSVG 
            afterInjection={(error, svg) => {
              for (let i = 0; i < svg.children.length; i ++) {
                if (svg.children[i].tagName === 'path') {
                  let title = '';
                  for(let j = 0; j < provinceList.length; j ++) {
                    if (provinceList[j].id === parseInt(svg.children[i].getAttribute('data-id'))) {
                      title = provinceList[j].name;
                    }
                  }
                  svg.children[i].onmousemove = (evt) => showTooltip(evt, title);
                  svg.children[i].onmouseout = hideTooltip;
                  for (let j = 0; j < selectedProvince.length; j ++) {
                    if (parseInt(selectedProvince[j]) === parseInt(svg.children[i].getAttribute('data-id'))) {
                      let value = i / 2 * 70 + 10;
                      if (value >= 0 && value < 80) {
                        svg.children[i].style.fill = '#d75d34';
                      } else if (value >= 80 && value < 150) {
                        svg.children[i].style.fill = '#cd532a';                        
                      } else if (value >= 150 && value < 220) {
                        svg.children[i].style.fill = '#c34920';
                      } else if (value >= 220 && value < 290) {
                        svg.children[i].style.fill = '#b93f16';
                      } else if (value >= 290 && value < 360) {
                        svg.children[i].style.fill = '#af350c';
                      } else if (value >= 360 && value < 430) {
                        svg.children[i].style.fill = '#a52b02';
                      } else if (value >= 430 && value < 500) {
                        svg.children[i].style.fill = '#9b2100';
                      } else if (value >= 500) {
                        svg.children[i].style.fill = '#911700';
                      }
                    }
                  }
                }
              }
            }}
            beforeInjection={(svg) => {
                svg.classList.add('province_map')
              }}
            src={map_province_svg}/>
            <div className={classes.overflowCotainer}>
            <div className={classes.layoutOverflow}>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#d75d34'}}/>
                <div style={{marginLeft: '20px'}}>&nbsp;&nbsp;&nbsp;&nbsp;0 ~ &nbsp;79</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#cd532a'}}/>
                <div style={{marginLeft: '20px'}}>&nbsp;&nbsp;80 ~ 149</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#c34920'}}/>
                <div style={{marginLeft: '20px'}}>150 ~ 219</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#b93f16'}}/>
                <div style={{marginLeft: '20px'}}>220 ~ 289</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#af350c'}}/>
                <div style={{marginLeft: '20px'}}>290 ~ 359</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#a52b02'}}/>
                <div style={{marginLeft: '20px'}}>360 ~ 429</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#9b2100'}}/>
                <div style={{marginLeft: '20px'}}>430 ~ 499</div>
              </div>
              <div className={classes.colorBlock}>
                <div style={{width: '20px', height: '10px', border: '1px solid gray', backgroundColor: '#911700'}}/>
                <div style={{marginLeft: '20px'}}>500 ~ </div>
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(MapProvinceArea);

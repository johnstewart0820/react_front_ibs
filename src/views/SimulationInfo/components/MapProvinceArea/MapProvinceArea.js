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
    tooltip.style.left = evt.pageX - 20  + 'px';
    tooltip.style.top = evt.pageY - 20 + 'px';
  }
  
  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }
  return (
    <>
      <Grid item xs={7} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
        <div id="tooltip" display="none" style={{position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto'}}/>
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
                      let value = Math.random() * 500;
                      svg.children[i].style = {}
                      if (value >= 0 && value < 200) {
                        svg.children[i].style.fill = '#a22b02';                        
                      } else if (value >= 200 && value < 300) {
                        svg.children[i].style.fill = '#a23b02';
                      } else if (value >= 300 && value < 400) {
                        svg.children[i].style.fill = '#a24b02';
                      } else if (value >= 400 && value < 500) {
                        svg.children[i].style.fill = '#a52b02';
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
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(MapProvinceArea);

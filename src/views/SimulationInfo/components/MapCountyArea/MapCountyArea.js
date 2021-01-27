import React from 'react';
import {
  Grid, Card
} from '@material-ui/core';
import map_province_svg from 'assets/svg/map-counties.svg';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import useStyles from './style';

const MapCountyArea = (props) => {
  const { clusterList, selectedCluster, countyList } = props;
  const classes = useStyles();

  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX - 20 + 'px';
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
          <div id="tooltip" display="none" style={{ position: 'absolute', display: 'none', zIndex: 100, backgroundColor: 'black', color: 'white', fontFamily: 'roboto' }} />
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
                let value = Math.random() * 500;
                for (let j = 0; j < countyList.length; j++) {
                  if (parseInt(countyList[j].cluster_id) === parseInt(selectedCluster[i])) {
                    temp.push(j);
                  }
                }
                for (let i = 0; i < svg.children.length; i++) {
                  // console.log(parseInt(svg.children[k].getAttribute('data-id')), parseInt(countyList[temp].id));
                  for (let j = 0; j < temp.length ; j ++) {
                    if (parseInt(svg.children[i].getAttribute('data-id')) === parseInt(countyList[temp[j]].id)) {
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
            }
          }
            beforeInjection={(svg) => {
              svg.classList.add('county_map')
            }}
            src={map_province_svg} />
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(MapCountyArea);

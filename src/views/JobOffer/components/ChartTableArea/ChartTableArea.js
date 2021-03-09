import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card, Button
} from '@material-ui/core';
import {
  ChartArea
} from '..'

import { withRouter } from 'react-router-dom';
import useStyles from './style';

const ChartTableArea = (props) => {
  const { chartData, selectedChartType, data, chart_title} = props;
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.controlContainer}>
        <Card className={classes.controlBlock} ref={data}>
          <div className={classes.chart_title}>
            {chart_title}
          </div>
          <ChartArea
            chart_data={chartData}
            selectedChartType={selectedChartType}
          />
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(ChartTableArea);

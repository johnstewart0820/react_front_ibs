import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card, Button
} from '@material-ui/core';
import {
  ChartArea, SortTable
} from '..'

import { withRouter } from 'react-router-dom';
import useStyles from './style';

const ChartTableArea = (props) => {
  const { chartData, selectedChartType, selectedCategory, selectedSection, requestSort, field_list, sortOption, setTableData, tableData, data, chart_title } = props;
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
            selectedCategory={selectedCategory}
            selectedSection={selectedSection}
          />
        </Card>
      </Grid>
    </>
  );
};

export default withRouter(ChartTableArea);

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
      {/* <Grid item xs={5} className={classes.controlContainer}>
        <Card className={classes.tableBlock}>
          <SortTable
            selectedChartType={selectedChartType}
            rows={tableData}
            requestSort={requestSort}
            sortOrder={sortOption.sortOrder}
            sortBy={sortOption.sortBy}
            field_list={field_list}
            handleChangeTableData={setTableData}
          />
        </Card>
      </Grid> */}
    </>
  );
};

export default withRouter(ChartTableArea);

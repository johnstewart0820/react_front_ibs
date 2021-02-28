import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card, Button
} from '@material-ui/core';
import {
  NameModal, YearSelect, DateArea
} from '../'

import { withRouter } from 'react-router-dom';
import useStyles from './style';

const ControllerArea = (props) => {
  const { handleExport, fromDate, setFromDate, toDate, setToDate, chartType } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.controlGrid}>
      <Grid item xs={7} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
            <DateArea
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              chartType={chartType}
            />
        </Card>
      </Grid>
      <Grid item xs={5} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" className={classes.btnExport} onClick={() => handleExport(0)}>
                Eksportuj do CSV
                </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary" className={classes.btnSave} onClick={() => handleExport(1)}>
                Eksportuj do PNG
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary" className={classes.btnSave} onClick={() => handleExport(2)}>
                Eksportuj do JPG
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary" className={classes.btnSave} onClick={() => handleExport(3)}>
                Eksportuj do PDF
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withRouter(ControllerArea);

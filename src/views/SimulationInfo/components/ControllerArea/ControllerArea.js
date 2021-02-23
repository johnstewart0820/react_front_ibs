import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card, Button
} from '@material-ui/core';
import {
  NameModal, YearSelect
} from '../'

import { withRouter } from 'react-router-dom';
import useStyles from './style';

const ControllerArea = (props) => {
  const { setSelectedYear, selectedYear, setSelectedToYear, selectedToYear,  handleExport, handleSave, openModal, handleCloseModal, setName, handleSaveAnalyze, name, yearList, selectedChartType } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.controlGrid}>
      <Grid item xs={7} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <YearSelect
                value={selectedYear}
                handleChange={setSelectedYear}
                list={yearList}
              />
            </Grid>
            {
              parseInt(selectedChartType) === 1 ?
              <Grid item xs={6}>
                <YearSelect
                  value={selectedToYear}
                  handleChange={setSelectedToYear}
                  list={yearList}
                />
              </Grid>
              :
              <></>
            }

          </Grid>
        </Card>
      </Grid>
      <Grid item xs={5} className={classes.controlContainer}>
        <Card className={classes.controlBlock}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" className={classes.btnExport} onClick={handleExport}>
                Eksportuj do CSV
                </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" className={classes.btnSave} onClick={handleSave}>
                Zapisz wybór
                </Button>
              <NameModal
                openModal={openModal}
                handleClose={handleCloseModal}
                name={name}
                handleChangeName={(e) => setName(e.target.value)}
                handleSave={handleSaveAnalyze}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withRouter(ControllerArea);

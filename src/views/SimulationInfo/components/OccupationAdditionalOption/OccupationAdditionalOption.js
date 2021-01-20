import React, {useEffect, useState} from 'react';
import { SingleSelect, MultiSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button
} from '@material-ui/core';
import OccupationSelectionModal from '../OccupationSelectionModal';

const OccupationAdditionalOption = (props) => {
  const classes = useStyles();

  const {
    occupationValue,
    showChartModeValue, 
    occupationSizeValue,
    handleSelectedOccupation,  
    handleSelectedShowChartsMode,
    handleSelectedOccupationSize,
    occupationList,
    showChartsMode,
    occupationSizeList,
  } = props;

  return (
    <>
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs={12}>
            <div className={classes.mainHeader}>
              Dotatkowe opcje
            </div>
          </Grid>
          <Grid item xs={8}>          
            <OccupationSelectionModal
              node={occupationList}
              occupationSize={occupationSizeValue}
              handleSelectedOccupation={handleSelectedOccupation}
              handleSelectedOccupationSize={handleSelectedOccupationSize}
              occupationSizeList={occupationSizeList}
              selectedOccupation={occupationValue}
            // handleSave={handleSaveOccupation}
            />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.secondTitleHeader}>
              Wyniki
            </div>
            <SingleSelect value={showChartModeValue} handleChange={handleSelectedShowChartsMode} list={showChartsMode}/>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(OccupationAdditionalOption);

import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
} from '@material-ui/core';

const OccupationSectorAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    pkdSectionValue, 
    occupationValue, 
    showChartModeValue, 
    handleSelectedPkdSection, 
    handleSelectedOccupation, 
    handleSelectedShowChartsMode,
    pkdSectionList,
    occupationList,
    showChartsMode
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
          <Grid item xs={4}>
            <div className={classes.secondTitleHeader}>
              Wybierz sektor
            </div>
            <MultiSelect value={pkdSectionValue} handleChange={handleSelectedPkdSection} list={pkdSectionList}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.secondTitleHeader}>
              Wybierz zawód
            </div>
            <MultiSelect value={occupationValue} handleChange={handleSelectedOccupation} list={occupationList}/>
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

export default withRouter(OccupationSectorAdditionalOption);

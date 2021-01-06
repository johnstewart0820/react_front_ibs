import React from 'react';
import { SingleSelect, MultiSelect } from '../';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
} from '@material-ui/core';

const ThirdAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    voivodeshipsValue,
    showChartModeValue,
    handleSelectedVoivodeships,
    handleSelectedShowChartsMode,
    voivodeshipsList,
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
          <Grid item xs={8}>
            <div className={classes.secondTitleHeader}>
              Wybierz województwo
            </div>
            <MultiSelect value={voivodeshipsValue} handleChange={handleSelectedVoivodeships} list={voivodeshipsList}/>
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

export default withRouter(ThirdAdditionalOption);

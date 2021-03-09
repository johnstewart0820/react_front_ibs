import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button,
} from '@material-ui/core';
const EducationAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    educationValue,
    ageValue,
    showChartModeValue,
    handleSelectedEducation,
    handleSelectedAge,
    handleSelectedShowChartsMode,
    educationList,
    ageList,
    showChartsMode,
    ableRender,
    handleRender
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
          <Grid item xs={3}>
            <div className={classes.secondTitleHeader}>
              Wybierz Edukacja
            </div>
            <MultiSelect value={educationValue} handleChange={handleSelectedEducation} list={educationList}/>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.secondTitleHeader}>
              Wybierz Wiek
            </div>
            <MultiSelect value={ageValue} handleChange={handleSelectedAge} list={ageList}/>
          </Grid>
          {showChartsMode.length > 1 ?
            <Grid item xs={3}>
              <div className={classes.secondTitleHeader}>
                Wyniki
              </div>
              <SingleSelect value={showChartModeValue} handleChange={handleSelectedShowChartsMode} list={showChartsMode}/>
            </Grid>
            :
            <></>
          }
          <Grid item xs={3}>
            <div className={classes.secondTitleHeader}>
              &nbsp;
            </div>
            <Button variant="contained" color="secondary" className={classes.btnOpen} disabled={!ableRender} onClick={() => handleRender()}>
              Pokaż
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(EducationAdditionalOption);

import React from 'react';
import { SingleSelect, MultiSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button
} from '@material-ui/core';

const PkdSectionAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    pkdSectionValue,  
    showChartModeValue, 
    handleSelectedPkdSection,  
    handleSelectedShowChartsMode,
    pkdSectionList,
    showChartsMode,
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
            <div className={classes.multiTitleHeader}>
              Wybierz sekcje PKD
            </div>
            <div className={classes.subHeader}>
              (można wybrać kilka sekcji)
            </div>
            <MultiSelect value={pkdSectionValue} handleChange={handleSelectedPkdSection} list={pkdSectionList}/>
          </Grid>
          {showChartsMode.length > 1 ?
            <Grid item xs={4}>
              <div className={classes.secondTitleHeader}>
                Wyniki
              </div>
              <SingleSelect value={showChartModeValue} handleChange={handleSelectedShowChartsMode} list={showChartsMode}/>
            </Grid>
            :
            <></>
          }
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(PkdSectionAdditionalOption);

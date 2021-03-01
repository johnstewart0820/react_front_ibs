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
    ableRender,
    handleRender,
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
          <Grid item xs={5}>
            <div className={classes.secondTitleHeader}>
              Wybierz sekcję PKD
            </div>
            <MultiSelect value={pkdSectionValue} handleChange={handleSelectedPkdSection} list={pkdSectionList}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.secondTitleHeader}>
              Wyniki
            </div>
            <SingleSelect value={showChartModeValue} handleChange={handleSelectedShowChartsMode} list={showChartsMode}/>
          </Grid>
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

export default withRouter(PkdSectionAdditionalOption);

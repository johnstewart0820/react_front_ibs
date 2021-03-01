import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button,
} from '@material-ui/core';
import OccupationSelectionModal from '../OccupationSelectionModal';
const ClusterAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    clusterValue,
    showChartModeValue,
    handleSelectedCluster,
    handleSelectedShowChartsMode,
    clusterList,
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
          <Grid item xs={5}>
            <div className={classes.secondTitleHeader}>
              Wybierz klaster powiatów
            </div>
            <MultiSelect value={clusterValue} handleChange={handleSelectedCluster} list={clusterList}/>
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

export default withRouter(ClusterAdditionalOption);

import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
} from '@material-ui/core';
import OccupationSelectionModal from '../OccupationSelectionModal';
const ClusterOccupationAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    occupationValue,
    clusterValue,
    occupationSizeValue,
    showChartModeValue,
    handleSelectedCluster,
    handleSelectedOccupation,
    handleSelectedOccupationSize,
    handleSelectedShowChartsMode,
    clusterList,
    occupationList,
    occupationSizeList,
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
          <Grid item xs={2}>
            <div className={classes.secondTitleHeader}>
              Wybierz klaster powiatów
            </div>
            <MultiSelect value={clusterValue} handleChange={handleSelectedCluster} list={clusterList}/>
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
          <Grid item xs={2}>
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

export default withRouter(ClusterOccupationAdditionalOption);
import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button
} from '@material-ui/core';
import OccupationSelectionModal from '../OccupationSelectionModal';
const ProvinceOccupationAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    occupationValue,
    provinceValue, 
    occupationSizeValue,
    showChartModeValue, 
    handleSelectedProvince, 
    handleSelectedOccupation, 
    handleSelectedShowChartsMode,
    handleSelectedOccupationSize,
    provinceList,
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
          <Grid item xs={4}>
            <div className={classes.secondTitleHeader}>
              Wybierz województwo
            </div>
            <MultiSelect value={provinceValue} handleChange={handleSelectedProvince} list={provinceList}/>
          </Grid>
          <Grid item xs={6}>
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
          {showChartsMode.length > 1 ?
            <Grid item xs={2}>
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

export default withRouter(ProvinceOccupationAdditionalOption);

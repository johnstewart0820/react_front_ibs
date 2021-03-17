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
    pkdSectionValue, 
    occupationSizeValue,
    showChartModeValue, 
    handleSelectedPkdSection, 
    handleSelectedOccupation, 
    handleSelectedShowChartsMode,
    handleSelectedOccupationSize,
    pkdSectionList,
    occupationList,
    showChartsMode,
    occupationSizeList,
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
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={classes.multiTitleHeader}>
                Wybierz sekcje PKD
              </div>
              <div className={classes.subHeader}>
                (można wybrać kilka sekcji)
              </div>
              <MultiSelect value={pkdSectionValue} handleChange={handleSelectedPkdSection} list={pkdSectionList}/>
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
              <Grid item xs={2} style={{position: 'relative'}}>
                <div className={classes.secondTitleHeader}>
                  Wyniki
                </div>
                <div style={{position: 'absolute', bottom: '8px', width: '95%'}}>
                  <SingleSelect value={showChartModeValue} handleChange={handleSelectedShowChartsMode} list={showChartsMode}/>
                </div>
              </Grid>
              :
              <></>
            }
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(ProvinceOccupationAdditionalOption);

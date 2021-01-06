import React, { useEffect, useState } from 'react';
import { 
  FirstAdditionalOption, 
  SecondAdditionalOption, 
  ThirdAdditionalOption,
  MultiSelect, 
  SingleSelect 
} from './components';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
  Button,
  CircularProgress
} from '@material-ui/core';
import {
  chartType, 
  aggragateType, 
  aggragateSubType, 
  provinceList, 
  occupationList, 
  showChartsMode
} from './constants';
import { useToasts } from 'react-toast-notifications'
import scenarios from '../../apis/scenarios';

const SimulationInfo = (props) => {
  const classes = useStyles();
  const { addToast } = useToasts()
  const { history } = props;
  const item = props.location.state.item;

  const [progressStatus, setProgressStatus] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState({});
  const [selectedAggragationType, setSelectedAggragationType] = useState({});
  const [selectedAggragationSubType, setSelectedAggragationSubType] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);
  const [selectedShowChartsMode, setSelectedShowChartsMode] = useState({});
  const [selectedPkdSection, setSelectedPkdSection] = useState([]);
  const [selectedVoivodeShips, setSelectedVoivodeShips] = useState([]);

  const [pkdSectionList, setPkdSelectionList] = useState([]);
  const [voivodeshipsList, setVoivodeShipsList] = useState([]);
 
  const handleChange = (props) => {
    history.push('/forecasting_module');
  }

  const handleOpen = () => {

  }

  useEffect(() => {
    setProgressStatus(true);
    scenarios
      .getSelectionData()
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          setPkdSelectionList(response.data.pkdSections);
          setVoivodeShipsList(response.data.voivodeships);
        }
      })
  }, []);

  return (
    <>
      <Card>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item lg={5} sm={5}>
            <div className={classes.titleBlock}>
              <div className={classes.titleHeader}>
                Wybrana symulacja:
              </div>
              <div className={classes.titleInfo}>
                {item.description}
              </div>
            </div>
          </Grid>
          <Grid item lg={2} sm={2}>
            <Button variant="contained" color="secondary" className={classes.btnChange} onClick={handleChange}>
              Zmień
            </Button>
          </Grid>
          <Grid item lg={3} sm={4}>
            <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleOpen}>
              Otwórz zapisaną analizę
          </Button>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs={12}>
            <div className={classes.mainHeader}>
              Przeglądaj wyniki
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz typ wykresu
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedChartType} handleChange={setSelectedChartType} list={chartType}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedAggragationType} handleChange={setSelectedAggragationType} list={aggragateType}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz kategorie
            </div>
            <div className={classes.subHeader}>
              (można wybrać 1, 2 lub 3 kategorie)
            </div>
            <MultiSelect value={selectedAggragationSubType} handleChange={setSelectedAggragationSubType} list={aggragateSubType}/>
          </Grid>
        </Grid>
      </Card>
      {
        (Object.keys(selectedChartType).length === 0 && selectedChartType.constructor === Object )
        || (Object.keys(selectedAggragationType).length === 0 && selectedAggragationType.constructor === Object )
        || selectedAggragationSubType.length === 0 
        ?
          <></>
        : 
        (
            selectedAggragationType === 'sector'
          ?
            <SecondAdditionalOption
              pkdSectionValue={selectedPkdSection}
              showChartModeValue={selectedShowChartsMode}
              handleSelectedPkdSection={setSelectedPkdSection}
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              pkdSectionList={pkdSectionList}
              showChartsMode={showChartsMode}
            />
          :
              selectedAggragationType === 'province'
            ?
              <ThirdAdditionalOption
                voivodeshipsValue={selectedVoivodeShips}
                showChartModeValue={selectedShowChartsMode}
                handleSelectedVoivodeships={setSelectedVoivodeShips}
                handleSelectedShowChartsMode={setSelectedShowChartsMode}
                voivodeshipsList={voivodeshipsList}
                showChartsMode={showChartsMode}
              />
            :
              <FirstAdditionalOption
                provinceValue={selectedProvince} 
                occupationValue={selectedOccupation} 
                showChartModeValue={selectedShowChartsMode} 
                handleSelectedProvince={setSelectedProvince} 
                handleSelectedOccupation={setSelectedOccupation} 
                handleSelectedShowChartsMode={setSelectedShowChartsMode}
                provinceList={provinceList}
                occupationList={occupationList}
                showChartsMode={showChartsMode}
              />
        )
      }
      {
        progressStatus ?
          <>
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          </>
          :
          <></>
      }
    </>
  );
};

export default withRouter(SimulationInfo);

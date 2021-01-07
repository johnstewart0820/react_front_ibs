import React, { useEffect, useState } from 'react';
import { 
  TotalAdditionalOption, 
  PkdSectionAdditionalOption, 
  ProvinceAdditionalOption,
  MultiSelect, 
  SingleSelect, 
  OccupationAdditionalOption,
  OccupationSectorAdditionalOption,
  ProvinceOccupationAdditionalOption
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
  const [selectedShowChartsMode, setSelectedShowChartsMode] = useState({});
  const [selectedPkdSection, setSelectedPkdSection] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);

  const [pkdSectionList, setPkdSelectionList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const handleChange = (props) => {
    history.push('/forecasting_module');
  }

  const handleOpen = () => {

  }

  const renderSwitchAddition = () => {
    if (
      (Object.keys(selectedChartType).length === 0 && selectedChartType.constructor === Object )
      || (Object.keys(selectedAggragationType).length === 0 && selectedAggragationType.constructor === Object )
      || selectedAggragationSubType.length === 0 
    ) {
      return <></>;
    } else {
      switch(selectedAggragationType) {
        case 'sector': 
           return <PkdSectionAdditionalOption
            pkdSectionValue={selectedPkdSection}
            showChartModeValue={selectedShowChartsMode}
            handleSelectedPkdSection={setSelectedPkdSection}
            handleSelectedShowChartsMode={setSelectedShowChartsMode}
            pkdSectionList={pkdSectionList}
            showChartsMode={showChartsMode}
          />
        case 'province':
          return <ProvinceAdditionalOption
              provinceValue={selectedProvince}
              showChartModeValue={selectedShowChartsMode}
              handleSelectedProvince={setSelectedProvince}
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              provinceList={provinceList}
              showChartsMode={showChartsMode}
            />
        case 'professed':
          return <OccupationAdditionalOption
              occupationValue={selectedOccupation}
              showChartModeValue={selectedShowChartsMode}
              handleSelectedOccupation={setSelectedOccupation}
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              occupationList={occupationList}
              showChartsMode={showChartsMode}
            />
        case 'sector-professed':
          return <OccupationSectorAdditionalOption
              pkdSectionValue={selectedPkdSection} 
              occupationValue={selectedOccupation} 
              showChartModeValue={selectedShowChartsMode} 
              handleSelectedPkdSection={setSelectedPkdSection} 
              handleSelectedOccupation={setSelectedOccupation} 
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              pkdSectionList={pkdSectionList}
              occupationList={occupationList}
              showChartsMode={showChartsMode}
            />
        case 'district-professed':
          return <ProvinceOccupationAdditionalOption
              provinceValue={selectedProvince} 
              occupationValue={selectedOccupation} 
              handleSelectedProvince={setSelectedProvince} 
              handleSelectedOccupation={setSelectedOccupation} 
              provinceList={provinceList}
              occupationList={occupationList}
            />
        default:
          return <TotalAdditionalOption
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
      }
    }
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
          setProvinceList(response.data.provinces);
          setOccupationList(response.data.professions);
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
      {renderSwitchAddition()}
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

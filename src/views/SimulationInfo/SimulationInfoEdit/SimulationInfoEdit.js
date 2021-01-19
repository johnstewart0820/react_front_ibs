import React, { useEffect, useState } from 'react';
import { 
  TotalAdditionalOption, 
  PkdSectionAdditionalOption, 
  ProvinceAdditionalOption,
  MultiSelect, 
  SingleSelect, 
  OccupationAdditionalOption,
  OccupationSectorAdditionalOption,
  ProvinceOccupationAdditionalOption,
  NameModal
} from '../components';
import { withRouter } from 'react-router-dom';
import useStyles from '../SimulationInfo/style';
import { 
  Grid, 
  Card, 
  Button,
  CircularProgress
} from '@material-ui/core';
import { useToasts } from 'react-toast-notifications'
import scenarios from '../../../apis/scenarios';
import analyzes from '../../../apis/analyze';

const SimulationInfoEdit = (props) => {
  const classes = useStyles();
  const { addToast } = useToasts()
  const { history } = props;
  const item = props.location.state.item;
  const [progressStatus, setProgressStatus] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedShowChartsMode, setSelectedShowChartsMode] = useState(0);
  const [selectedPkdSection, setSelectedPkdSection] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);

  const [pkdSectionList, setPkdSelectionList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [chartTypeList, setChartTypeList] = useState([]);
  const [chartResultList, setChartResultList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  
  const [idAnalyze, setIdAnalyze] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [scenario, setScenario] = useState({});
  const handleChange = (props) => {
    history.push('/forecasting_module');
  }

  const handleOpen = () => {

  }

  const handleExport = () => {

  }

  const handleSave = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleSaveAnalyze = () => {
    setProgressStatus(true);
    analyzes.updateAnalyze(
      name, 
      selectedChartType, 
      selectedSection, 
      selectedCategory,
      selectedProvince,
      selectedOccupation,
      selectedPkdSection,
      selectedShowChartsMode, 
      scenario.id_scenario,
      idAnalyze
    )
    .then(response => {
      setProgressStatus(false);
      if (response.code === 401) {
        history.push('/login');
      } else {
        if (response.code === 200) {
          addToast(response.message, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true});
          setTimeout(function(){history.push('/analyzes');}, 1000);
        } else {
          addToast(response.message, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true});
        }

      }
    })
  }

  const renderControlView = () => {
    if (
      selectedChartType === 0 
      || selectedSection === 0
      || selectedCategory.length === 0
    ) {
      return <></>
    } else {
      switch(selectedSection) {
        case '1':
          if (
            selectedPkdSection.length === 0
            || selectedShowChartsMode === 0
          ) {
            return <></>
          }
          break;
        case '2':
          if (
            selectedProvince.length === 0
            || selectedShowChartsMode === 0
          ) {
            return <></>
          }
          break;
        case '3':
          if (
            selectedProvince.length === 0
            || selectedOccupation.length === 0
            || selectedShowChartsMode === 0
          ) {
            return <></>
          }
          break;
        case '4':
          if (
            selectedOccupation.length === 0
            || selectedShowChartsMode === 0
          ) {
            return <></>
          }
          break;
        case '5':
          if (
            selectedPkdSection.length === 0
            || selectedOccupation.length === 0
            || selectedShowChartsMode === 0
          ) {
            return <></>
          }
          break;
        case '6':
          if (
             selectedProvince.length === 0
             || selectedOccupation.length === 0
          ) {
            return <></>
          }
          break;
      }
    } {
      return (
        <Grid container spacing={2} className={classes.thirdContainer}>
          <Grid item xs={7} className={classes.controlContainer}>
            <Card className={classes.controlBlock}>
  
            </Card>
          </Grid>
          <Grid item xs={5} className={classes.controlContainer}>
            <Card className={classes.controlBlock}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" className={classes.btnExport} onClick={handleExport} disabled>
                    Eksportuj do CSV
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" className={classes.btnSave} onClick={handleSave}>
                    Zapisz wybór
                  </Button>
                  <NameModal
                    openModal={openModal}
                    handleClose={handleCloseModal}
                    name={name}
                    handleChangeName={(e) => setName(e.target.value)}
                    handleSave={handleSaveAnalyze}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )
    }

  }
  const renderSwitchAddition = () => {
    if (
      selectedChartType === 0
      || selectedSection === 0
      || selectedCategory.length === 0 
    ) {
      return <></>;
    } else {
      switch(selectedSection) {
        case '1': 
           return <PkdSectionAdditionalOption
            pkdSectionValue={selectedPkdSection}
            showChartModeValue={selectedShowChartsMode}
            handleSelectedPkdSection={setSelectedPkdSection}
            handleSelectedShowChartsMode={setSelectedShowChartsMode}
            pkdSectionList={pkdSectionList}
            showChartsMode={chartResultList}
          />
        case '2':
          return <ProvinceAdditionalOption
              provinceValue={selectedProvince}
              showChartModeValue={selectedShowChartsMode}
              handleSelectedProvince={setSelectedProvince}
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              provinceList={provinceList}
              showChartsMode={chartResultList}
            />
        case '3':
          return <TotalAdditionalOption
              provinceValue={selectedProvince} 
              occupationValue={selectedOccupation} 
              showChartModeValue={selectedShowChartsMode} 
              handleSelectedProvince={setSelectedProvince} 
              handleSelectedOccupation={setSelectedOccupation} 
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              provinceList={provinceList}
              occupationList={occupationList}
              showChartsMode={chartResultList}
            />
        case '4':
          return <OccupationAdditionalOption
              occupationValue={selectedOccupation}
              showChartModeValue={selectedShowChartsMode}
              handleSelectedOccupation={setSelectedOccupation}
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              occupationList={occupationList}
              showChartsMode={chartResultList}
            />
        case '5':
          return <OccupationSectorAdditionalOption
              pkdSectionValue={selectedPkdSection} 
              occupationValue={selectedOccupation} 
              showChartModeValue={selectedShowChartsMode} 
              handleSelectedPkdSection={setSelectedPkdSection} 
              handleSelectedOccupation={setSelectedOccupation} 
              handleSelectedShowChartsMode={setSelectedShowChartsMode}
              pkdSectionList={pkdSectionList}
              occupationList={occupationList}
              showChartsMode={chartResultList}
            />
        case '6':
          return <ProvinceOccupationAdditionalOption
              provinceValue={selectedProvince} 
              occupationValue={selectedOccupation} 
              handleSelectedProvince={setSelectedProvince} 
              handleSelectedOccupation={setSelectedOccupation} 
              provinceList={provinceList}
              occupationList={occupationList}
            />
      }
    }
  }

  const getNumArray = (str) => {
    let arr = str ? str.split(',') : [];
    for (let i = 0; i < arr.length; i ++) {
      arr[i] = parseInt(arr[i]);
    }
    return arr;
  }

  useEffect(() => {
    setProgressStatus(true);
    analyzes
      .get(item.id_analyze)
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          setPkdSelectionList(response.data.pkdSections);
          setProvinceList(response.data.provinces);
          setOccupationList(response.data.professions);
          setChartTypeList(response.data.chart_type);
          setSectionList(response.data.sections);
          setCategoryList(response.data.categories);
          setChartResultList(response.data.chart_result);
          setScenario(response.data.scenario);
          setName(response.data.analyze.name);
          setIdAnalyze(response.data.analyze.id_analyze);
          setSelectedChartType(response.data.analyze.id_chart_type);
          setSelectedSection(response.data.analyze.id_section);
          setSelectedCategory(getNumArray(response.data.analyze.id_category));
          setSelectedPkdSection(getNumArray(response.data.analyze.id_pkd));
          setSelectedProvince(getNumArray(response.data.analyze.id_province));
          setSelectedOccupation(getNumArray(response.data.analyze.id_occupation));
          setSelectedShowChartsMode(response.data.analyze.id_chart_result);
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
                {scenario.description}
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
            <SingleSelect value={selectedChartType} handleChange={setSelectedChartType} list={chartTypeList}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedSection} handleChange={setSelectedSection} list={sectionList}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz kategorie
            </div>
            <div className={classes.subHeader}>
              (można wybrać 1, 2 lub 3 kategorie)
            </div>
            <MultiSelect value={selectedCategory} handleChange={setSelectedCategory} list={categoryList}/>
          </Grid>
        </Grid>
      </Card>
      {renderSwitchAddition()}
      {renderControlView()}
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

export default withRouter(SimulationInfoEdit);

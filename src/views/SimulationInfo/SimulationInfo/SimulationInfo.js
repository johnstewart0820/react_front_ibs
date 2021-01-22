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
  NameModal,
  YearSelect,
  ChartArea,
  SortTable
} from '../components';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import {
  Grid,
  Card,
  Button,
  CircularProgress
} from '@material-ui/core';
import { useToasts } from 'react-toast-notifications'
import scenarios from '../../../apis/scenarios';
import analyzes from '../../../apis/analyze';
import analyze from '../../../apis/analyze';
import { ExportToCsv } from 'export-to-csv';

const SimulationInfo = (props) => {
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
  const [selectedOccupationSize, setSelectedOccupationSize] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2021);
  const [chartData, setChartData] = useState([]);
  const [pkdSectionList, setPkdSelectionList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [chartTypeList, setChartTypeList] = useState([]);
  const [chartResultList, setChartResultList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [occupationSizeList, setOccupationSizeList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [field_list, setFieldList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(item.description);

  const [sortOption, setSortOption] = useState({ sortBy: 0, sortOrder: "asc" });
  const requestSort = (pSortBy) => {
    var sortOrder = "asc";
    if (pSortBy === sortOption.sortBy) {
      sortOrder = (sortOption.sortOrder === "asc" ? "desc" : "asc");
    }
    setSortOption({ sortBy: pSortBy, sortOrder: sortOrder })
  }

  const handleChange = (props) => {
    history.push('/forecasting_module');
  }

  const handleOpen = () => {

  }

  const handleExport = () => {

    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: false, 
      showTitle: false,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);
 
    csvExporter.generateCsv(tableData);
  }

  const handleSave = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleSaveAnalyze = () => {
    setProgressStatus(true);
    analyzes.createAnalyze(
      name,
      selectedChartType,
      selectedSection,
      selectedCategory,
      selectedProvince,
      selectedOccupation,
      selectedPkdSection,
      selectedShowChartsMode,
      item.id_scenario,
      selectedOccupationSize
    )
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          if (response.code === 200) {
            addToast(response.message, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true });
            setTimeout(function () { history.push('/analyzes'); }, 1000);
          } else {
            addToast(response.message, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true });
          }

        }
      })
  }

  useEffect(() => {
    analyze.getChartData(
      selectedChartType,
      selectedSection,
      selectedCategory,
      item.id_scenario,
      selectedYear,
      selectedOccupation,
      selectedShowChartsMode
    ).then(response => {
      if (response.code === 401) {
        history.push('/login');
      } else {
        if (response.code === 200) {
          setChartData(response.data.chart_data);
          setTableData(response.data.table_data);
          setFieldList(response.data.field_list);
        } else {
        }
      }
    })
  }, [selectedSection, selectedCategory, selectedOccupation, selectedShowChartsMode, selectedYear, selectedChartType]);
  
  const handleChangeChartType = (change) => {
    setChartData([]);
    setTableData([]);
    setSelectedChartType(change);
  }

  const renderControlView = () => {
    if (
      selectedChartType === 0
      || selectedSection === 0
      || selectedCategory.length === 0
    ) {
      return <></>
    } else {
      switch (selectedSection) {
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
          <Grid container spacing={2} className={classes.controlGrid}>
            <Grid item xs={7} className={classes.controlContainer}>
              <Card className={classes.controlBlock}>
                <YearSelect
                  value={selectedYear}
                  handleChange={setSelectedYear}
                />
              </Card>
            </Grid>
            <Grid item xs={5} className={classes.controlContainer}>
              <Card className={classes.controlBlock}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="secondary" className={classes.btnExport} onClick={handleExport}>
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
          <Grid item xs={7} className={classes.controlContainer}>
            <Card className={classes.controlBlock}>
              <ChartArea
                chart_data={chartData}
                selectedChartType={selectedChartType}
                selectedCategory={selectedCategory}
              />
            </Card>
          </Grid>
          <Grid item xs={5} className={classes.controlContainer}>
            <Card className={classes.tableBlock}>
              <SortTable
                selectedChartType={selectedChartType}
                rows={tableData}
                requestSort={requestSort}
                sortOrder={sortOption.sortOrder}
                sortBy={sortOption.sortBy}
                field_list={field_list}
                handleChangeTableData={setTableData}
              />
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
      switch (selectedSection) {
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
            occupationValue={selectedOccupation}
            provinceValue={selectedProvince}
            occupationSizeValue={selectedOccupationSize}
            showChartModeValue={selectedShowChartsMode}
            handleSelectedProvince={setSelectedProvince}
            handleSelectedOccupation={setSelectedOccupation}
            handleSelectedShowChartsMode={setSelectedShowChartsMode}
            handleSelectedOccupationSize={setSelectedOccupationSize}
            provinceList={provinceList}
            occupationList={occupationList}
            showChartsMode={chartResultList}
            occupationSizeList={occupationSizeList}
          />
        case '4':
          return <OccupationAdditionalOption
            occupationValue={selectedOccupation}
            showChartModeValue={selectedShowChartsMode}
            occupationSizeValue={selectedOccupationSize}
            handleSelectedOccupation={setSelectedOccupation}
            handleSelectedShowChartsMode={setSelectedShowChartsMode}
            handleSelectedOccupationSize={setSelectedOccupationSize}
            occupationList={occupationList}
            showChartsMode={chartResultList}
            occupationSizeList={occupationSizeList}
          />
        case '5':
          return <OccupationSectorAdditionalOption
            occupationValue={selectedOccupation}
            pkdSectionValue={selectedPkdSection}
            occupationSizeValue={selectedOccupationSize}
            showChartModeValue={selectedShowChartsMode}
            handleSelectedPkdSection={setSelectedPkdSection}
            handleSelectedOccupation={setSelectedOccupation}
            handleSelectedShowChartsMode={setSelectedShowChartsMode}
            handleSelectedOccupationSize={setSelectedOccupationSize}
            pkdSectionList={pkdSectionList}
            occupationList={occupationList}
            showChartsMode={chartResultList}
            occupationSizeList={occupationSizeList}
          />
        case '6':
          return <ProvinceOccupationAdditionalOption
            occupationValue={selectedOccupation}
            provinceValue={selectedProvince}
            occupationSizeValue={selectedOccupationSize}
            handleSelectedProvince={setSelectedProvince}
            handleSelectedOccupation={setSelectedOccupation}
            handleSelectedOccupationSize={setSelectedOccupationSize}
            provinceList={provinceList}
            occupationList={occupationList}
            occupationSizeList={occupationSizeList}
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
          setChartTypeList(response.data.chart_type);
          setSectionList(response.data.sections);
          setCategoryList(response.data.categories);
          setChartResultList(response.data.chart_result);
          setOccupationSizeList(response.data.profession_sizes);
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
            <SingleSelect value={selectedChartType} handleChange={handleChangeChartType} list={chartTypeList} />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedSection} handleChange={setSelectedSection} list={sectionList} />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz kategorie
            </div>
            <div className={classes.subHeader}>
              (można wybrać 1, 2 lub 3 kategorie)
            </div>
            <MultiSelect value={selectedCategory} handleChange={setSelectedCategory} list={categoryList} />
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

export default withRouter(SimulationInfo);

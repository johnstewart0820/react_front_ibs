import React, { useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import domtopdf from 'dom-to-pdf';
import { 
  ClusterAdditionalOption, 
  PkdSectionAdditionalOption, 
  ProvinceAdditionalOption,
  MultiSelect, 
  SingleSelect, 
  OccupationAdditionalOption,
  PkdOccupationAdditionalOption,
  ProvinceOccupationAdditionalOption,
  ClusterOccupationAdditionalOption,
  EducationAdditionalOption,
  ControllerArea,
  ChartTableArea,
  MapProvinceArea,
  MapCountyArea,
  SortTable
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
import { CSVLink } from "react-csv";

const SimulationInfoEdit = (props) => {
  const classes = useStyles();
  const chart = useRef(null);
  const { addToast } = useToasts()
  const { history } = props;
  const item = props.location.state.item;
  const [progressStatus, setProgressStatus] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState([]);
  const [selectedChartType, setSelectedChartType] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedMapCategory, setSelectedMapCategory] = useState(0);
  const [selectedShowChartsMode, setSelectedShowChartsMode] = useState(0);
  const [selectedPkdSection, setSelectedPkdSection] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);
  const [selectedOccupationSize, setSelectedOccupationSize] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2011);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedToYear, setSelectedToYear] = useState(2050);
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [field_list, setFieldList] = useState([]);
  const [pkdSectionList, setPkdSelectionList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [chartTypeList, setChartTypeList] = useState([]);
  const [totalChartResultList, setTotalChartResultList] = useState([]);
  const [countyList, setCountyList] = useState([]);
  const [sectionMapList,setSectionMapList] = useState([]);
  const [chartResultList, setChartResultList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [occupationSizeList, setOccupationSizeList] = useState([]);
  const [clusterList, setClusterList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [ageList, setAgeList] = useState([]);

  const [idAnalyze, setIdAnalyze] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [scenario, setScenario] = useState({});
  const [sortOption, setSortOption] = useState({ sortBy: 0, sortOrder: "asc" });
  const [sortTotalOption, setSortTotalOption] = useState({ sortBy: 0, sortOrder: "asc" });
  const [totalTableData, setTotalTableData] = useState([]);
  const [totalFieldList, setTotalFieldList] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [ableRender, setAbleRender] = useState(false);
  const [renderStatus, setRenderStatus] = useState(false);

  const handleChange = (props) => {
    history.push('/forecasting_module');
  }
  const requestSort = (pSortBy) => {
    var sortOrder = "asc";
    if (pSortBy === sortOption.sortBy) {
      sortOrder = (sortOption.sortOrder === "asc" ? "desc" : "asc");
    }
    setSortOption({ sortBy: pSortBy, sortOrder: sortOrder })
  }

  const requestTotalSort = (pSortBy) => {
    var sortOrder = "asc";
    if (pSortBy === sortTotalOption.sortBy) {
      sortOrder = (sortTotalOption.sortOrder === "asc" ? "desc" : "asc");
    }
    setSortTotalOption({ sortBy: pSortBy, sortOrder: sortOrder })
  }
  
  const handleOpen = () => {
    history.push('/analyzes');
  }

  const handleExport = (type) => {
    if (type === 0)
      document.getElementById('export').click();
    if (type === 1)
      handleExportAsPng();
    if (type === 2)
      handleExportAsJpg();
    if (type === 3)
      handleExportAsPdf();
  }

  const handleExportAsPng = () => {
    const dom = chart.current;
    domtoimage.toPng(dom)
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'download.png';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  const handleExportAsJpg = () => {
    const dom = chart.current;
    domtoimage.toJpeg(dom)
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'download.jpg';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  const handleExportAsPdf = () => {
    const dom = chart.current;
    var options = {
      filename: 'download.pdf'
    };
    domtopdf(dom, options, function() {
    });
  }

  useEffect(() => {
    setChartResultList(totalChartResultList);
    if (selectedChartType == 3) {
      setSelectedSection(0);
    }
    if (selectedChartType == 2) {
      let _arr = JSON.parse(JSON.stringify(totalChartResultList));
      setChartResultList([_arr[1]]);
      setSelectedShowChartsMode(1);
    }
  }, [selectedChartType]);

  useEffect(() => {
    if (parseInt(selectedSection) === 8)
      setSelectedCategory([]);
  }, [selectedSection])
  
  const handleSave = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const checkRenderStatus = () => {
    return parseInt(selectedChartType) === 0
    || parseInt(selectedSection) === 0
    || (parseInt(selectedChartType) !== 3 && parseInt(selectedSection) !== 8 && selectedCategory.length === 0) || (parseInt(selectedChartType) === 3 && parseInt(selectedMapCategory) === 0)
    || (parseInt(selectedSection) === 1 && (selectedPkdSection.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 2 && (selectedProvince.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 3 && (selectedCluster.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 4 && (selectedOccupation.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 5 && (selectedPkdSection.length === 0 || selectedOccupation.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 6 && (selectedProvince.length === 0 || selectedOccupation.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 7 && (selectedCluster.length === 0 || selectedOccupation.length === 0 || parseInt(selectedShowChartsMode) === 0))
    || (parseInt(selectedSection) === 8 && (selectedEducation.length === 0 || selectedAge.length === 0 || parseInt(selectedShowChartsMode) === 0));
  }

  const handleSaveAnalyze = () => {
    setProgressStatus(true);
    analyzes.updateAnalyze(
      name, 
      selectedChartType, 
      selectedSection, 
      parseInt(selectedChartType) === 3 ? selectedMapCategory : selectedCategory,
      selectedProvince,
      selectedOccupation,
      selectedPkdSection,
      selectedShowChartsMode, 
      scenario.id_scenario,
      idAnalyze,
      selectedOccupationSize,
      selectedCluster,
      selectedEducation,
      selectedAge,
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

  const handleRender = () => {
    setTableData([]);
    analyzes.getChartData(
      selectedChartType,
      selectedSection,
      parseInt(selectedChartType) === 3 ? selectedMapCategory : selectedCategory,
      item.id_scenario,
      selectedYear,
      selectedToYear,
      selectedOccupation,
      selectedPkdSection,
      selectedProvince,
      selectedCluster,
      selectedEducation,
      selectedAge,
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
    analyzes.getTotalData(
      selectedChartType,
      selectedSection,
      parseInt(selectedChartType) === 3 ? selectedMapCategory : selectedCategory,
      item.id_scenario,
      selectedYear,
      selectedToYear,
      selectedOccupation,
      selectedPkdSection,
      selectedProvince,
      selectedCluster,
      selectedEducation,
      selectedAge,
      selectedShowChartsMode
    ).then(response => {
      if (response.code === 401) {
        history.push('/login');
      } else {
        if (response.code === 200) {
          setTotalTableData(response.data.table_data);
          setTotalFieldList(response.data.field_list);
          let _arr = [];
          for (let i = 0; i < response.data.field_list.length; i ++) {
            let _item = {};
            _item.label = response.data.field_list[i].toString();
            _item.key = response.data.field_list[i].toString();
            _arr.push(_item);
          }
          setHeaders(_arr);
          let _year_arr = [];
          for (let i = parseInt(response.data.min); i <= parseInt(response.data.max); i ++) {
            _year_arr.push(i);
          }
          setYearList(_year_arr);
        } else {
        }
      }
    })
    setRenderStatus(true);
  }

  const renderResultView = () => {
    if (parseInt(selectedChartType) === 3) {
      let chart_title = '';
      
      chart_title += categoryList[selectedMapCategory - 1].name + ' - przekrój ';
      chart_title += sectionList[selectedSection - 1].name;
      if (parseInt(selectedSection) === 6) {
        return <MapProvinceArea
          data={chart}
          provinceList={provinceList}
          selectedProvince={selectedProvince}
          selectedShowChartsMode={selectedShowChartsMode}
          chartData={chartData}
          chart_title={chart_title}
        />
      } else {
        return <MapCountyArea
          data={chart}
          clusterList={clusterList}
          countyList={countyList}
          selectedCluster={selectedCluster}
          selectedShowChartsMode={selectedShowChartsMode}
          chartData={chartData}
          chart_title={chart_title}
        />
      }
    } else {
      let chart_title = '';
      if (selectedCategory.length > 0) {
        for(let i = 0; i < selectedCategory.length - 1; i ++) {
          chart_title += categoryList[selectedCategory[i] - 1].name + '/';
        }
        chart_title += categoryList[selectedCategory[selectedCategory.length - 1] - 1].name + ' - przekrój ';
        chart_title += sectionList[selectedSection - 1].name;
      } else {
        chart_title = sectionList[selectedSection - 1].name;
      }
      return <ChartTableArea 
        data={chart}
        chartData={chartData}
        selectedChartType={selectedChartType}
        selectedCategory={selectedCategory}
        tableData={tableData}
        requestSort={requestSort}
        sortOption={sortOption}
        field_list={field_list}
        setTableData={setTableData}
        chart_title={chart_title}
        selectedSection={selectedSection}
      />
    }
  }

  const renderTotalView = () => (
    <Grid item xs={12}>
    <Card className={classes.totalView}>
        <SortTable
          rows={totalTableData}
          requestSort={requestTotalSort}
          sortOrder={sortTotalOption.sortOrder}
          sortBy={sortTotalOption.sortBy}
          field_list={totalFieldList}
          handleChangeTableData={setTotalTableData}
        />
    </Card>
    </Grid>
  )

  const renderControlView = () => {
    if (checkRenderStatus() || !renderStatus) {
      return <></>
    }
    return (
      <Grid container spacing={2} className={classes.thirdContainer}>
        <ControllerArea
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
          setSelectedToYear={setSelectedToYear}
          selectedToYear={selectedToYear}
          handleExport={handleExport}
          handleSave={handleSave}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          setName={setName}
          handleSaveAnalyze={handleSaveAnalyze}
          name={name}
          yearList={yearList}
          selectedChartType={selectedChartType}
        />
        <CSVLink asyncOnClick={true} data={totalTableData} headers={headers} filename="generated.csv" style={{display: 'none'}} id='export'>Export to CSV</CSVLink>
        {renderResultView()}
        {renderTotalView()}
      </Grid>
    )
  }
  const renderSwitchAddition = () => {
    if (parseInt(selectedChartType) === 0 || parseInt(selectedSection) === 0 || (parseInt(selectedChartType) !== 3 && parseInt(selectedSection) !== 8 && selectedCategory.length === 0) || (parseInt(selectedChartType) === 3 && parseInt(selectedMapCategory) === 0)) {
      return <></>;
    }
    switch (parseInt(selectedSection)) {
      case 1:
        return <PkdSectionAdditionalOption
          pkdSectionValue={selectedPkdSection}
          showChartModeValue={selectedShowChartsMode}
          handleSelectedPkdSection={setSelectedPkdSection}
          handleSelectedShowChartsMode={setSelectedShowChartsMode}
          pkdSectionList={pkdSectionList}
          showChartsMode={chartResultList}
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 2:
        return <ProvinceAdditionalOption
          provinceValue={selectedProvince}
          showChartModeValue={selectedShowChartsMode}
          handleSelectedProvince={setSelectedProvince}
          handleSelectedShowChartsMode={setSelectedShowChartsMode}
          provinceList={provinceList}
          showChartsMode={chartResultList}
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 3:
        return <ClusterAdditionalOption
          clusterValue={selectedCluster}
          showChartModeValue={selectedShowChartsMode}
          handleSelectedCluster={setSelectedCluster}
          handleSelectedShowChartsMode={setSelectedShowChartsMode}
          clusterList={clusterList}
          showChartsMode={chartResultList}
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 4:
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
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 5:
        return <PkdOccupationAdditionalOption
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
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 6:
        return <ProvinceOccupationAdditionalOption
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
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 7:
        return <ClusterOccupationAdditionalOption
          occupationValue={selectedOccupation}
          clusterValue={selectedCluster}
          occupationSizeValue={selectedOccupationSize}
          showChartModeValue={selectedShowChartsMode}
          handleSelectedCluster={setSelectedCluster}
          handleSelectedOccupation={setSelectedOccupation}
          handleSelectedOccupationSize={setSelectedOccupationSize}
          handleSelectedShowChartsMode={setSelectedShowChartsMode}
          clusterList={clusterList}
          occupationList={occupationList}
          occupationSizeList={occupationSizeList}
          showChartsMode={chartResultList}
          ableRender={ableRender}
          handleRender={handleRender}
        />
      case 8:
        return <EducationAdditionalOption
          educationValue={selectedEducation}
          ageValue={selectedAge}
          showChartModeValue={selectedShowChartsMode}
          handleSelectedEducation={setSelectedEducation}
          handleSelectedAge={setSelectedAge}
          handleSelectedShowChartsMode={setSelectedShowChartsMode}
          educationList={educationList}
          ageList={ageList}
          showChartsMode={chartResultList}
          ableRender={ableRender}
          handleRender={handleRender}
        />
    }
  }

  const getNumArray = (str) => {
    let arr = str ? str.split(',') : [];
    for (let i = 0; i < arr.length; i ++) {
      arr[i] = parseInt(arr[i]);
    }
    return arr;
  }

  const getStringArray = (str) => {
    let arr = str ? str.split(',') : [];
    for (let i = 0; i < arr.length; i ++) {
      arr[i] = arr[i];
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
          setClusterList(response.data.clusters);
          setPkdSelectionList(response.data.pkdSections);
          setProvinceList(response.data.provinces);
          setOccupationList(response.data.professions);
          setChartTypeList(response.data.chart_type);
          setSectionList(response.data.sections);
          setCategoryList(response.data.categories);
          setChartResultList(response.data.chart_result);
          setTotalChartResultList(response.data.chart_result);
          setOccupationSizeList(response.data.profession_sizes);
          setScenario(response.data.scenario);
          setName(response.data.analyze.name);
          setIdAnalyze(response.data.analyze.id_analyze);
          setSelectedCluster(getNumArray(response.data.analyze.id_cluster));
          setSelectedChartType(response.data.analyze.id_chart_type);
          setSelectedSection(response.data.analyze.id_section);
          if (parseInt(response.data.analyze.id_chart_type) === 3) {
            setSelectedMapCategory(response.data.analyze.id_category)
          } else {
            setSelectedCategory(getNumArray(response.data.analyze.id_category));
          }
          setSelectedPkdSection(getNumArray(response.data.analyze.id_pkd));
          setSelectedProvince(getNumArray(response.data.analyze.id_province));
          setSelectedOccupation(getNumArray(response.data.analyze.id_occupation));
          setSelectedShowChartsMode(response.data.analyze.id_chart_result);
          setSelectedOccupationSize(response.data.analyze.id_occupation_size);
          setCountyList(response.data.counties);
          setEducationList(response.data.educations);
          setAgeList(response.data.ages);
          setSelectedEducation(getStringArray(response.data.analyze.id_education));
          setSelectedAge(getStringArray(response.data.analyze.id_age));
          let sections = [];
          response.data.sections.map((item, index) => {
            if (index == 5 || index == 6) {
              sections.push(item);
            }
          })
          setSectionMapList(sections);
        }
      })
  }, []);

  useEffect(() => {
    setAbleRender(!checkRenderStatus());
    setTotalTableData([]);
    setTotalFieldList([]);
    setChartData([]);
  }, [selectedSection, selectedCategory, selectedOccupation, selectedPkdSection, selectedProvince, selectedCluster, selectedShowChartsMode, selectedYear, selectedToYear, selectedChartType, selectedMapCategory, selectedEducation, selectedAge]);
  const handleChangeChartType = (change) => {
    setChartData([]);
    setTableData([]);
    setSelectedChartType(change);
  }
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
            <SingleSelect value={selectedChartType} handleChange={handleChangeChartType} list={chartTypeList}/>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedSection} handleChange={setSelectedSection} list={parseInt(selectedChartType) != 3 ? sectionList : sectionMapList} />
          </Grid>
          <Grid item xs={4}>
          {
              parseInt(selectedSection) === 8
              ?
              <></>
              :
              <>
                <div className={classes.titleHeader}>
                  Wybierz kategorie
                </div>
                <div className={classes.subHeader}>
                  (można wybrać 1, 2 lub 3 kategorie)
                </div>
                {
                selectedChartType == 3
                  ?
                  <SingleSelect value={selectedMapCategory} handleChange={setSelectedMapCategory} list={categoryList} />
                  :
                  <MultiSelect value={selectedCategory} handleChange={setSelectedCategory} list={categoryList} />
                }
              </>
            }
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

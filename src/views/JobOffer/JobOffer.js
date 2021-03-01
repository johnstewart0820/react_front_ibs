import React, { useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import domtopdf from 'dom-to-pdf';
import {
  MultiSelect,
  SingleSelect,
  ControllerArea,
  ChartTableArea,
  MapProvinceArea,
  MapCountyArea,
  OccupationSelectionModal,
  SortTable
} from './components';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import {
  Grid,
  Card,
  CircularProgress,
  Button
} from '@material-ui/core';
import { useToasts } from 'react-toast-notifications'
import job from '../../apis/job';
import { ExportToCsv } from 'export-to-csv';

const JobOffer = (props) => {
  const classes = useStyles();
  const chart = useRef(null);
  const { addToast } = useToasts()
  const { history } = props;
  const [progressStatus, setProgressStatus] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState([]);
  const [selectedOccupationSize, setSelectedOccupationSize] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [occupationList, setOccupationList] = useState([]);

  const [chartTypeList, setChartTypeList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [sectionMapList, setSectionMapList] = useState([]);
  const [occupationSizeList, setOccupationSizeList] = useState([]);
  const [clusterList, setClusterList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [countyList, setCountyList] = useState([]);
  const [totalTableData, setTotalTableData] = useState([]);
  const [totalFieldList, setTotalFieldList] = useState([]);
  const [fromDate, setFromDate] = useState({year: 2020, month: 0});
  const [toDate, setToDate] = useState({year: 2021, month: 1});
  const [sortTotalOption, setSortTotalOption] = useState({ sortBy: 0, sortOrder: "asc" });

  const [ableRender, setAbleRender] = useState(false);
  const [renderStatus, setRenderStatus] = useState(false);

  const requestTotalSort = (pSortBy) => {
    var sortOrder = "asc";
    if (pSortBy === sortTotalOption.sortBy) {
      sortOrder = (sortTotalOption.sortOrder === "asc" ? "desc" : "asc");
    }
    setSortTotalOption({ sortBy: pSortBy, sortOrder: sortOrder })
  }

  const handleExportCSV = () => {

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

    csvExporter.generateCsv(totalTableData);
  }

  const handleExport = (type) => {
    if (type === 0)
      handleExportCSV();
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

  const checkRenderStatus = () => {
    return (
      parseInt(selectedChartType) === 0
      || parseInt(selectedSection) === 0
      || (parseInt(selectedSection) == 2 && selectedProvince.length === 0)
      || (parseInt(selectedSection) == 3 && selectedCluster.length === 0)
      || (parseInt(selectedChartType) !== 4 && parseInt(selectedSection) === 1 && selectedOccupation.length === 0)
    );
  }

  const handleRender = () => {
    job.getChartData(
      selectedChartType,
      selectedSection,
      selectedOccupation,
      selectedProvince,
      selectedCluster,
      fromDate,
      toDate,
    ).then(response => {
      if (response.code === 401) {
        history.push('/login');
      } else {
        if (response.code === 200) {
          setChartData(response.data.chart_data);
          setTotalTableData(response.data.table_data);
          setTotalFieldList(response.data.field_list);
        } else {
        }
      }
    })
    setRenderStatus(true);
  }
  useEffect(() => {
    setAbleRender(!checkRenderStatus());
  }, [selectedSection, selectedOccupation, selectedProvince, selectedCluster, fromDate, toDate, selectedChartType]);

  useEffect(() => {
    if (selectedChartType == 4) {
      setSelectedSection(0);
    }
  }, [selectedChartType]);

  const handleChangeChartType = (change) => {
    setChartData([]);
    setSelectedChartType(change);
  }

  const renderResultView = () => {
    if (parseInt(selectedChartType) === 1 || parseInt(selectedChartType) === 2 || parseInt(selectedChartType) === 3) {
      return <ChartTableArea 
        data={chart}
        chartData={chartData}
        selectedChartType={selectedChartType}
        />
    } else if (parseInt(selectedChartType) === 4) {
      if (parseInt(selectedSection) === 2) {
        return <MapProvinceArea
          data={chart}
          provinceList={provinceList}
          selectedProvince={selectedProvince}
          chartData={chartData}
        />
      } else {
        return <MapCountyArea
          data={chart}
          clusterList={clusterList}
          countyList={countyList}
          selectedCluster={selectedCluster}
          chartData={chartData}
        />
      }
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
          handleExport={handleExport}
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
          chartType={selectedChartType}
        />
        
        {renderResultView()}
        {renderTotalView()}
      </Grid>
    )
  }
  
  useEffect(() => {
    setProgressStatus(true);
    job
      .getInfo()
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          setOccupationList(response.data.professions);
          setChartTypeList(response.data.chartType);
          setSectionList(response.data.type);
          setProvinceList(response.data.provinces);
          setClusterList(response.data.clusters);
          setCountyList(response.data.counties);
          let arr = [];
          response.data.type.map((item, index) => {
            if (index !== 0) {
              arr.push(item);
            }
          })
          setSectionMapList(arr);
          setOccupationSizeList(response.data.profession_sizes);
        }
      })
  }, []);

  return (
    <>
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className={classes.mainHeader}>
                  Przeglądaj wyniki
                </div>
              </Grid>
              {
                parseInt(selectedSection) !== 0 ?
                  <Grid item xs={6}>
                    <div className={classes.mainHeader}>
                      Dodatkowe opcje
                  </div>
                  </Grid>
                  :
                  <></>
              }
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.titleHeader}>
              Wybierz typ wykresu
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedChartType} handleChange={handleChangeChartType} list={chartTypeList} />
          </Grid>
          <Grid item xs={3}>
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <SingleSelect value={selectedSection} handleChange={setSelectedSection} list={parseInt(selectedChartType) !== 4 ? sectionList : sectionMapList} />
          </Grid>
          <Grid item xs={4}>
            {
              parseInt(selectedSection) === 1 ?
                <OccupationSelectionModal
                  node={occupationList}
                  occupationSize={selectedOccupationSize}
                  handleSelectedOccupation={setSelectedOccupation}
                  handleSelectedOccupationSize={setSelectedOccupationSize}
                  occupationSizeList={occupationSizeList}
                  selectedOccupation={selectedOccupation}
                />
                :
                parseInt(selectedSection) === 2 ?
                <>
                  <div className={classes.titleHeader}>
                    Wybierz województwo
                  </div>
                  <div className={classes.subSecondHeader}>
                  </div>
                  <MultiSelect value={selectedProvince} handleChange={setSelectedProvince} list={provinceList} />
                </>
                :
                parseInt(selectedSection) === 3 ?
                <>
                  <div className={classes.titleHeader}>
                    Wybierz klastry
                  </div>
                  <div className={classes.subSecondHeader}>
                  </div>
                  <MultiSelect value={selectedCluster} handleChange={setSelectedCluster} list={clusterList} />
                </>
                :
                <></>
            }

          </Grid>
          {
            parseInt(selectedSection) === 0 ?
            <></>
            :
            <Grid item xs={2}>
              <div className={classes.titleHeader}>
                &nbsp;
              </div>
              <div className={classes.secondTitleHeader}>
                &nbsp;
              </div>
              <Button variant="contained" color="secondary" className={classes.btnOpen} disabled={!ableRender} onClick={() => handleRender()}>
                Pokaż
              </Button>
            </Grid>
          }
          
        </Grid>
      </Card>
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

export default withRouter(JobOffer);

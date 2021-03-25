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
  const [fromDate, setFromDate] = useState({ year: 2020, month: 0 });
  const [toDate, setToDate] = useState({ year: 2021, month: 1 });
  const [sortTotalOption, setSortTotalOption] = useState({ sortBy: 0, sortOrder: "asc" });

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
    domtopdf(dom, options, function () {
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
    setTotalTableData([]);
    setTotalFieldList([]);
    setChartData([]);
    setRenderStatus(false);
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
    let chart_title = 'Ilość ofert pracy - przekrój ';
    chart_title += sectionList[selectedSection - 1].name.toLowerCase();
    if (parseInt(selectedChartType) === 1 || parseInt(selectedChartType) === 2 || parseInt(selectedChartType) === 3) {
      return <ChartTableArea
        data={chart}
        chartData={chartData}
        selectedChartType={selectedChartType}
        chart_title={chart_title}
      />
    } else if (parseInt(selectedChartType) === 4) {
      if (parseInt(selectedSection) === 2) {
        return <MapProvinceArea
          data={chart}
          provinceList={provinceList}
          selectedProvince={selectedProvince}
          chartData={chartData}
          chart_title={chart_title}
        />
      } else {
        return <MapCountyArea
          data={chart}
          clusterList={clusterList}
          countyList={countyList}
          selectedCluster={selectedCluster}
          chartData={chartData}
          chart_title={chart_title}
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
    if (checkRenderStatus()) {
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
          handleRender={handleRender}
        />
        {
          renderStatus ?
            <>
              <>
                {renderResultView()}
              </>
              <>
                {renderTotalView()}
              </>
            </>
            :
            <></>
        }
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
          <Grid item md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={classes.mainHeader}>
                  Przeglądaj wyniki
                </div>
              </Grid>
              <Grid item md={6} xs={12} style={{height: '130px', position: 'relative'}}>
                <div className={classes.titleHeader}>
                  Wybierz typ wykresu
                </div>
                <div className={classes.subHeader}>
                  (można wybrać tylko 1 z typów jednocześnie)
                </div>
                <div style={{position: 'absolute', bottom: '8px', width: 'calc(100% - 16px)'}}>
                  <SingleSelect value={selectedChartType} handleChange={handleChangeChartType} list={chartTypeList} />
                </div>
              </Grid>
              <Grid item md={6} xs={12} style={{height: '130px', position: 'relative'}}>
                <div className={classes.titleHeader}>
                  Wybierz przekrój
                </div>
                <div className={classes.subHeader}>
                  (można wybrać tylko 1 z typów jednocześnie)
                </div>
                <div style={{position: 'absolute', bottom: '8px', width: 'calc(100% - 16px)'}}>
                  <SingleSelect value={selectedSection} handleChange={setSelectedSection} list={parseInt(selectedChartType) !== 4 ? sectionList : sectionMapList} />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container spacing={2}>
            {
                parseInt(selectedSection) !== 0 ?
                  <Grid item xs={12}>
                    <div className={classes.mainHeader}>
                      Dodatkowe opcje
                    </div>
                  </Grid>
                  :
                  <></>
              }
              <Grid item xs={12} className={classes.additional_div}>
                <div style={{height: '112px'}}>
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
                      <div className={classes.additional_block}>
                        <div className={classes.titleHeader}>
                          Wybierz województwo
                        </div>
                        <div className={classes.subHeader}>
                          (można wybrać więcej niż 1 województwo jednocześnie)
                        </div>
                        <div className={classes.bottom_block}>
                          <MultiSelect value={selectedProvince} handleChange={setSelectedProvince} list={provinceList} />
                        </div>
                      </div>
                      :
                      parseInt(selectedSection) === 3 ?
                        <div className={classes.additional_block}>
                          <div className={classes.titleHeader}>
                            Wybierz klastry
                          </div>
                          <div className={classes.subHeader}>
                            (można wybrać max.8 klastrów jednocześnie)
                          </div>
                          <div className={classes.bottom_block}>
                            <MultiSelect value={selectedCluster} handleChange={setSelectedCluster} list={clusterList} />
                          </div>
                        </div>
                        :
                        <></>
                }
                </div>
              </Grid>
            </Grid>
          </Grid>
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

import React, { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom';
import useStyles from './style';

import analyzes from '../../../../apis/analyze';
import {ChartArea} from '../'

const SimulationChart = (props) => {
  const classes = useStyles();
  const { history, id_analyze } = props;
  const [item, setItem] = useState(props.location.state ? props.location.state.item : 1);

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
  const [selectedYear, setSelectedYear] = useState(2011);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [selectedToYear, setSelectedToYear] = useState(2050);
  const [chartData, setChartData] = useState([]);
  const [name, setName] = useState('');

  const getNumArray = (str) => {
    let arr = str ? str.split(',') : [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    return arr;
  }

  const getStringArray = (str) => {
    let arr = str ? str.split(',') : [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i];
    }
    return arr;
  }

  useEffect(() => {
    setProgressStatus(true);
    analyzes
      .get(id_analyze)
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          let _analyze = response.data.analyze;
          setItem(response.data.scenario.id_scenario);
          setName(response.data.analyze.name);
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
          setSelectedEducation(getStringArray(response.data.analyze.id_education));
          setSelectedAge(getStringArray(response.data.analyze.id_age));
          handleRender(
            _analyze.id_chart_type,
            _analyze.id_section,
            getNumArray(_analyze.id_category),
            Number(_analyze.id_scenario),
            selectedYear,
            selectedToYear,
            getNumArray(_analyze.id_occupation),
            getNumArray(_analyze.id_pkd),
            getNumArray(_analyze.id_province),
            getNumArray(_analyze.id_cluster),
            getStringArray(_analyze.id_education),
            getStringArray(_analyze.id_age),
            _analyze.id_chart_result

          )
        }
      })
  }, []);

  const handleRender = (selectedChartType, selectedSection, selectedCategory, item, selectedYear, selectedToYear, selectedOccupation, selectedPkdSection, selectedProvince,
    selectedCluster, selectedEducation, selectedAge, selectedShowChartsMode) => {
    setProgressStatus(true);
    analyzes.getChartData(
      selectedChartType,
      selectedSection,
      selectedCategory,
      item,
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
          let chart_data = response.data.chart_data;
          setChartData(chart_data);
          setProgressStatus(false);
        } else {
        }
      }
    })
  }
  return (
    <ChartArea
      chart_data={chartData}
      selectedChartType={selectedChartType}
      selectedCategory={selectedCategory}
      selectedSection={selectedSection}
    />
  );
};

export default withRouter(SimulationChart);

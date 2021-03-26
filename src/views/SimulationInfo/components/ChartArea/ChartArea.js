import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid
} from '@material-ui/core';
import {
  Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Text
} from 'recharts';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
const NotAxisTickButLabel = props=> {
  let value = props.payload.value + '';
  if (value.length > 20)
    value = value.substring(0, 20);
  return (
   <g transform={"translate( " + props.x + "," + props.y + " )" }>
      <text x={0} y={0} dy={5}  fontFamily="Roboto"  fontSize="10px"  fill={props.color || "#44545e" } transform="rotate(90)">
        {value}
      </text>
    </g>  
  ); 
}

const ChartArea = (props) => {
  const { chart_data, selectedChartType, selectedCategory, selectedSection } = props;
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(chart_data);
  }, [chart_data]);
  const convertData = (data) => {
    let _arr = [];
    if (data === null || data === undefined)
      return _arr;
    _arr = data.map((item, index) => {
      let luka = null, podaz = null, popyt = null, zat = null, Rok;
      if (parseInt(item['Luka']) !== 0 || parseInt(item['Rok']) >= 2019)
        luka = item['Luka'];
      if (parseInt(item['Podaż pracy']) !== 0 || parseInt(item['Rok']) >= 2019)
        podaz = item['Podaż pracy'];
      if (parseInt(item['Popyt na pracę']) !== 0 || parseInt(item['Rok']) >= 2019)
        popyt = item['Popyt na pracę'];
      if (parseInt(item['Zatrudnienie']) !== 0 || parseInt(item['Rok']) <= 2020)
        zat = item['Zatrudnienie'];
      return {'Luka (prawa oś)': luka, 'Podaż pracy' : podaz, 'Popyt na pracę' : popyt, 'Zatrudnienie' : zat, 'Rok': item['Rok'], 'Wartość': item['Wartość']};
    })
    return _arr;
  }
  return (
    <>
      <Grid container spacing={0} className={classes.simulationView}>
        {selectedChartType == 1 ?
          chartData.map((item, index) => (
          <div className={classes.container}>
            <div className={classes.chartTitle}>
              {item.name}
            </div>
            <ResponsiveContainer>
              <LineChart
                data={convertData(item.data)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Rok" />
                <YAxis />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                {
                parseInt(selectedSection) !== 8 ?
                  selectedCategory.map((item, index) => (
                    item == 1 ?
                      <Line type="monotone" dataKey="Popyt na pracę" stroke="#D6324B" />
                    :
                      item == 2 ?
                        <Line type="monotone" dataKey="Podaż pracy" stroke="#b0a502" />
                      :
                        item == 3 ?
                          <Line type="monotone" dataKey="Zatrudnienie" stroke="#30a2cb" />
                          :
                          <Line yAxisId="right" type="monotone" dataKey="Luka (prawa oś)" stroke="#022ba5" />
                  ))
                :
                  <Line type="monotone" dataKey="Wartość" stroke="#30a2cb" />
                  // <Line type="monotone" dataKey="Rok" stroke="#30a2cb" />
                }
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))
        :
        <div className={classes.container}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={0} height={100}  tick={<NotAxisTickButLabel/> }/>
            <YAxis />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            {
              parseInt(selectedSection) !== 8 
              ?
              selectedCategory.map((item, index) => (
                item == 1 ?
                <Bar dataKey="Popyt na pracę" fill="#D6324B" >
                </Bar>
                :
                  item == 2 ?
                  <Bar dataKey="Podaż pracy" fill="#b0a502" />
                  :
                    item == 3 ?
                    <Bar dataKey="Zatrudnienie" fill="#30a2cb" />                    
                    :
                    <Bar yAxisId="right" dataKey="Luka" fill="#022ba5" />
              ))
              :
              <Bar dataKey="Wartość" fill="#D6324B" />
            }
          </BarChart>
        </ResponsiveContainer>
        </div>
        }
      </Grid>
    </>
  );
};

export default withRouter(ChartArea);

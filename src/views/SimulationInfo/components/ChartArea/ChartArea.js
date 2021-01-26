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

const ChartArea = (props) => {
  const { chart_data, selectedChartType, selectedCategory } = props;
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(chart_data);
  }, [chart_data]);

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
                data={item.data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Rok" />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                  selectedCategory.map((item, index) => (
                    item == 1 ?
                      <Line type="monotone" dataKey="Popyt na pracę" stroke="#a52b02" />
                    :
                      item == 2 ?
                        <Line type="monotone" dataKey="Podaż pracy" stroke="#b0a502" />
                      :
                          <Line type="monotone" dataKey="Luka" stroke="#022ba5" />
                  ))
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
            <XAxis dataKey="name" interval={0} height={300} width={50} angle={90} textAnchor="start"/>
            <YAxis />
            <Tooltip />
            <Legend />
            {
              selectedCategory.map((item, index) => (
                item == 1 ?
                <Bar dataKey="Popyt na pracę" fill="#a52b02" >
                </Bar>
                :
                  item == 2 ?
                  <Bar dataKey="Podaż pracy" fill="#b0a502" />
                  :
                  <Bar dataKey="Luka" fill="#022ba5" />
              ))
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

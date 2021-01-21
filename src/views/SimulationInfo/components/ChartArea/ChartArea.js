import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CircularProgress,
} from '@material-ui/core';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend
} from 'recharts';
import { withRouter } from 'react-router-dom';
import useStyles from './style';

const ChartArea = (props) => {
  const { chart_data, occupationList, selectedOccupation } = props;
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(chart_data);
  }, [chart_data]);

  return (
    <>
      <Grid container spacing={0} className={classes.simulationView}>
        {chartData.map((item, index) => (
          <div className={classes.container}>
            <div className={classes.chartTitle}>
              {item.name}              
            </div>
            <ResponsiveContainer>
              <BarChart
                data={item.data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 15,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Popyt na pracę" fill="#a52b02" />
                <Bar dataKey="Podaż pracy" fill="#b0a502" />
                <Bar dataKey="Luka" fill="#022ba5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        ))}
      </Grid>
    </>
  );
};

export default withRouter(ChartArea);

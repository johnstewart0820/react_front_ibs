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
  const value = props.payload.value + '';
  let arr = value.match(/.{1,11}/g);
  return (
   <g transform={"translate( " + props.x + "," + props.y + " )" }>
     {
       arr.map((item, index) => (
        <text x={-7 * item.length / 2} y={index * 16} dy={16}  fontFamily="Roboto"  fontSize="14px"  fill={props.color || "#44545e" } >
          {item}
        </text>
       ))
     }
    </g>  
  ); 
}

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
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                {
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
                          <Line yAxisId="right" type="monotone" dataKey="Luka" stroke="#022ba5" />
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
            <XAxis dataKey="name" interval={0} angle={0} height={100}  tick={<NotAxisTickButLabel/> }/>
            <YAxis />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            {
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

import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid
} from '@material-ui/core';
import {
  Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
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

const renderLabel = (entry) =>  {
  return entry.name;
}

const ChartArea = (props) => {
  const { chart_data, selectedChartType } = props;
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);
  const [monthList, setMonthList] = useState(['Styc', 'Luty', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sierp', 'Wrz', 'Paźdz', 'List', 'Grudz']);
  const [max, setMax] = useState(0);
  useEffect(() => {
    let m = 0;
    for (let i = 0; i < chart_data.length; i ++) {
      if (parseInt(chart_data[i].value) > m) {
        m = parseInt(chart_data[i].value);
      }
      chart_data[i]['name'] = monthList[chart_data[i].month - 1] + ' ' + chart_data[i].year;
      chart_data[i]['value'] = parseInt(chart_data[i]['value']);
    }
    setMax(m);
    setChartData(chart_data);
  }, [chart_data]);
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  const COLORS = ['#fd533c', '#9b210a', '#870d00', '#730000', '#5f0000', '#4b0000', '#230000', '#190000'];
  
  return (
    console.log(chartData),
    <>
      <Grid container spacing={0} className={classes.simulationView}>
        {selectedChartType == 1 ?
          <div className={classes.container}>
            <ResponsiveContainer>
              <LineChart
                data={chartData}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, parseInt(max / 1000 + 1) * 1000]}/>
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#a52b02" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        :
        selectedChartType == 3 ?
        <div className={classes.container}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={0} height={100}  tick={<NotAxisTickButLabel/> }/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#a52b02" />
          </BarChart>
        </ResponsiveContainer>
        </div>
        :
        <div className={classes.container}>
          <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={chartData}
              fill="#8884d8"
              label={renderLabel}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </ResponsiveContainer>
        </div>
        }
      </Grid>
    </>
  );
};

export default withRouter(ChartArea);

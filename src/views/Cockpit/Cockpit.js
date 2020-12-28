import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

// import {
//   Budget,
//   TotalUsers,
//   TasksProgress,
//   TotalProfit,
//   LatestSales,
//   UsersByDevice,
//   LatestProducts,
//   LatestOrders
// } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Cockpit = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};

export default Cockpit;

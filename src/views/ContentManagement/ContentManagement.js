import React from 'react';
import { makeStyles } from '@material-ui/styles';

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

const ContentManagement = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};

export default ContentManagement;

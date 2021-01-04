import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Help = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      a
    </div>
  );
};

export default Help;

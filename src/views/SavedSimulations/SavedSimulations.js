import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const SavedSimulations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
};

export default SavedSimulations;

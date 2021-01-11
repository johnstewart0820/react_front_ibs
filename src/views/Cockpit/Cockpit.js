import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import {
  CircularProgress,
  Grid,
  Card,
  Button
} from '@material-ui/core';
import contents from '../../apis/contents';
const Cockpit = props => {
  const { children } = props;
  const [blocks, setBlocks] = useState([]);
  const [progressStatus, setProgressStatus] = useState(false);
  const { history } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  
  useEffect(() => {
    contents
    .getAllBlocks()
    .then(response => {
      if (response.code === 200) {
        setBlocks(response.data.blocks);
      }
    })
  }, []);
  const handleGotoForecastingModule = () => {
    history.push('/forecasting_module');
  }
  
  const handleGotoJobOffer = () => {
    history.push('/job_offer');
  }
  return (
    <div className={classes.public}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.controlBlock}>
            <div className={classes.header}>Witaj w Systemie Prognozowania Polskiego Rynku Pracy!</div>
            <div className={classes.subHeader}>Wybierz modul, ktory Cie interesuje:</div>
            <div className={classes.buttonBlock}>
            <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleGotoForecastingModule}>
              Modul Prognostyczny
            </Button>
            <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleGotoJobOffer}>
              Modul Internetowych Ofert Pracy
            </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>Przegladaj najciekawsze dane:</Grid>
        <Grid item xs={7}>
          <Card className={classes.normalBlock}>
            <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[3].content : ''}}/>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card className={classes.normalBlock}>
            <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[4].content : ''}}/>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cockpit;

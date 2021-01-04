import React, { useEffect, useState } from 'react';
import { Grid, TextField, Card, Button, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import scenarios from '../../apis/scenarios';

const SimulationInfo = (props) => {
  const classes = useStyles();
  const { history } = props;
  const item = props.location.state.item;

  const [progressStatus, setProgressStatus] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState({});
  const [selectedAggragationType, setSelectedAggragationType] = useState({});
  const [selectedAggragationSubType, setSelectedAggragationSubType] = useState({});
  const [selectedProvince, setSelectedProvince] = useState({});
  const [selectedOccupation, setSelectedOccupation] = useState({});
  const [selectedShowChartsMode, setSelectedShowChartsMode] = useState({});
  const chartType = [
    {
      name: 'linear-chart',
      polish: 'Liniowy'
    },
    {
      name: 'column-chart',
      polish: 'Kolumnowy'
    },
    {
      name: 'map',
      polish: 'Mapy'
    }];
  const aggragateType = [
    {
      name: 'sector',
      polish: 'Sektorowy'
    },
    {
      name: 'province',
      polish: 'Wojewódzki'
    },
    {
      name: 'district',
      polish: 'Powiatowy'
    },
    {
      name: 'professed',
      polish: 'Zawodowy'
    },
    {
      name: 'sector-professed',
      polish: 'Wojewódzko-zawodowy'
    },
    {
      name: 'district-professed',
      polish: 'Powiatowo-zawodowy'
    }];
  const aggragateSubType = [
    {
      name: 'demand',
      polish: 'Popyt na pracę'
    },
    {
      name: 'supply',
      polish: 'Podaż pracy'
    },
    {
      name: 'gap',
      polish: 'Luka'
    },
  ];
  const provinceList = [

  ];
  const occupationList = [

  ];
  const showChartsMode = [
    {
      name: 'together',
      polish: 'Pokaż wyniki razem'
    },
    {
      name: 'separated',
      polish: 'Pokaż wyniki osobno'
    },
  ];
  const handleChange = (props) => {
    history.push('/forecasting_module');
  }

  const handleOpen = () => {

  }

  useEffect(() => {
  }, []);

  return (
    <>
      <Card>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs="4">
            <div className={classes.titleBlock}>
              <div className={classes.titleHeader}>
                Wybrana symulacja:
              </div>
              <div className={classes.titleInfo}>
                {item.description}
              </div>
            </div>
          </Grid>
          <Grid item xs="2">
            <Button variant="contained" color="secondary" className={classes.btnChange} onClick={handleChange}>
              Zmień
            </Button>
          </Grid>
          <Grid item xs="2">
            <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleOpen}>
              Otwórz zapisaną analizę
          </Button>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs="12">
            <div className={classes.mainHeader}>
              Przeglądaj wyniki
            </div>
          </Grid>
          <Grid item xs="4">
            <div className={classes.titleHeader}>
              Wybierz typ wykresu
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedChartType(value ? value : {})}
              options={chartType}
              getOptionLabel={(option) => chartType && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
          <Grid item xs="4">
            <div className={classes.titleHeader}>
              Wybierz przekrój
            </div>
            <div className={classes.subHeader}>
              (moźna wybrać tylko 1 z typów jednocześnie)
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedAggragationType(value ? value : {})}
              options={aggragateType}
              getOptionLabel={(option) => aggragateType && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
          <Grid item xs="4">
            <div className={classes.titleHeader}>
              Wybierz kategorie
            </div>
            <div className={classes.subHeader}>
              (można wybrać 1, 2 lub 3 kategorie)
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedAggragationSubType(value ? value : {})}
              options={aggragateSubType}
              getOptionLabel={(option) => aggragateSubType && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
        </Grid>
      </Card>
      {Object.keys(selectedChartType).length === 0 && selectedChartType.constructor === Object 
      || Object.keys(selectedAggragationType).length === 0 && selectedAggragationType.constructor === Object 
      || Object.keys(selectedAggragationSubType).length === 0 && selectedAggragationSubType.constructor === Object ?
      <></>
      :
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs="12">
            <div className={classes.mainHeader}>
              Dotatkowe opcje
            </div>
          </Grid>
          <Grid item xs="4">
            <div className={classes.secondTitleHeader}>
              Wybierz województwo
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedProvince(value ? value : {})}
              options={provinceList}
              getOptionLabel={(option) => provinceList && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
          <Grid item xs="4">
            <div className={classes.secondTitleHeader}>
              Wybierz zawód
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedOccupation(value ? value : {})}
              options={occupationList}
              getOptionLabel={(option) => occupationList && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
          <Grid item xs="4">
            <div className={classes.secondTitleHeader}>
              Wyniki
            </div>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedShowChartsMode(value ? value : {})}
              options={showChartsMode}
              getOptionLabel={(option) => showChartsMode && option && option.polish}
              renderInput={(params) => <TextField {...params} label="Wybierz" variant="outlined" />}
            />
          </Grid>
        </Grid>
      </Card>
      }
    </>
  );
};

export default withRouter(SimulationInfo);

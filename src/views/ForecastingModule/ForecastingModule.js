import React, { useEffect, useState } from 'react';
import { Grid, TextField, Card, Button, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import scenarios from '../../apis/scenarios';

const ForecastingModule = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [progressStatus, setProgressStatus] = useState(false);
  const [scenariosLabels, setScenariosLabels] = useState([]);
  const handleShowResult = () => {
    
  }

  const handleCreateSimulation = () => {

  }

  useEffect(() => {
    setProgressStatus(true);
    scenarios
      .getScenariosLabels()
      .then(response => {
        setProgressStatus(false);
        if (response.code !== 200) {
          history.push('/login');
        } else {
          setScenariosLabels(response.data.scenarios_labels);
        }
      })
  }, []);

  return (
    console.log(scenariosLabels),
    <>
      <Card className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs="12">
            <div className={classes.title}>
              Wybierz symulację do analizy wyników
          </div>
          </Grid>
          <Grid item xs="5">
            <Autocomplete
              className={classes.name_select_box}
              options={scenariosLabels}
              getOptionLabel={(option) => scenariosLabels && option.description}
              renderInput={(params) => <TextField {...params} label="Wpisz nazwę" variant="outlined" />}
            />
          </Grid>
          <Grid item xs="3">
            <Button variant="contained" color="secondary" className={classes.btnShowResult} onClick={handleShowResult}>
              Przeglądaj wyniki
          </Button>
          </Grid>
        </Grid>
      </Card>
      <div className={classes.simulationBlock}>
        <Button variant="contained" color="secondary" className={classes.btnCreateSimulation} onClick={handleCreateSimulation}>
          Stwórz własna symulację
        </Button>
      </div>

      {
        progressStatus ?
          <>
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          </>
          :
          <></>
      }
    </>
  );
};

export default withRouter(ForecastingModule);

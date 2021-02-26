import React, { useEffect, useState } from 'react';
import { Grid, TextField, Card, Button, CircularProgress } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications'
import { Autocomplete } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import scenarios from '../../apis/scenarios';

const ForecastingModule = (props) => {
  const classes = useStyles();
  const { addToast } = useToasts()
  const { history } = props;
  const [progressStatus, setProgressStatus] = useState(false);
  const [scenariosLabels, setScenariosLabels] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const handleShowResult = () => {
    if (Object.keys(selectedItem).length === 0 && selectedItem.constructor === Object) {
      addToast('Please select one scenario.', { appearance: 'error', autoDismissTimeout: 3000, autoDismiss: true })
    } else {
      history.push({
        pathname: '/forecasting_module/simulation_info',
        state: {item: selectedItem}});
    }
  }

  const handleCreateSimulation = () => {
    history.push('/own_simulations');
  }

  useEffect(() => {
    setProgressStatus(true);
    scenarios
      .getScenariosLabels()
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          setScenariosLabels(response.data.scenarios_labels);
        }
      })
  }, []);

  return (
    <>
      <Card className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.gridBlock}>
          <Grid item xs={12}>
            <div className={classes.title}>
              Wybierz symulację do analizy wyników
          </div>
          </Grid>
          <Grid item xs={5}>
            <Autocomplete
              className={classes.name_select_box}
              onChange={(event, value) => setSelectedItem(value ? value : {})}
              options={scenariosLabels}
              getOptionLabel={(option) => scenariosLabels && option && option.description}
              renderInput={(params) => <TextField {...params} placeholder="Wpisz nazwę" variant="outlined" InputLabelProps={{shrink: false}}/>}
            />
          </Grid>
          <Grid item xs={3}>
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

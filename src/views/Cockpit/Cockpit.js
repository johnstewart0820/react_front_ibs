import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import {
  CircularProgress,
  Grid,
  Card,
  Button,
  Tooltip
} from '@material-ui/core';
import contents from '../../apis/contents';
import { SimulationChart } from 'components';
const Cockpit = props => {
  const { children } = props;
  const [blocks, setBlocks] = useState([]);
  const [progressStatus, setProgressStatus] = useState(false);
  const { history } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    setProgressStatus(true);
    contents
      .getAllBlocks()
      .then(response => {
        setProgressStatus(false);
        if (response.code === 200) {
          setBlocks(response.data.blocks);
        }
      })
  }, []);

  const getContent = (_block) => {
    let index = 0;
    let item = _block;
    if (item.search("chart:") == -1)
      return null;
    item = item.split("<p>[chart:")[1];
    index = item.split(']</p>')[0];

    return index;
  }

  const getHeader = (_block) => {
    let item = _block;
    item = item.split('<p>[chart:')[0];

    return item;
  }

  const getFooter = (_block) => {
    let item = _block;
    if (item.search('chart:') == -1)
      return null;
    item = item.split('<p>[chart:')[1];
    item = item.split(']</p>')[1];

    return item;
  }

  const handleGotoForecastingModule = () => {
    history.push('/forecasting_module');
  }

  const handleGotoJobOffer = () => {
    history.push('/job_offer');
  }
  return (
    <>
      <div className={classes.public}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.controlBlock}>
              <div className={classes.header}>Witaj w Systemie Prognozowania Polskiego Rynku Pracy!</div>
              <div className={classes.subHeader}>Wybierz Moduł, który Cię interesuje:</div>
              <div className={classes.buttonBlock}>
                <Tooltip arrow classes={{ tooltip: classes.tooltip }} title="Moduł pozwala przeglądać szczegółowe prognozy popytu na pracę, podaży pracy i luki popytowo-podażowej na polskim rynku pracy w horyzoncie do roku 2050. Prognozy oraz dane historyczne dostępne są w 8 przekrojach." placement="bottom-start">
                  <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleGotoForecastingModule}>
                    Moduł Prognostyczny
                  </Button>
                </Tooltip>
                <Tooltip arrow classes={{ tooltip: classes.tooltip }} title="Moduł gromadzi dane o ofertach pracy zamieszczanych na dedykowanych portalach rekrutacyjnych, uzupełniając informacje o niezrealizowanym popycie na pracę oraz wskazując jego bieżące trendy." placement="bottom-start">
                  <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleGotoJobOffer}>
                    Moduł Internetowych Ofert Pracy
                  </Button>
                </Tooltip>
              </div>
            </Card>
          </Grid>
          {!progressStatus ?
            <>
              <Grid item xs={12}>Przeglądaj najciekawsze dane:</Grid>
              <Grid item md={6} xs={12}>
                {
                  blocks.length > 3 &&
                  <Card className={classes.normalBlock}>
                    <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[3].content) }} />
                    {
                      getContent(blocks[3].content) &&
                      <SimulationChart
                        id_analyze={getContent(blocks[3].content)}
                      />
                    }
                    {
                      getFooter(blocks[3].content) &&
                      <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[3].content) }} />
                    }

                  </Card>
                }

              </Grid>
              <Grid item md={6} xs={12}>
                {
                  blocks.length > 4 &&
                  <Card className={classes.normalBlock}>
                    <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[4].content) }} />
                    {
                      getContent(blocks[4].content) &&
                      <SimulationChart
                        id_analyze={getContent(blocks[4].content)}
                      />
                    }
                    {
                      getFooter(blocks[4].content) &&
                      <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[4].content) }} />
                    }

                  </Card>
                }

              </Grid>
            </>
            :
            <></>
          }
        </Grid>
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

export default Cockpit;

import React, { useState, useEffect } from 'react';
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
import { SimulationChart } from 'components';

const Help = props => {
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

  return (
    <>
      <div className={classes.public}>
        {
          !progressStatus
            ?
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {
                  blocks.length > 3 &&
                  <Card className={classes.downloadBlock}>
                    <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[5].content) }} />
                    {
                      getContent(blocks[5].content) &&
                      <SimulationChart
                        id_analyze={getContent(blocks[5].content)}
                      />
                    }
                    {
                      getFooter(blocks[5].content) &&
                      <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[5].content) }} />
                    }

                  </Card>
                }
              </Grid>
              <Grid item md={6} xs={12}>
                {
                  blocks.length > 3 &&
                  <Card className={classes.downloadBlock}>
                    <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[6].content) }} />
                    {
                      getContent(blocks[6].content) &&
                      <SimulationChart
                        id_analyze={getContent(blocks[6].content)}
                      />
                    }
                    {
                      getFooter(blocks[6].content) &&
                      <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[6].content) }} />
                    }

                  </Card>
                }
              </Grid>
              <Grid item md={6} xs={12}>
                {
                  blocks.length > 3 &&
                  <Card className={classes.downloadBlock}>
                    <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[7].content) }} />
                    {
                      getContent(blocks[7].content) &&
                      <SimulationChart
                        id_analyze={getContent(blocks[7].content)}
                      />
                    }
                    {
                      getFooter(blocks[7].content) &&
                      <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[7].content) }} />
                    }

                  </Card>
                }
              </Grid>
            </Grid>
            :
            <></>
        }
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

export default Help;

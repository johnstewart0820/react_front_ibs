import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import {
  CircularProgress,
  Grid,
  Card
} from '@material-ui/core';
import { SimulationChart } from 'components';
import contents from '../../apis/contents';
const Minimal = props => {
  const { children } = props;
  const [blocks, setBlocks] = useState([]);
  const [progressStatus, setProgressStatus] = useState(false);
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
      <Grid container className={classes.root}>
        <Grid item lg={4} md={6} sm={12} className={classes.content}>{children}</Grid>
        {
          !progressStatus
            ?
            <Grid item lg={8} md={6} sm={12} className={classes.public}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={12} >
                  {
                    blocks.length > 3 &&
                    <Card className={classes.normalBlock}>
                      <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[0].content) }} />
                      {
                        getContent(blocks[0].content) &&
                        <SimulationChart
                          id_analyze={getContent(blocks[0].content)}
                        />
                      }
                      {
                        getFooter(blocks[0].content) &&
                        <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[0].content) }} />
                      }

                    </Card>
                  }
                </Grid>
                <Grid item lg={6} md={12} >
                  {
                    blocks.length > 3 &&
                    <Card className={classes.normalBlock}>
                      <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[1].content) }} />
                      {
                        getContent(blocks[1].content) &&
                        <SimulationChart
                          id_analyze={getContent(blocks[1].content)}
                        />
                      }
                      {
                        getFooter(blocks[1].content) &&
                        <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[1].content) }} />
                      }

                    </Card>
                  }
                </Grid>
                <Grid item xs={12}>
                  {
                    blocks.length > 3 &&
                    <Card className={classes.normalBlock}>
                      <div dangerouslySetInnerHTML={{ __html: getHeader(blocks[2].content) }} />
                      {
                        getContent(blocks[2].content) &&
                        <SimulationChart
                          id_analyze={getContent(blocks[2].content)}
                        />
                      }
                      {
                        getFooter(blocks[2].content) &&
                        <div dangerouslySetInnerHTML={{ __html: getFooter(blocks[2].content) }} />
                      }

                    </Card>
                  }
                </Grid>
              </Grid>
            </Grid>
            :
            <></>
        }
      </Grid>
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

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;

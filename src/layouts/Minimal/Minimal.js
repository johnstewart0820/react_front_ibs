import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import {
  CircularProgress,
  Grid,
  Card
} from '@material-ui/core';
import contents from '../../apis/contents';
const Minimal = props => {
  const { children } = props;
  const [blocks, setBlocks] = useState([]);
  const [progressStatus, setProgressStatus] = useState(false);
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

  return (
    <div className={classes.root}>
      <main className={classes.content}>{children}</main>
      <main className={classes.public}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.normalBlock}>
              <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[0].content : ''}}/>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.normalBlock}>
              <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[1].content : ''}}/>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.normalBlock}>
              <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[2].content : ''}}/>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;

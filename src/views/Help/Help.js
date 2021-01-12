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
const Help = props => {
  const [blocks, setBlocks] = useState([]);
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
  return (
    <div className={classes.public}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.normalBlock}>
            <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[5].content : ''}}/>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.normalBlock}>
            <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[6].content : ''}}/>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.downloadBlock}>
            <div dangerouslySetInnerHTML={{__html: blocks.length > 0 ? blocks[7].content : ''}}/>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Help;

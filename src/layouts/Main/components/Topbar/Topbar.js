import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    left: '344px',
    width: 'calc(100% - 344px)',
    height: '80px',
    backgroundColor: '#FCFCFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  toolbar: {
    width: '100%',
    paddingLeft: '40px'
  },
  close_drawer_icon: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '4em'
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.toolbar}>
        <Button className={classes.close_drawer_icon}>
          <KeyboardBackspaceIcon/>
        </Button>
      </div>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;

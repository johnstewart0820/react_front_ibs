import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MenuIcon from '@material-ui/icons/Menu';
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
    display: 'flex',
    width: '100%',
    paddingLeft: '40px'
  },
  close_drawer_icon: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '4em'
    }
  },
  title: {
    color: 'gray',
    fontSize: '1.7em',
    fontFamily: 'roboto',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px'
  }
}));

const Topbar = props => {
  const { className, title, onSidebarOpen, onSidebarClose, ...rest } = props;
  const [ open, setOpen] = useState(true);
  const classes = useStyles();

  const [notifications] = useState([]);
  const onMaxTopbar = () => {
    if (open === true)
      onSidebarOpen();
    else 
      onSidebarClose();
    setOpen(!open);
  }
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.toolbar}>
        <Button className={classes.close_drawer_icon} onClick={onMaxTopbar}>
          {open ? <KeyboardBackspaceIcon/> : <MenuIcon/>}
        </Button>
        <div className={classes.title}>
          {title}
        </div>
      </div>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;

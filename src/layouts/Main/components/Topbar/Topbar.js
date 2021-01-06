import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';

const Topbar = props => {
  const { className, title, onSidebarOpen, onSidebarClose, ...rest } = props;
  const [ open, setOpen] = useState(true);
  const classes = useStyles();

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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ECECEC',
    paddingTop: 95,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 80
    }
  },
  shiftContent: {
    paddingLeft: 345
  },
  content: {
    height: '100%',
    backgroundColor: '#ECECEC'
  },
  topbar_max: {
    transform: 'translateX(-345px)',
    visibility: 'visible',
    width: '100%',
    zIndex: '0'
  },
  topbar_min: {
    transform: 'translateX(0)',
    visibility: 'visible',
    zIndex: '0'
  },
  mainContainer: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(true);

  const handleSidebarOpen = () => {
    setOpenSidebar(false);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(true);
  };

  const shouldOpenSidebar = openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: openSidebar
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} onSidebarClose={handleSidebarClose} className={!openSidebar ? classes.topbar_max : classes.topbar_min } title={props.title}/>
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.mainContainer}>
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;

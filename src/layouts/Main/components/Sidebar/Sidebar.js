import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 345,
  },
  root: {
    backgroundColor: '#323444',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  main_logo: {
    padding: '10px 60px',
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Kokpit',
      href: '/cockpit',
      icon: <DashboardIcon />
    },
    {
      title: 'Moduł prognostyczny',
      href: '/forecasting_module',
      icon: <PeopleIcon />
    },
    {
      title: 'Własne symulacje',
      href: '/own_simulations',
      icon: <ShoppingBasketIcon />
    },
    {
      title: 'Moduł Internetowych Ofert Pracy',
      href: '/job_offer',
      icon: <LockOpenIcon />
    },
    {
      title: 'Twój Profil',
      href: '/profile',
      icon: <TextFieldsIcon />
    },
    {
      title: 'Zapisane analizy',
      href: '/analyzes',
      icon: <ImageIcon />
    },
    {
      title: 'Zapisane symulacje',
      href: '/saved_simulations',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Pomoc',
      href: '/help',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <img src="/images/logos/main-logo.png" className={classes.main_logo}/>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Drawer, Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import storage from '../../../../utils/storage';
import { SidebarNav } from './components';
import { withRouter, Link } from 'react-router-dom';
import useStyles from './style';

const Sidebar = props => {
  const { open, variant, history, onClose, className, ...rest } = props;
  const [pages, setPages] = useState([]);
  const classes = useStyles();
  const items = [
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
      title: 'Zapisane symulacje',
      href: '/saved_simulations',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Zapisane analizy',
      href: '/analyzes',
      icon: <ImageIcon />
    },
    {
      title: 'Moduł Internetowych Ofert Pracy',
      href: '/job_offer',
      icon: <LockOpenIcon />
    },
    {
      title: 'Pomoc',
      href: '/help',
      icon: <HelpOutlineOutlinedIcon />
    },
    // {
    //   title: 'Twój Profil',
    //   href: '/profile',
    //   icon: <TextFieldsIcon />
    // },
    {
      title: 'Wyloguj',
      href: '/login',
      icon: <ExitToAppIcon />
    },
  ];

  const items_admin = [
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
      title: 'Zapisane symulacje',
      href: '/saved_simulations',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Zapisane analizy',
      href: '/analyzes',
      icon: <ImageIcon />
    },
    {
      title: 'Moduł Internetowych Ofert Pracy',
      href: '/job_offer',
      icon: <LockOpenIcon />
    },
    {
      title: 'Pomoc',
      href: '/help',
      icon: <HelpOutlineOutlinedIcon />
    },
    // {
    //   title: 'Twój Profil',
    //   href: '/profile',
    //   icon: <TextFieldsIcon />
    // },
    {
      title: 'Wyloguj',
      href: '/login',
      icon: <ExitToAppIcon />
    },
    {
      title: 'Zarządzanie',
      href: '#',
      icon: <SettingsIcon />,
      sub: [{
        title: 'Zarządzanie treścią',
        href: '/content_management',
        icon: <SettingsIcon />
      },
      {
        title: 'Import Ofert Pracy',
        href: '/import_job_offer',
        icon: <LockOpenIcon />
      }]
    },
  ];
  const logout = () => {
    storage.removeStorage('token');
    history.push('/login');
  };

  useEffect(() => {
    if (storage.getStorage('role') === '1') {
      setPages(items_admin);
    } else {
      setPages(items);
    }
  }, []);
  

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
        <Link to="/cockpit"><img src="/images/logos/main-logo.png" className={classes.main_logo} style={{width: '100%', height: '100%'}}/></Link>
        <SidebarNav
          className={classes.nav}
          pages={pages}
          history={history}
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

export default withRouter(Sidebar);

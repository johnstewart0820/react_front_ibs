/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    padding: '20px 16px 20px 56px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: 400,
    
    color: theme.palette.sidebar_color,
    lineHeight: '1em',
    '&:hover': {
      backgroundColor: theme.palette.sidebar_active_background,
      color: theme.palette.sidebar_active_color,
      fontWeight: 400,
      borderRadius: '0px'
    },
  },
  icon: {
    color: theme.palette.sidebar_color,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3),
    '&:hover': {
      color: theme.palette.sidebar_active_color
    },
  },
  active: {
    fontWeight: 400,
    '& $icon': {
      color: theme.palette.sidebar_active_color
    },
    backgroundColor: theme.palette.sidebar_active_background,
    color: theme.palette.sidebar_active_color,
    borderRadius: '0px'
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;

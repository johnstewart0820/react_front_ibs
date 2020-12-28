import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useLocation } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications'
import useStyles from './style';
import auth from '../../apis/auth';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ValidateUser = props => {
  const { history } = props;
  let query = useQuery();
  let token = query.get("token");
  const classes = useStyles();

  const [checkStatus, setCheckStatus] = useState(false);
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const { addToast } = useToasts()
  useEffect(() => {

    auth
      .validate(token)
      .then(response => {
        if (response.code === 200) {
          history.push('/login');
        } else {
          addToast(response.message, { appearance: 'error', autoDismissTimeout: 1000, autoDismiss: true})
        }
      }) 
  }, []);

  return (
    <>
    </>
  );
};

ValidateUser.propTypes = {
  history: PropTypes.object
};

export default withRouter(ValidateUser);

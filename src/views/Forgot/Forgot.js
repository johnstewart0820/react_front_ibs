import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {
  Button,
  TextField,
  Link,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import useStyles from './style';
import auth from '../../apis/auth';
import storage from 'utils/storage';
import { ToastProvider, useToasts } from 'react-toast-notifications'


const Forgot = props => {
  const { history } = props;

  const classes = useStyles();

  const { addToast } = useToasts()
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    
  }, []);

  const handleChange = event => {
    let arr = JSON.parse(JSON.stringify(input));
    arr[event.target.name] = event.target.value;
    setInput(arr);
  };

  const handleForgot = event => {
    if (error && (error.email && error.email.length > 0 )) {
      addToast('Please check all the fields.', { appearance: 'error', autoDismissTimeout: 2000, autoDismiss: true })
    } else {
      auth
      .forgot(input.email)
      .then(response => {
        if (response.code === 200) {
          addToast(response.message, { appearance: 'success', autoDismissTimeout: 2000, autoDismiss: true })
          history.push('/login');
        } else {
          addToast(response.message, { appearance: 'error', autoDismissTimeout: 2000, autoDismiss: true })
        }
      }) 
    }
  };

  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(error));
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      arr["email"] = "Please enter valid email address.";
    } else {
      arr["email"] = "";
    }

    setError(arr);
  }, [input]);
  return (
      <>
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.logoContainer}>
          <div className={classes.logo} />
        </div>
        <div className={classes.switchContainer}>
                <div className={classes.switchTab}>
                  <Link to="/login" component={RouterLink} className={classes.tabLogin}>Logowanie</Link>
                  <Link to="/register" component={RouterLink} className={classes.tabRegister}>Rejestracja</Link>
                </div>
              </div>
        <div className={classes.loginForm}>
          <div>
            <div className={classes.loginMainForm}>
              <div className={classes.inputForm}>
                <input className={classes.input_box} type="email" value={input.email} name="email" placeholder="E-mail" onChange={handleChange} />
                <div className={classes.error_log}>{error["email"] && error["email"].length > 0 && error.email}</div>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.btnForgotContainer}>
                <Button variant="contained" color="secondary" className={classes.btnForgot} onClick={handleForgot}>
                    Zresetuj hasło
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className={classes.footerContainer}>
        <img src="/images/logos/footer_logo.jpg" className={classes.unionLogo} />
    </div>
  </>
  );
};

Forgot.propTypes = {
  history: PropTypes.object
};

export default withRouter(Forgot);

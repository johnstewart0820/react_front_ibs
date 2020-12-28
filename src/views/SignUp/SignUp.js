import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import useStyles from './style';
import auth from '../../apis/auth';
import { ToastProvider, useToasts } from 'react-toast-notifications'
const SignUp = props => {
  const { history } = props;

  const classes = useStyles();
  const [checkStatus, setCheckStatus] = useState(false);
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const { addToast } = useToasts()
  useEffect(() => {

  }, []);

  const handleChange = event => {
    let arr = JSON.parse(JSON.stringify(input));
    arr[event.target.name] = event.target.value;
    setInput(arr);
  };

  const handleRememberMe = event => {
    setCheckStatus(!checkStatus);
  };
  const handleSignUp = event => {
    if (error && (error.email && error.email.length > 0 ) || (error.password && error.password.length > 0) || (error.reset_password && error.reset_password.length > 0 )) {
      addToast('Please check all the fields.', { appearance: 'error', autoDismissTimeout: 1000, autoDismiss: true })
    } else if (!checkStatus) {
      addToast('Please check the policy.', { appearance: 'error', autoDismissTimeout: 1000, autoDismiss: true})
    }
    else {
      auth
      .register(input.email, input.password, false)
      .then(response => {
        if (response.code === 200) {
          addToast(response.message, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true})
        } else {
          addToast(response.message, { appearance: 'error', autoDismissTimeout: 1000, autoDismiss: true})
        }
      }) 
    }
  };

  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(error));
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if ( !pattern.test(input["email"])) {
      arr["email"] = "Please enter valid email address.";
    } else {
      arr["email"] = "";
    }
    if (!input["password"] || input["password"].length <= 5) {
      arr["password"] = "Please enter the password at least 6 characters."
    } else {
      arr["password"] = "";
    }
    let reset_password = input["reset_password"];
    let password = input["password"];
    if (!input["reset_password"] || reset_password != password) {
      arr["reset_password"] = "Please enter the same password."
    } else {
      arr["reset_password"] = "";
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
                <input className={classes.input_box} type="password" value={input.password} name="password" placeholder="Hasło" onChange={handleChange} />
                <div className={classes.error_log}>{error["password"] && error["password"].length > 0 && error.password}</div>
                <input className={classes.input_box} type="password" value={input.reset_password} name="reset_password" placeholder="Powtórz hasło" onChange={handleChange} />
                <div className={classes.error_log}>{error["reset_password"] && error["reset_password"].length > 0 && error.reset_password}</div>
                <FormControlLabel
                  className={classes.rememberMe}
                  control={
                    <Checkbox
                      checked={checkStatus}
                      onChange={handleRememberMe}
                      color="#b5502F"
                    />
                  }
                  label="Akceptuję Regulamin"
                />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.btnRegisterContainer}>
                <Button variant="contained" color="secondary" className={classes.btnRegister} onClick={handleSignUp}>
                  Zarejestruj się
                </Button>
                <Link to="/registerAsAdvanced" component={RouterLink} className={classes.registerAsAdvanced}>
                  <div className={classes.registerAsAdvanced_firstline}>
                    Zarejestruj się jako
                  </div>
                  <div className={classes.registerAsAdvanced_secondline}>
                    użytkownik zaawansowany
                  </div>
                </Link>
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

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);

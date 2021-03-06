import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  CircularProgress
} from '@material-ui/core';
import useStyles from './style';
import auth from '../../apis/auth';
import { useToasts } from 'react-toast-notifications'
import constants from '../../utils/constants';

const Forgot = props => {
  const { history } = props;

  const classes = useStyles();

  const { addToast } = useToasts()
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [progressStatus, setProgressStatus] = useState(false);
  useEffect(() => {
    
  }, []);

  const handleChange = event => {
    let arr = JSON.parse(JSON.stringify(input));
    arr[event.target.name] = event.target.value;
    setInput(arr);
  };

  const handleForgot = event => {
    if ((error && (error.email && error.email.length > 0 )) || !input.email) {
      addToast(constants.CHECK_ALL_FIELDS, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true })
    } else {
      setProgressStatus(true);
      auth
      .forgot(input.email)
      .then(response => {
        if (response.code === 200) {
          setProgressStatus(false);
          addToast(response.message, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true })
          setTimeout(function(){history.push('/login')}, 1000);
        } else {
          setProgressStatus(false);
          addToast(response.message, { appearance: 'error', autoDismissTimeout: 5000, autoDismiss: true })
        }
      }) 
    }
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleForgot();
    }
  }

  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(error));
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (input["email"] && !pattern.test(input["email"])) {
      arr["email"] = constants.ENTER_VALID_EMAIL;
    } else {
      arr["email"] = "";
    }

    setError(arr);
  }, [input]);
  return (
      <>
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.footerContainer}>
            <img src="/images/logos/footer_logo.png" className={classes.unionLogo} alt=""/>
        </div>
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
                <input className={classes.input_box} type="email" value={input.email} name="email" placeholder="E-mail" onChange={handleChange} onKeyPress={handleKeyPress}/>
                <div className={classes.error_log}>{error["email"] && error["email"].length > 0 && error.email}</div>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.btnForgotContainer}>
                <Button variant="contained" color="secondary" className={classes.btnForgot} onClick={handleForgot}>
                    Zresetuj has??o
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    {
        progressStatus ?
        <>
        <div className={classes.progressContainer}>
          <CircularProgress className={classes.progress}/>
        </div>
        </>
        :
        <></>
      }
  </>
  );
};

Forgot.propTypes = {
  history: PropTypes.object
};

export default withRouter(Forgot);

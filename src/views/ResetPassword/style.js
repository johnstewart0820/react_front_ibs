import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    padding: '70px 80px 30px 120px',
  },
  mainContainer: {
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    backgroundImage: 'url(/images/logos/logo.png)',
    width: '320px',
    height: '80px'
  },
  loginForm: {
  },
  switchContainer: {
    marginTop: '150px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  switchTab: {
    marginBottom: '120px',
    paddingRight: '30px'
  },
  tabLogin: {
    '&:hover': {
      textDecoration: 'none'
    },
    color: '#b5502F',
    marginRight: '20px',
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  tabRegister: {
    '&:hover': {
      textDecoration: 'none'
    },
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: 'gray',
  },
  loginMainForm: {
    paddingLeft: '10px',
    paddingRight: '40px',
  },
  inputForm: {
    paddingRight: '20px',
  },
  rememberMe: {
    marginTop: '30px',
    '& .MuiTypography-body1': {
      fontSize: '16px',
      color: 'gray',
    },
  },
  buttonContainer: {
    marginTop: '120px',
    display: 'flex',
    paddingLeft: '10px'
  },
  btnLoginContainer: {
    width: '330px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  input_box: {
    padding: '12px 30px',
    fontSize: '16px',
    marginTop: '20px',
    width: '330px',
    '&::placeholder': {
      color: '#606C75',
      fontWeight: '600'
    }
  },
  error_log: {
    color: 'red'
  },
  btnLogin: {
    '& .MuiButton-label': {
      textTransform: 'none',
      fontSize: '18px',
    },
    '& .MuiButton-containedSecondary:hover': {

    },
    '&:hover': {
      backgroundColor: '#a52b02'
    },
    padding: '4px',
    borderRadius: '0px',
    fontWeight: '400',
    backgroundColor: '#a52b02',
    color: 'white',
    width: '100%'
  },
  btnForgot: {
    '&:hover': {
      textDecoration: 'none'
    },
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    color: '#b5502F',
    fontSize: '18px',
    fontFamily: 'roboto',
    fontWeight: '500',
    lineHeight: '1.75',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '170px',
    marginBottom: '60px'
  },
  unionLogo: {
    backgroundImage: 'url(/images/logos/footer_logo.jpg)',
    width: '550px',
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  progressContainer: {
    position: 'absolute',
    top: '50%',
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    color: '#b5502F'
  }
}));

export default useStyles;

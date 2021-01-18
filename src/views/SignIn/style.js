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
    color: theme.palette.pink,
    marginRight: '20px',
    fontWeight: 500,
    fontFamily: 'roboto',
  },
  tabRegister: {
    '&:hover': {
      textDecoration: 'none'
    },
    fontWeight: 500,
    fontFamily: 'roboto',
    color: theme.palette.gray,
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
      color: theme.palette.gray,
      fontSize: '16px',
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked' : {
      color: '#546e7a'
    },
  },
  buttonContainer: {
    marginTop: '120px',
    display: 'flex',
  },
  btnLoginContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btnForgetContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  input_box: {
    padding: '12px 30px',
    fontSize: '16px',
    marginTop: '20px',
    width: '330px',
    '&::placeholder': {
      color: theme.palette.gray,
      fontWeight: 500
    }
  },
  error_log: {
    color: 'red'
  },
  btnLogin: {
    '& .MuiButton-label': {
      textTransform: 'none',
      fontSize: '17px',
    },
    '&:hover': {
      backgroundColor: theme.palette.pink
    },
    padding: '4px',
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.pink,
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
    color: theme.palette.pink,
    fontSize: '17px',
    fontFamily: 'roboto',
    fontWeight: '400',
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
    color: theme.palette.pink
  }
}));

export default useStyles;

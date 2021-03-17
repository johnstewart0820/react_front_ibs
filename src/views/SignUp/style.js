import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.mainBackground,
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
    color: theme.palette.gray,
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
    color: theme.palette.pink,
  },
  loginMainForm: {
    paddingLeft: '10px',
    paddingRight: '40px',
  },
  inputForm: {
    paddingRight: '20px',
  },
  rememberMe: {
    marginTop: '40px',
    '& .MuiTypography-body1': {
      
      color: theme.palette.gray,
    },
  },
  buttonContainer: {
    marginTop: '60px',
    display: 'flex',
    paddingLeft: '10px'
  },
  input_box: {
    padding: '12px 30px',
    
    marginTop: '20px',
    width: '330px',
    fontFamily: 'roboto',
    '&::placeholder': {
      color: theme.palette.gray,
      fontWeight: '500'
    }
  },
  error_log: {
    color: 'red',
    fontFamily: 'roboto',
  },
  btnRegisterContainer: {
    width: '330px',
  },
  btnRegister: {
    '& .MuiButton-label': {
      textTransform: 'none',
      fontSize: '1.0625em',
    },
    '&:hover': {
      backgroundColor: theme.palette.blue
    },
    padding: '4px',
    fontWeight: '300',
    backgroundColor: theme.palette.blue,
    color: 'white',
    width: '100%',
    marginBottom: '20px'
  },
  registerAsAdvanced: {
    '&:hover': {
      textDecoration: 'none'
    },
    width: '100%',
    color: theme.palette.blue,
    fontSize: '1.0625em',
    fontFamily: 'roboto',
    fontWeight: '400',
  },
  registerAsAdvanced_firstline: {
    textAlign: 'center'
  },
  registerAsAdvanced_secondline: {
    textAlign: 'center'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '170px',
    marginBottom: '60px'
  },
  unionLogo: {
    backgroundImage: 'url(/images/logos/footer_logo.png)',
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

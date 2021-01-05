import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  
  mainContainer: {
  },
  userImage: {
    height: '100%'
  },
  profileContainer: {
    padding: '30px 20px 80px 30px',
    backgroundColor: '#FCFCFC'
  },
  input_box: {
    padding: '12px 30px',
    fontSize: '16px',
    width: '100%',
    color: '#606C75',
    fontWeight: '500',
    '&::placeholder': {
      color: '#606C75',
      fontWeight: '600'
    }
  },
  title: {
    color: '#606C75',
    fontSize: '18px',
    fontFamily: 'roboto',
    marginBottom: '5px',
    fontWeight: '500'
  },
  resetbtn: {
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'roboto',
    color: '#b5502F'
  },
  userImageBlock: {
    maxWidth: '20%',
    flexBasis: '20%'
  },
  profileBlock: {
    maxWidth: '80%',
    flexBasis: '80%'
  },
  profileLogo: {
    height: '100%',
    width: '100%'
  },
  imageInput: {
    display: 'none'
  },
  progressContainer: {
    position: 'absolute',
    top: '50%',
    width: 'calc(100% - 600px)',
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    color: '#b5502F'
  },
  btnRegister: {
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
    width: '100%',
    marginTop: '20px'
  },
  error_log: {
    color: 'red',
    marginBottom: '20px',
  }
}));

export default useStyles;

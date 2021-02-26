import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  
  mainContainer: {
  },
  userImage: {
    height: '100%'
  },
  profileContainer: {
    padding: '30px 20px 80px 30px',
    backgroundColor: theme.palette.topbar_background
  },
  input_box: {
    padding: '12px 30px',
    
    width: '100%',
    color: theme.palette.gray,
    fontWeight: '500',
    fontFamily: 'roboto',
    '&::placeholder': {
      color: theme.palette.gray,
      fontWeight: '600'
    }
  },
  title: {
    color: theme.palette.gray,
    fontSize: '1.125em',
    fontFamily: 'roboto',
    marginBottom: '5px',
    fontWeight: '500'
  },
  resetbtn: {
    
    cursor: 'pointer',
    fontFamily: 'roboto',
    color: theme.palette.pink
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
    color: theme.palette.pink
  },
  btnRegister: {
    '& .MuiButton-label': {
      textTransform: 'none',
      fontSize: '1.125em',
    },
    '& .MuiButton-containedSecondary:hover': {

    },
    '&:hover': {
      backgroundColor: theme.palette.pink
    },
    padding: '4px',
    borderRadius: '0px',
    fontWeight: '400',
    backgroundColor: theme.palette.pink,
    color: 'white',
    width: '100%',
    marginTop: '20px'
  },
  error_log: {
    color: 'red',
    fontFamily: 'roboto',
    marginBottom: '20px',
  },
}));

export default useStyles;

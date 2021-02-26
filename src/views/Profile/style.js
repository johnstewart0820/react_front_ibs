import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  
  mainContainer: {
    display: 'flex'
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
    fontSize: '16px',
    marginBottom: '20px',
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
    fontSize: '18px',
    fontFamily: 'roboto',
    marginBottom: '5px',
    fontWeight: '500'
  },
  resetbtn: {
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'roboto',
    color: theme.palette.pink
  },
  userImageBlock: {
    width: 'fit-content',
    height: '100%'
  },
  profileBlock: {
    width: 'calc(100% - 260px)'
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
  }
}));

export default useStyles;

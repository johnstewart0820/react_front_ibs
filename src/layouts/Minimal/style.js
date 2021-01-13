import { makeStyles, useTheme } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    backgroundColor: 'white',
    width: '600px',
    height: '100%',
    boxShadow: '0px 0px 20px grey',
  },
  public: {
    width: '100%',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    fontSize: '16px',
    fontFamily: 'roboto',
    marginBottom: '5px',
    marginLeft: '10px',
    '& .ql-align-right': {
      textAlign: 'right'
    },
    '& .ql-align-left': {
      textAlign: 'left'
    },
    '& .ql-align-center': {
      textAlign: 'center'
    },
  },
  normalBlock: {
    padding: '30px 30px 70px 30px',
    height: '100%'
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
}));

export default useStyles;

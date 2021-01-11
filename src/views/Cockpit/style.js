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
    '& .ql-align-right': {
      textAlign: 'right'
    },
    '& .ql-align-left': {
      textAlign: 'left'
    },
    '& .ql-align-center': {
      textAlign: 'center'
    },
    color: '#44545e',
    fontSize: '15px',
    fontFamily: 'roboto',
    fontWeight: 400,
  },
  normalBlock: {
    padding: '30px 30px 30px 30px',
    height: '100%',
    '& img': {
      width: '100%'
    }
  },
  controlBlock: {
    padding: '30px 30px 70px 30px',
    height: '100%',
    textAlign: 'center'
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    color: '#44545e',
    fontSize: '22px',
    fontFamily: 'roboto',
    fontWeight: 400
  },
  subHeader: {
    color: '#44545e',
    fontSize: '15px',
    fontFamily: 'roboto',
    fontWeight: 400,
    marginTop: '60px',
    marginBottom: '30px'
  },
  btnOpen: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '& .MuiButton-containedSecondary:hover': {

    },
    '&:hover': {
        backgroundColor: '#a52b02'
    },
    padding: '4px',
    border: '2px solid #a52b02',
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: '#a52b02',
    color: 'white',
    marginLeft: '20px',
    marginRight: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    width: '25%'
},
}));

export default useStyles;

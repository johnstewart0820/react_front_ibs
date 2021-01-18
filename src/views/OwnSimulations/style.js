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
    '& .ql-video': {
      width: '100%',
      height: '180px'
    },
    '& video': {

    },
    '& .ql-size-small': {
      fontSize: '12px'
    },
    color: '#44545e',
    fontSize: '15px',
    fontFamily: 'roboto',
    fontWeight: 400,
  },
  normalBlock: {
    padding: '20px 20px 20px 20px',
  },
  flexBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    marginTop: '20px'
  },
  itemBlock: {
    width: '20%',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  headerBlock: {
    padding: '20px 20px 40px 20px',
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectTitle: {
    color: '#44545e',
    fontSize: '14px',
    fontFamily: 'roboto',
    fontWeight: 400
  },
  subHeader: {
    color: '#44545e',
    fontSize: '17px',
    fontFamily: 'roboto',
    fontWeight: 400,
  },
  controlBlock: {
    position: 'absolute',
    bottom: '50px',
    width: 'calc(100% - 360px)'
  },
  btnSimulate: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '&:hover': {
        backgroundColor: '#a52b02'
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: '#a52b02',
    color: 'white',
    width: '100%',
    height: '100%',
    lineHeight: '1',
    '&:disabled': {
      backgroundColor: '#b5502F',
      color: 'darkgray'
    }
  },
  btnSee: {
      '& .MuiButton-label': {
          textTransform: 'none',
          fontSize: '15px',
      },
      '& .MuiButton-containedSecondary:hover': {

      },
      '&:hover': {
          backgroundColor: '#a52b02',
          color: 'white',
      },
      borderRadius: '0px',
      fontWeight: '300',
      border: '1px solid #a52b02',
      backgroundColor: '#ECECEC',
      color: '#a52b02',
      width: '100%',
      height: '100%',
      lineHeight: '1'
  },
  btnCreate: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '& .MuiButton-containedSecondary:hover': {

    },
    '&:hover': {
        backgroundColor: 'gray',
        color: 'white',
    },
    borderRadius: '0px',
    fontWeight: '300',
    border: '1px solid gray',
    backgroundColor: '#ECECEC',
    color: 'gray',
    width: '100%',
    height: '100%',
    lineHeight: '1'
},
  input_box: {
    padding: '12px 30px',
    fontSize: '14px',
    marginTop: '20px',
    width: '100%',
    '&::placeholder': {
      color: '#606C75',
      fontWeight: '400',
      fontStyle: 'italic'
    }
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

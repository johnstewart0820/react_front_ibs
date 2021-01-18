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
  approveBlock: {
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end'
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
    // position: 'absolute',
    // bottom: '25px',
    // width: 'calc(100% - 360px)',
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btnSimulate: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '& .MuiButton-containedSecondary:hover': {

    },
    '&:hover': {
        backgroundColor: '#a52b02'
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: '#a52b02',
    color: 'white',
    width: '100%',
    height: '44px',
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
        backgroundColor: '#44545e',
        color: 'white',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'lightGray',
    },
    borderRadius: '0px',
    fontWeight: '300',
    // border: '1px solid gray',
    backgroundColor: '#44545e',
    color: 'white',
    lineHeight: '1'
},
btn: {
  padding: '15px 40px'
},
  input_box: {
    padding: '12px 30px',
    fontSize: '14px',
    width: '100%',
    '&::placeholder': {
      color: '#606C75',
      fontWeight: '400',
      fontStyle: 'italic'
    }
  },
  headerMargin: {
    marginTop: '20px'
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
  seriesLabelItem: {
    width: 'auto',
    height: '60px',
    padding: '15px',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid #a52b02',
    color: '#a52b02',
    marginRight: '-1px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#a52b02',
        color: 'white',            
    }
  },
  seriesLabelItemActive: {
      backgroundColor: '#a52b02',
      color: 'white',
  },
  scenariosDescription: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#44545e',
    color: 'white',
    padding: '10px',
    marginTop: '30px',
    fontWeight: '300'
  },
  headerLabel: {
    textAlign: 'center',
    backgroundColor: '#44545e',
    paddingBottom: '10px',
    paddingTop: '10px',
    marginBottom: '10px',
    border: '1px solid #44545e',
    color: 'white'
  },
  whiteHeaderLabel: {
    textAlign: 'center',
    paddingBottom: '10px',
    paddingTop: '10px',
    marginBottom: '10px',
    border: '1px solid gray',
    color: '#a52b02'
  },
  inputBlock: {
    marginLeft: '20px',
  },
  firstBlock: {
    width: '80px',
  },
  lastBlock: {
    width: '80px'
  },
  mediumBlock: {
    width: '80px'
  },
  seriesTotalBlock: {
    display: 'flex'
  },
  seriesBlock: {
    display: 'inline-flex'
  },
  input_box: {
    padding: '12px 10px',
    fontSize: '14px',
    width: '100%',
    border: '1px solid gray',
  },
  input_box_black: {
    backgroundColor: '#44545e',
    border: '1px solid gray',
    color: 'white'
  },
  overflowBlock: {
    overflow: 'auto',
    marginLeft: '20px',
    width: 'calc(100% - 160px)',
    '&::-webkit-scrollbar': {
      height: '5px',              /* height of horizontal scrollbar ← You're missing this */
      border: '1px solid #d5d5d5'
    },
    '&::-webkit-scrollbar-thumb:horizontal' :{
      background: '#44545e',
      borderRadius: '5px'
    }
  },
  scroll_margin: {
    marginBottom: '10px',
  }
}));

export default useStyles;

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
    color: theme.palette.gray,
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
    color: theme.palette.gray,
    fontSize: '14px',
    fontFamily: 'roboto',
    fontWeight: 400
  },
  subHeader: {
    color: theme.palette.gray,
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
        backgroundColor: theme.palette.blue
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.blue,
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
        backgroundColor: theme.palette.gray,
        color: 'white',
    },
    '&:disabled': {
      backgroundColor: theme.palette.gray_disable,
      color: 'lightGray',
    },
    borderRadius: '0px',
    fontWeight: '300',
    // border: '1px solid gray',
    backgroundColor: theme.palette.gray,
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
    fontFamily: 'roboto',
    '&::placeholder': {
      color: theme.palette.gray,
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
      color: theme.palette.pink
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
    border: '1px solid #D6324B',
    color: theme.palette.pink,
    marginRight: '-1px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.pink,
        color: 'white',            
    }
  },
  seriesLabelItemActive: {
      backgroundColor: theme.palette.pink,
      color: 'white',
  },
  scenariosDescription: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.gray,
    color: 'white',
    padding: '10px',
    marginTop: '30px',
    fontWeight: '300'
  },
  headerLabel: {
    textAlign: 'center',
    backgroundColor: theme.palette.gray,
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
    color: theme.palette.pink
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
    backgroundColor: theme.palette.gray,
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
      background: theme.palette.gray,
      borderRadius: '5px'
    }
  },
  scroll_margin: {
    marginBottom: '10px',
  }
}));

export default useStyles;

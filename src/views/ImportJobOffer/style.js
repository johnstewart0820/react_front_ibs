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
    height: '100%'
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  subHeader: {
    color: theme.palette.gray,
    fontSize: '17px',
    fontFamily: 'roboto',
    fontWeight: 400,
    marginBottom: theme.spacing(3)
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
        backgroundColor: theme.palette.pink
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.pink,
    color: 'white',
    width: '100%',
    height: '100%',
    padding: '10px',
    lineHeight: '1',
    '&:disabled': {
      backgroundColor: theme.palette.pink_disable,
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
          backgroundColor: theme.palette.pink,
          color: 'white',
      },
      borderRadius: '0px',
      fontWeight: '300',
      border: '1px solid #a52b02',
      backgroundColor: 'white',
      color: theme.palette.pink,
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
        backgroundColor: theme.palette.gray,
        color: 'white',
    },
    borderRadius: '0px',
    fontWeight: '300',
    border: '1px solid #44545e',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.gray,
    width: '100%',
    height: '100%',
    lineHeight: '1'
},
  input_box: {
    padding: '12px 30px',
    fontSize: '14px',
    width: '100%',
    fontFamily: 'roboto',
    '&::placeholder': {
      color: 'gray',
      fontWeight: '300',
      fontStyle: 'italic'
    }
  },
  progressContainer: {
    position: 'absolute',
    top: '40%',
    width: 'calc(100% - 300px)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '100'
  },
  progress: {
      color: theme.palette.pink
  },
  uploadButtonBlock: {
    textAlign: 'right',
    marginTop: theme.spacing(2)
  },
  label: {
    marginRight: '20px',
    marginTop: '25px'
  }
}));

export default useStyles;

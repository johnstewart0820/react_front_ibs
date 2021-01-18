import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    
  btnOpen: {
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
      height: '100%',
      width: '40%',
      lineHeight: '1',
      padding: '10px',
      marginLeft: '10px',
      marginRight: '10px',
      '&:disabled': {
        backgroundColor: '#b5502F',
        color: 'darkgray'
      }
    },
  btnDelete: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '&:hover': {
        backgroundColor: '#44545e'
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: '#44545e',
    color: 'white',
    height: '100%',
    width: '40%',
    lineHeight: '1',
    padding: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    '&:disabled': {
      backgroundColor: '#44545e',
      color: 'darkgray'
    }
  },

}));

export default useStyles;
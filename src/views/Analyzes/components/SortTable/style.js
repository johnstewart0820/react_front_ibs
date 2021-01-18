import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    
  btnOpen: {
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
      height: '100%',
      width: '40%',
      lineHeight: '1',
      padding: '10px',
      marginLeft: '10px',
      marginRight: '10px',
    },
  btnDelete: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '&:hover': {
        backgroundColor: theme.palette.gray
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.gray,
    color: 'white',
    height: '100%',
    width: '40%',
    lineHeight: '1',
    padding: '10px',
    marginLeft: '10px',
    marginRight: '10px',
  },

}));

export default useStyles;
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    
    btnCreate: {
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
        width: '100%',
        lineHeight: '1',
        padding: '10px',
        '&:disabled': {
          backgroundColor: '#b5502F',
          color: 'darkgray'
        }
      },

}));

export default useStyles;
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#E6E9EE',
        boxShadow: theme.shadows[5],
        padding: '25px',
        outline: 'none',
        color: '#44545e',
        fontSize: '15px',
        fontFamily: 'roboto',
        fontWeight: 400,
        width: '400px',
        height: '200px'
    },
    closeIcon: {
        color: 'white',
        backgroundColor: '#a52b02'
    },
    closeIconBlock: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    input_box: {
        padding: '12px 30px',
        fontSize: '16px',
        width: '100%',
        color: '#606C75',
        fontWeight: '500',
        '&::placeholder': {
          color: '#606C75',
          fontWeight: '500',
          fontStyle: 'italic'
        }
    },
    btnSave: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '15px',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: '#a52b02'
        },
        '&:disabled': {
            backgroundColor: '#b5502F',
            color: 'darkgray'
        },
        padding: '4px',
        border: '1px solid #a52b02',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: '#a52b02',
        color: 'white',
        width: '100%'
    },
}));

export default useStyles;
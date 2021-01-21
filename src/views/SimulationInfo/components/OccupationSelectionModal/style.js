import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.white,
        boxShadow: theme.shadows[5],
        padding: '25px',
        outline: 'none',
        color: theme.palette.gray,
        fontSize: '15px',
        fontFamily: 'roboto',
        fontWeight: 400,
        width: '800px',
        height: '600px'
    },
    closeIcon: {
        color: 'white',
        backgroundColor: theme.palette.pink
    },
    closeIconBlock: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    secondTitleHeader: {
        color: theme.palette.gray,
        fontSize: '16px',
        fontFamily: 'roboto',
        marginBottom: '15px',
        fontWeight: '400'
    },
    input_box: {
        padding: '17px 30px',
        fontSize: '14px',
        width: '100%',
        color: theme.palette.gray,
        fontWeight: '400',
        fontFamily: 'roboto',
        border: '1px solid gray',
        borderRadius: '4px',
        marginTop: '1px',
        '&::placeholder': {
          color: 'gray',
          fontWeight: '400',
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
            backgroundColor: theme.palette.pink
        },
        '&:disabled': {
            backgroundColor: theme.palette.pink_disable,
            color: 'darkgray'
        },
        padding: '4px',
        border: '1px solid #a52b02',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: theme.palette.pink,
        color: 'white',
        width: '100%'
    },
    checkboxblock: {
        overflow: 'auto',
        height: '450px'
    },
    btnOpen: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '15px',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: theme.palette.pink
        },
        '&:disabled': {
            backgroundColor: theme.palette.pink_disable,
            color: 'darkgray'
        },
        padding: '4px',
        border: '1px solid #a52b02',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: theme.palette.pink,
        color: 'white',
        width: '100%',
        height: '100%'
    },
}));

export default useStyles;
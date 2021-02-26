import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        boxShadow: theme.shadows[5],
        padding: '25px',
        outline: 'none',
        color: theme.palette.gray,
        fontSize: '15px',
        fontFamily: 'roboto',
        fontWeight: 400,
        width: '400px',
    },
    closeIcon: {
        color: 'white',
        backgroundColor: theme.palette.pink
    },
    closeIconBlock: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    input_box: {
        padding: '12px 30px',
        fontSize: '16px',
        width: '100%',
        color: theme.palette.gray,
        fontWeight: '500',
        fontFamily: 'roboto',
        '&::placeholder': {
          color: theme.palette.gray,
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
            backgroundColor: theme.palette.pink
        },
        padding: '4px',
        border: '1px solid #D6324B',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: theme.palette.pink,
        color: 'white',
        width: '100%'
    },
}));

export default useStyles;
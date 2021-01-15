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
        width: '1000px',
        height: '600px'
    },
    closeIcon: {
        color: 'white',
        backgroundColor: '#a52b02'
    },
    closeIconBlock: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

export default useStyles;
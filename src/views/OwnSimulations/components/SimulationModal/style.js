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
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        color: '#44545e',
        fontSize: '15px',
        fontFamily: 'roboto',
        fontWeight: 400,
        width: '80%',
        height: '80%'
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
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    controlGrid: {
        padding: '10px'
    },
    controlContainer: {
        height: '100%'
    },
    controlBlock: {
        padding: '30px 40px 30px 20px',
        height: '100%',  
    },
    optionBlock: {
        padding: '30px 40px 30px 20px',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    btnSave: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '0.9375em',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: theme.palette.blue
        },
        padding: '4px',
        fontWeight: '400',
        backgroundColor: theme.palette.blue,
        border: '1px solid #44545e',
        color: 'white',
        width: '100%'
    },
    btnExport: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '0.9375em',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: theme.palette.blue,
            color: 'white'
        },
        padding: '4px',
        fontWeight: '400',
        backgroundColor: theme.palette.mainBackground,
        border: `1px solid ${theme.palette.blue}`,
        color: theme.palette.blue,
        width: '100%'
    },
}));

export default useStyles;
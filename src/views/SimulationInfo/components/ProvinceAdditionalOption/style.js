import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.topbar_background
    },
    mainContainer: {
        padding: '30px 40px 30px 20px',
    },
    titleBlock: {
        display: 'flex',
    },
    mainHeader: {
        color: theme.palette.gray,
        
        fontFamily: 'roboto',
        marginBottom: '15px',
        fontWeight: 400        
    },
    titleHeader: {
        color: theme.palette.gray,
        
        fontFamily: 'roboto',
        marginBottom: '5px',
        fontWeight: 400
    },

    secondTitleHeader: {
        color: theme.palette.gray,
        
        fontFamily: 'roboto',
        marginBottom: '15px',
        fontWeight: 400
    },

    subHeader: {
        color: theme.palette.gray,
        fontSize: '0.8125em',
        fontFamily: 'roboto',
        marginBottom: '20px',
        fontWeight: 400,
        fontStyle: 'italic'
    },

    titleInfo: {
        color: theme.palette.pink,
        
        fontFamily: 'roboto',
        marginBottom: '5px',
        marginLeft: '10px',
        fontWeight: 400
    },
    btnOpen: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '0.9375em',
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
    simulationBlock: {
        width: 'fit-content',
        marginTop: '20px'
    },
    btnChange: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '0.9375em',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: theme.palette.pink,
            color: 'white',
        },
        padding: '4px 20px',
        borderRadius: '0px',
        fontWeight: '400',
        border: '1px solid #D6324B',
        backgroundColor: theme.palette.mainBackground,
        color: theme.palette.pink,
        width: '100%'
    },
    progressContainer: {
        position: 'absolute',
        top: '50%',
        width: 'calc(100% - 600px)',
        display: 'flex',
        justifyContent: 'center',
    },
    progress: {
        color: theme.palette.pink
    },
    secondContainer: {
        marginTop: '20px',
        border: theme.palette.contrastColor
    },
}));

export default useStyles;
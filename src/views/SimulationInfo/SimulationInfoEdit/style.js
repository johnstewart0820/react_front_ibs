import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.topbar_background,
        border: theme.palette.contrastColor
    },
    mainContainer: {
        padding: '30px 40px 30px 20px',
        alignItems: 'center',
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
        '&:hover': {
            backgroundColor: theme.palette.blue
        },
        padding: '4px',
        fontWeight: 300,
        backgroundColor: theme.palette.blue,
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
        '&:hover': {
            backgroundColor: theme.palette.blue,
            color: theme.palette.black_white,
        },
        padding: '4px 20px',
        fontWeight: '400',
        border: `1px solid ${theme.palette.blue}`,
        backgroundColor: theme.palette.mainBackground,
        color: theme.palette.blue,
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
border: theme.palette.contrastColor,
        marginTop: '20px',
    },
    thirdContainer: {
        marginTop: '10px',
    },
    controlBlock: {
        padding: '30px 40px 30px 20px',
        height: '100%'
    },
    tableBlock: {
    },
    btnSave: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '0.9375em',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: theme.palette.gray
        },
        padding: '4px',
        fontWeight: '400',
        backgroundColor: theme.palette.gray,
        border: '1px solid #44545e',
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
            backgroundColor: theme.palette.gray,
        },
        padding: '4px',
        fontWeight: '400',
        backgroundColor: theme.palette.mainBackground,
        border: '1px solid #44545e',
        color: theme.palette.gray,
        width: '100%'
    },
    controlContainer: {
        height: '100%'
    },
    controlGrid: {
        padding: '10px'
    },
    totalView: {
        width: '100%',
        overflow: 'auto',
        border: theme.palette.contrastColor
    }
}));

export default useStyles;
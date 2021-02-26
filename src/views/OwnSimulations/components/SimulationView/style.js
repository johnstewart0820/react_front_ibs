import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    simulationView: {
        height: '100%'
    },
    chartView: {
        padding: '30px',
        height: '100%',
        marginRight: '5px',
        borderRadius: '0px'
    },
    titleView: {
        padding: '30px',
        borderRadius: '0px',
        marginBottom: '5px',
        height: '30%'
    },
    cardView: {
        height: 'calc(70% - 5px)',
        borderRadius: '0px',
        overflow: 'auto'
    },
    description: {
        marginTop: '20px',
        color: theme.palette.gray,
        fontSize: '0.9375em',
        fontFamily: 'roboto',
        fontWeight: 400,
    },
    seriesLabelBlock: {
        display: 'inline-flex',
    },
    scrollBlock: {
        overflow: 'auto',
        marginLeft: '40px'
    },
    seriesLabelItem: {
        width: '200px',
        height: '60px',
        padding: '15px',
        lineHeight: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: `1px solid ${theme.palette.blue}`,
        color: theme.palette.normal,
        marginRight: '-1px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.blue,
            color: 'white',            
        }
    },
    seriesLabelItemActive: {
        backgroundColor: theme.palette.blue,
        color: 'white',
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
    gridView: {
        height: '100%'
    },
    chartArea: {
        width: '100% !important',
        height: '100%',
        
    },
    chartBlock: {
        height: '85%',
        display: 'flex',
        // alignItems: 'flex-end'
    }
}));

export default useStyles;
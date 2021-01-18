import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#FCFCFC'
    },
    mainContainer: {
        padding: '30px 40px 30px 20px',
        alignItems: 'center'
    },
    titleBlock: {
        display: 'flex',
    },
    mainHeader: {
        color: '#606C75',
        fontSize: '18px',
        fontFamily: 'roboto',
        marginBottom: '15px',
        fontWeight: '500'        
    },
    titleHeader: {
        color: '#606C75',
        fontSize: '16px',
        fontFamily: 'roboto',
        marginBottom: '5px',
        fontWeight: '500'
    },

    secondTitleHeader: {
        color: '#606C75',
        fontSize: '18px',
        fontFamily: 'roboto',
        marginBottom: '15px',
        fontWeight: '500'
    },

    subHeader: {
        color: '#606C75',
        fontSize: '13px',
        fontFamily: 'roboto',
        marginBottom: '20px',
        fontWeight: '500',
        fontStyle: 'italic'
    },

    titleInfo: {
        color: '#a52b02',
        fontSize: '16px',
        fontFamily: 'roboto',
        marginBottom: '5px',
        marginLeft: '10px',
        fontWeight: '500'
    },
    buttonBlock: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'right'
    },
    btnOpen: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '15px',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: '#a52b02'
        },
        zIndex: 0,
        padding: '4px',
        border: '1px solid #a52b02',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: '#a52b02',
        color: 'white',
        width: '25%',
        marginLeft: '15px'
    },
    simulationBlock: {
        width: 'fit-content',
        marginTop: '20px'
    },
    btnChange: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '15px',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: '#a52b02',
            color: 'white',
        },
        padding: '4px 20px',
        borderRadius: '0px',
        fontWeight: '400',
        border: '1px solid #a52b02',
        backgroundColor: 'white',
        color: '#a52b02',
        width: '25%'
    },
    progressContainer: {
        position: 'absolute',
        top: '50%',
        width: 'calc(100% - 600px)',
        display: 'flex',
        justifyContent: 'center',
    },
    progress: {
        color: '#b5502F'
    },
    secondContainer: {
        marginTop: '20px'
    },
    qlClass: {
        '& .ql-container': {
            background: 'white',
            height: '500px',
            overflow: 'auto'
        },
        '& .ql-editor': {
            whiteSpace: 'normal !important'
        },
        '& .ql-tooltip': {
            left: '10px !important'
        }
    },
    title: {
        color: '#606C75',
        fontSize: '18px',
        fontFamily: 'roboto',
        fontWeight: 400,
        marginBottom: '20px',
        '& span': {
            color: '#606C75',
            fontSize: '16px',
            fontFamily: 'roboto',
            fontWeight: 500,
            marginBottom: '15px',
        }
    }

}));

export default useStyles;
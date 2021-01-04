import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '30px 40px 30px 20px',
        alignItems: 'center'
    },
    mainHeader: {
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
        fontSize: '18px',
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
        fontSize: '18px',
        fontFamily: 'roboto',
        marginBottom: '5px',
        marginLeft: '10px',
        fontWeight: '500'
    },
    btnOpen: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '18px',
        },
        '& .MuiButton-containedSecondary:hover': {

        },
        '&:hover': {
            backgroundColor: '#a52b02'
        },
        padding: '4px',
        border: '2px solid #a52b02',
        borderRadius: '0px',
        fontWeight: '400',
        backgroundColor: '#a52b02',
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
            fontSize: '18px',
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
        border: '2px solid #a52b02',
        backgroundColor: 'white',
        color: '#a52b02',
        width: '100%'
    },
    name_select_box: {
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input' : {
            padding: '3.5px 4px'
        },
        '& .MuiFormLabel-root': {
            fontStyle: 'italic'
        }
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
}));

export default useStyles;
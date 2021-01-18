import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '10px 20px 25px 10px',
    },
    title: {
        color: '#606C75',
        fontSize: '18px',
        fontFamily: 'roboto',
        marginBottom: '5px',
        fontWeight: '500'
    },
    btnShowResult: {
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
    btnCreateSimulation: {
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
        border: '1px solid #a52b02',
        backgroundColor: '#ECECEC',
        color: '#a52b02',
        width: '100%'
    },
    name_select_box: {
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input' : {
            padding: '3.5px 4px',
        },
        '& ::placeholder': {
            fontStyle: 'italic',
            marginTop: '-5px',
            color: '#606C75',
            fontWeight: '500'
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
    }
}));

export default useStyles;
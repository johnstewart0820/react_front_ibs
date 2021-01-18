import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '10px 20px 25px 10px',
    },
    title: {
        color: theme.palette.gray,
        fontSize: '16px',
        fontFamily: 'roboto',
        marginBottom: '5px',
        fontWeight: 400
    },
    btnShowResult: {
        '& .MuiButton-label': {
            textTransform: 'none',
            fontSize: '16px',
        },
        '&:hover': {
            backgroundColor: theme.palette.pink
        },
        padding: '6px',
        borderRadius: '0px',
        fontWeight: 300,
        backgroundColor: theme.palette.pink,
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
            fontSize: '16px',
        },
        '&:hover': {
            backgroundColor: theme.palette.pink,
            color: 'white',
        },
        padding: '4px 20px',
        borderRadius: '0px',
        fontWeight: 400,
        border: '1px solid #a52b02',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.pink,
        width: '100%'
    },
    name_select_box: {
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input' : {
            padding: '3.5px 4px',
            color: theme.palette.gray,
            fontWeight: 400
        },
        '& ::placeholder': {
            fontStyle: 'italic',
            marginTop: '-5px',
            color: theme.palette.gray,
            fontWeight: 400
        },

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
    }
}));

export default useStyles;
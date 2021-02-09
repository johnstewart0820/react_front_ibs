import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '40%',
    },
    name_select_box: {
        fontStyle: 'italic',
        color: '#aeaeae',
        fontWeight: '400',
        '& .MuiInputLabel-outlined .MuiInputLabel-shrink': {
            transform: 'translate(14px -100px) scale(0.5)',
        },
    },
    input_box: {
        '& select': {
            border: '1px solid gray',
        }
        
    },
    title: {
        fontWeight: '400',
        fontFamily: 'roboto',
        color: '#44545e',
        paddingBottom: '10px',
    }
}));

export default useStyles;
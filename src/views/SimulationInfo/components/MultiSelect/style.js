import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%'
    },
    name_select_box: {
        fontStyle: 'italic',
        color: '#aeaeae',
        fontWeight: '400',
    },
    multiple_select: {
        '& .MuiSelect-outlined.MuiSelect-outlined': {
            padding: '18.5px 14px',
            border: '1px solid gray',
            borderRadius: '4px',
        },
        marginTop: '-1px !important'

    }
}));

export default useStyles;
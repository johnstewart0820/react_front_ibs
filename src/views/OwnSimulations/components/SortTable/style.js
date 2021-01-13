import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: 'rgba(0,0,0,0.04)'
        },
    }

}));

export default useStyles;
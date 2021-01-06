import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    drawer: {
      width: 345,
    },
    root: {
      backgroundColor: '#323444',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    nav: {
      marginBottom: theme.spacing(2)
    },
    main_logo: {
      padding: '10px 60px',
    },
    icon: {
      color: '#8b919a',
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(3),
      '&:hover': {
        color: '#EBECF0'
      },
    },
    logout: {
      padding: '25px 20px 25px 60px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: 400,
      fontSize: '20px',
      color: '#8b919a',
      lineHeight: '1.3em',
      '&:hover': {
        backgroundColor: '#1e202c',
        color: '#EBECF0',
      },
      position: 'absolute',
      bottom: '0px'
    },
  }));
  export default useStyles;
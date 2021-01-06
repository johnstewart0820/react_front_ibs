import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      left: '344px',
      width: 'calc(100% - 344px)',
      height: '80px',
      backgroundColor: '#FCFCFC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    flexGrow: {
      flexGrow: 1
    },
    signOutButton: {
      marginLeft: theme.spacing(1)
    },
    toolbar: {
      display: 'flex',
      width: '100%',
      paddingLeft: '40px'
    },
    close_drawer_icon: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        fontSize: '4em'
      }
    },
    title: {
      color: 'gray',
      fontSize: '1.7em',
      fontFamily: 'roboto',
      fontWeight: '400',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px'
    }
  }));

  export default useStyles;
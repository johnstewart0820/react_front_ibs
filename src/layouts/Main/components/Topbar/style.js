import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.15), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.02)',
      left: '299px',
      width: 'calc(100% - 299px)',
      height: '80px',
      backgroundColor: theme.palette.topbar_background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '101'
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
      padding: '0px 10px',
      justifyContent: 'space-between'
    },
    close_drawer_icon: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        fontSize: '30px'
      }
    },
    title: {
      color: theme.palette.gray,
      fontSize: '20px',
      fontFamily: 'roboto',
      fontWeight: '400',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '16px'
    },
    avatar: {

    },
    titlebar: {
      display: 'flex'
    },
    avataricon: {
      fontSize: '40px'
    },
  }));

  export default useStyles;
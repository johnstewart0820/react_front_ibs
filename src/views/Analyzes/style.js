import { makeStyles, useTheme } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    backgroundColor: 'white',
    width: '600px',
    height: '100%',
    boxShadow: '0px 0px 20px grey',
  },
  public: {
    color: theme.palette.gray,
    fontFamily: 'roboto',
    fontWeight: 400,
  },
  normalBlock: {
    padding: '20px 20px 20px 20px',
  },
  flexBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    marginTop: '20px'
  },
  itemBlock: {
    width: '20%',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  headerBlock: {
    padding: '20px 20px 40px 20px',
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectTitle: {
    color: theme.palette.gray,
    fontSize: '14px',
    fontFamily: 'roboto',
    fontWeight: 400
  },
  subHeader: {
    color: theme.palette.gray,
    fontSize: '17px',
    fontFamily: 'roboto',
    fontWeight: 400,
  },
  controlBlock: {
    position: 'absolute',
    bottom: '50px',
    width: 'calc(100% - 360px)'
  },
  btnCreate: {
    '& .MuiButton-label': {
        textTransform: 'none',
        fontSize: '15px',
    },
    '&:hover': {
        backgroundColor: theme.palette.pink
    },
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.pink,
    color: 'white',
    width: '100%',
    height: '100%',
    lineHeight: '1',
    padding: '10px',
  },
  input_box: {
    padding: '12px 20px',
    marginLeft: '10px',
    marginRight: '10px',
    width: '200px',
    fontSize: '14px',
    '&::placeholder': {
      color: theme.palette.gray,
      fontWeight: '400',
      fontStyle: 'italic',
      fontFamily: 'roboto'
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
      color: theme.palette.pink
  },
  rowsBlock: {
    display: 'flex',
    alignItems: 'center'
  },
  searchBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  refresh_btn: {
    color: theme.palette.pink,
    cursor: 'pointer',
  },
  filterBlock: {
    padding: '20px'
  },
  titleHeader: {
    marginBottom: '10px'
  }
}));

export default useStyles;

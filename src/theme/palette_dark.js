import { colors } from '@material-ui/core';

const yellow = '#ffd401';
const white = yellow;
const black = '#000000';
const black_disable = '#111111';
const pink = '#D6324B';
const gray = yellow;
const blue = pink;
const blue_disable = pink;
const normal = '#8b919a';
const normal_disable = '#EBECF0';
const select_title = '#aeaeae';
const checked_color = '#546e7a';
const sidebar_background = black;
const sidebar_active_background = black_disable;
const sidebar_color = normal;
const sidebar_active_color = normal_disable;
const topbar_background = black;
const pink_disable = '#a02000';
const gray_disable = '#404040';
const mainBackground = black;
const contrastColor = `1px solid ${yellow}`;
const table_head = black;
const input_back = black;
export default {
  black,
  input_back,
  white,
  pink,
  gray,
  blue,
  blue_disable,
  normal,
  normal_disable,
  select_title,
  checked_color,
  sidebar_background,
  sidebar_active_background,
  sidebar_color,
  sidebar_active_color,
  topbar_background,
  pink_disable,
  gray_disable,
  mainBackground,
  contrastColor,
  table_head,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: black,
    paper: black
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};

import React, { useEffect } from 'react';
import { FormControl, InputLabel, Select, Input, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './style';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultiSelect = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { handleChange, value, list} = props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
  }, []);

  return (
    <FormControl className={classes.formControl}>
    <InputLabel id="demo-mutiple-name-label" className={classes.name_select_box} variant="outlined" >Wybierz</InputLabel>
    <Select
      labelId="demo-mutiple-name-label"
      className={classes.multiple_select}
      multiple
      variant="outlined" 
      value={value}
      onChange={(event) => handleChange(event.target.value ? event.target.value : '')}
      input={<Input />}
      MenuProps={MenuProps}
    >
      {list.map((item, index) => (
        <MenuItem key={index} value={item.polish ? item.polish : item.description} style={getStyles(item.polish ? item.polish : item.description , value, theme)}>
          {item.polish ? item.polish : item.description}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  );
};

export default withRouter(MultiSelect);

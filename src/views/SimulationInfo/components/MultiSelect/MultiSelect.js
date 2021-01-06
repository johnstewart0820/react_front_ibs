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
        <MenuItem key={index} value={item.polish} style={getStyles(item.polish, value, theme)}>
          {item.polish}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
    // <FormControl variant="outlined" className={classes.formControl}>
    //   <InputLabel htmlFor="outlined-age-native-simple" className={classes.name_select_box}>Wybierz</InputLabel>
    //   <Select
    //     native
    //     multiple
    //     value={value}
    //     onChange={(event) =>handleChange(event.target.value ? event.target.value : {})}
    //     inputProps={{
    //       name: 'age',
    //       id: 'outlined-age-native-simple',
    //     }}
    //   >
    //     <option aria-label="None" value="" />
    //     {
    //       list.map((item, index) => 
    //         <option value={item.name}>{item.polish}</option>
    //       )
    //     }
    //   </Select>
    // </FormControl>
  );
};

export default withRouter(MultiSelect);

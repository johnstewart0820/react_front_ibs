import React, { useEffect } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import useStyles from './style';

const RowFilter = (props) => {
  const classes = useStyles();
  const { value, handleChange, list} = props;
  useEffect(() => {
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        native
        value={value}
        className={classes.name_select_box}
        onChange={(event) =>handleChange(event.target.value ? event.target.value : {})}
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
      >
        {
          list.map((item, index) => 
            <option key={index} value={item}>{item}</option>
          )
        }
      </Select>
    </FormControl>
  );
};

export default withRouter(RowFilter);

import React from 'react';
import { MultiSelect, SingleSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { 
  Grid, 
  Card, 
} from '@material-ui/core';

const ProvinceOccupationAdditionalOption = (props) => {
  const classes = useStyles();
  const { 
    provinceValue, 
    occupationValue, 
    handleSelectedProvince, 
    handleSelectedOccupation, 
    provinceList,
    occupationList,
  } = props;

  return (
    <>
      <Card className={classes.secondContainer}>
        <Grid container spacing={2} className={classes.mainContainer}>
          <Grid item xs={12}>
            <div className={classes.mainHeader}>
              Dotatkowe opcje
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.secondTitleHeader}>
              Wybierz województwo
            </div>
            <MultiSelect value={provinceValue} handleChange={handleSelectedProvince} list={provinceList}/>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.secondTitleHeader}>
              Wybierz zawód
            </div>
            <MultiSelect value={occupationValue} handleChange={handleSelectedOccupation} list={occupationList}/>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(ProvinceOccupationAdditionalOption);

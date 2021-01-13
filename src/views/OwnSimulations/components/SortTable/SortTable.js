import React, { useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableSortLabel, 
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import useStyles from './style';

const SortTable = (props) => {
  const classes = useStyles();
  const { sortBy, sortOrder, requestSort, sum, rows } = props;
  useEffect(() => {
  }, []);

  return (
    <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 0}
                  direction={sortOrder}
                  onClick={() => requestSort(0)}
                >
                  Miesiąc
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 1}
                  direction={sortOrder}
                  onClick={() => requestSort(1)}
                >
                  %
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 2}
                  direction={sortOrder}
                  onClick={() => requestSort(2)}
                >
                  wartość
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item, indx) => {
              var percent = item.value / sum * 100;
              return (
                <TableRow key={indx} className={classes.root}>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{percent.toFixed(2)}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter />
        </Table>
  );
};

export default withRouter(SortTable);

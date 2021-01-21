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
  const { sortBy, sortOrder, requestSort, sum, rows, field_list, selectedChartType } = props;
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
              {selectedChartType == 1 ? 'Rok' : 'Zawód'}
            </TableSortLabel>
          </TableCell>
          {
            field_list.map((item, indx) => (
              <TableCell>
                <TableSortLabel
                  active={sortBy === 0}
                  direction={sortOrder}
                  onClick={() => requestSort(indx + 1)}
                >
                  {item}
                </TableSortLabel>
              </TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((item, indx) => (
          <TableRow key={indx} className={classes.root}>
            {selectedChartType == 1 ? 
                <>
                <TableCell>{item.year}</TableCell>
                {field_list.map((value, index) => (
                  <TableCell>{Number.parseFloat(item[value]).toFixed(2)}</TableCell>
                ))}
              </>
              :
              <>
              <TableCell>{item.name}</TableCell>
              {item.data.map((value, index) => (
                <TableCell>{Number.parseFloat(value.value).toFixed(2)}</TableCell>
              ))}
              </>
              
            }
          </TableRow>
        ))}
      </TableBody>
      <TableFooter />
    </Table>
  );
};

export default withRouter(SortTable);

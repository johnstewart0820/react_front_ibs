import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  Popover
} from '@material-ui/core';
import CheckboxTree from 'react-checkbox-tree';
import {
  ExpandMore,
  ChevronRight,
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  ArrowDownward,
  ArrowUpward
} from '@material-ui/icons';
import { SingleSelect, MultiSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
// import 'react-checkbox-tree/lib/react-checkbox-tree.css';
// import 'react-checkbox-tree/src/less/react-checkbox-tree.less';
import 'react-checkbox-tree/src/scss/react-checkbox-tree.scss';
import './style.css';

var isInitialRender = 0;
const OccupationSelectionModal = (props) => {
  const { node, occupationSize, occupationSizeList, handleSelectedOccupationSize, handleSelectedOccupation, selectedOccupation } = props;
  const [nodes, setNodes] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const classes = useStyles();

  const handleClick = (event) => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(document.getElementById('btn_open').offsetWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  // }, []);
  useEffect(() => {
    setWidth(document.getElementById('btn_open').offsetWidth);
  }, [open]);
  useEffect(() => {
    let result = [];
    let index_1 = 0;
    let index_2 = 0;

    if (isInitialRender >= 2) {
      handleSelectedOccupation([]);
      setExpanded([]);
    }

    isInitialRender++;
    for (let i = 0; i < node.length; i++) {
      if (node[i].id.toString().length == 1 && occupationSize >= 1) {
        result.push({ "value": node[i].id, "label": node[i].name })
        index_1++;
        index_2 = 0;
      } else if (node[i].id.toString().length == 2 && occupationSize >= 2) {
        if (!result[index_1 - 1].children) {
          result[index_1 - 1].children = [];
        }
        result[index_1 - 1].children.push({ "value": node[i].id, "label": node[i].name })
        index_2++;
      } else if (node[i].id.toString().length == 3 && occupationSize == 3) {
        if (!result[index_1 - 1].children[index_2 - 1].children) {
          result[index_1 - 1].children[index_2 - 1].children = [];
        }
        result[index_1 - 1].children[index_2 - 1].children.push({ "value": node[i].id, "label": node[i].name })
      }
    }
    setNodes(result);
  }, [occupationSize]);

  const onClickItem = (e) => {
    let arr = selectedOccupation;
    if (e.isLeaf) {
      if (e.checked) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == e.value) {
            arr.splice(i, 1);
          }
        }
      } else {
        arr.push(e.value);
      }
      handleSelectedOccupation(JSON.parse(JSON.stringify(arr)));
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className={classes.secondTitleHeader}>
          Wybierz rodzaj grupy
        </div>
        <SingleSelect value={occupationSize} handleChange={handleSelectedOccupationSize} list={occupationSizeList} />
      </Grid>
      <Grid item xs={8}>
        <div className={classes.secondTitleHeader}>
          Zawód
        </div>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            id="btn_open"
            className={classes.btnOpen}
            onClick={handleClick} disabled={!occupationSize || occupationSize == 0}
            startIcon={!open ? <ArrowDownward /> : <ArrowUpward />}
            style={open ? {'border-bottom': '0px'} : {}}
          >
            Wybierz zawód
          </Button>
          {
            <>
            <Grid container className={classes.occupationBlock} id="occupation_block" style={open ? { visibility: 'visible', width: width } : { visibility: 'hidden', width: width }}>
              <Grid item xs={12}>
                <div className={classes.checkboxblock}>
                  <CheckboxTree
                    nodes={nodes}
                    checked={selectedOccupation}
                    expanded={expanded}
                    onCheck={(result) => handleSelectedOccupation(result)}
                    onExpand={setExpanded}
                    icons={{
                      check: <CheckBox />,
                      uncheck: <CheckBoxOutlineBlank />,
                      halfCheck: <IndeterminateCheckBox />,
                      expandClose: <ExpandMore />,
                      expandOpen: <ChevronRight />,
                      expandAll: <ChevronRight />,
                      collapseAll: <ExpandMore />,
                      parentClose: <></>,
                      parentOpen: <></>,
                      leaf: <></>,
                    }}
                    onlyLeafCheckboxes={true}
                    expandOnClick={true}
                    onClick={(e) => { onClickItem(e) }}
                    checkModel="leaf"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0} justify="flex-end">
                  <Button variant="contained" color="secondary" className={classes.btnSave} onClick={handleClose}>
                    Zapisz wybór
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {open ? <div className={classes.overBox} onClick={handleClose}/> : <></>}
            </>
          }

        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(OccupationSelectionModal);
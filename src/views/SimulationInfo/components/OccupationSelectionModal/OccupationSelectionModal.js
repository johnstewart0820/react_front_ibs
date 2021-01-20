import React, { useEffect, useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  Card,
  Button
} from '@material-ui/core';
import CheckboxTree from 'react-checkbox-tree';
import {
  ExpandMore,
  ChevronRight,
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox
} from '@material-ui/icons';
import { SingleSelect, MultiSelect } from '..';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
// import 'react-checkbox-tree/lib/react-checkbox-tree.css';
// import 'react-checkbox-tree/src/less/react-checkbox-tree.less';
import 'react-checkbox-tree/src/scss/react-checkbox-tree.scss';

var isInitialRender = 0;
const OccupationSelectionModal = (props) => {
  const { node, occupationSize, occupationSizeList, handleSelectedOccupationSize, handleSelectedOccupation, selectedOccupation } = props;
  const [nodes, setNodes] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [occupationValue, setOccupationValue] = useState('');

  const classes = useStyles();

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    console.log(occupationSize);
    let result = [];
    let index_1 = 0;
    let index_2 = 0;

    if (isInitialRender >= 2) {
      isInitialRender = 0;
      handleSelectedOccupation([]);
      setExpanded([]);
    }
    
    isInitialRender ++;
    for (let i = 0; i < node.length; i++) {
      if (node[i].code.length == 1 && occupationSize >= 1) {
        result.push({ "value": node[i].id, "label": node[i].name })
        index_1++;
        index_2 = 0;
      } else if (node[i].code.length == 2 && occupationSize >= 2) {
        if (!result[index_1 - 1].children) {
          result[index_1 - 1].children = [];
        }
        result[index_1 - 1].children.push({ "value": node[i].id, "label": node[i].name })
        index_2++;
      } else if (node[i].code.length == 3 && occupationSize == 3) {
        if (!result[index_1 - 1].children[index_2 - 1].children) {
          result[index_1 - 1].children[index_2 - 1].children = [];
        }
        result[index_1 - 1].children[index_2 - 1].children.push({ "value": node[i].id, "label": node[i].name })
      }
    }
    setNodes(result);
  }, [occupationSize]);

  const saveOccupationValue = () => {
    handleSelectedOccupation(selectedOccupation);
    setOpenModal(false);

  }

  useEffect(() => {
    console.log(node, selectedOccupation);
    if (!node || !selectedOccupation) 
      return
    let value = [];
    for (let i = 0; i < node.length; i++) {
      for (let j = 0; j < selectedOccupation.length; j++) {
        if (node[i].id == selectedOccupation[j]) {
          value.push(node[i].name);
        }
      }
    }
    setOccupationValue(value.join(", "));
  }, [selectedOccupation])
  return (
    <Grid container spacing={2}>
    <Grid item xs={3}>
      <div className={classes.secondTitleHeader}>
        Wybierz rodzaj grupy
      </div>
      <SingleSelect value={occupationSize} handleChange={handleSelectedOccupationSize} list={occupationSizeList}/>
    </Grid>
    <Grid item xs={9}>
      <div className={classes.secondTitleHeader}>
        Zawód
      </div>
      <div className={classes.occupationBlock}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <input className={classes.input_box} type="text" value={occupationValue} name="occupation" placeholder="Wybierz" />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={() => setOpenModal(true)} disabled={!occupationSize || occupationSize == 0}>
              Wybierz zawód
          </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openModal}
              onClose={handleCloseModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openModal}>
                <Card className={classes.paper}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      Wybierz zawód
                  </Grid>
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
                          checkModel="leaf"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={0} justify="flex-end">
                        <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={() => saveOccupationValue()}>
                          Uratuj okupację
                      </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Fade>
            </Modal>
          </Grid>
        </Grid>
      </div>
    </Grid>
    </Grid>
  );
};

export default withRouter(OccupationSelectionModal);

import React, { useEffect, useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  Card
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab.css';
import useStyles from './style';
import { SimulationView } from '..';

const SimulationModal = (props) => {
  const { openModal, handleClose, list } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();
  const seriesLabelId = [
    {
      id_type: 19, 
      title: 'Tempo wzrostu PKB', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
      id_type: 20, 
      title: 'Popyt zagraniczny', 
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.'
    },
    {
      id_type: 18, 
      title: 'Wielkść konsumpcji publicznej', 
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.'
    },
    {
      id_type: 1, 
      title: 'Dzietność', 
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id_type: 3, 
      title: 'Saldo Migracji', 
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    }
  ];
  useEffect(() => {
  }, []);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Card className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              Wartości liczbowe dla wariantów
            </Grid>
            <Grid item xs={1} className={classes.closeIconBlock}>
                <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
            </Grid>
            <Grid item xs={12}>
              <Tabs onSelect={index => setTabIndex(index)}>
                <TabList>
                  <Tab>Tempo wzrostu PKB</Tab>
                  <Tab>Popyt zagraniczny</Tab>
                  <Tab>Wielkść konsumpcji publicznej</Tab>
                  <Tab>Dzietność</Tab>
                  <Tab>Saldo Migracji</Tab>
                </TabList>
                <TabPanel>
                  <SimulationView seriesLabelInfo={seriesLabelId[tabIndex]}/>
                </TabPanel>
                <TabPanel>
                  <SimulationView seriesLabelInfo={seriesLabelId[tabIndex]}/>
                </TabPanel>
                <TabPanel>
                  <SimulationView seriesLabelInfo={seriesLabelId[tabIndex]}/>
                </TabPanel>
                <TabPanel>
                  <SimulationView seriesLabelInfo={seriesLabelId[tabIndex]}/>
                </TabPanel>
                <TabPanel>
                  <SimulationView seriesLabelInfo={seriesLabelId[tabIndex]}/>
                </TabPanel>
              </Tabs>
            </Grid>
          </Grid>
        </Card>
      </Fade>
    </Modal>
  );
};

export default withRouter(SimulationModal);

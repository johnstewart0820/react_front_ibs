import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import useStyles from './style';
import {
  CircularProgress,
  Grid,
  Card,
  Button,
} from '@material-ui/core';

import 'react-tabs/style/react-tabs.css';
import { useToasts } from 'react-toast-notifications'
import { DeleteModal } from './components'
import job_offers from '../../apis/job-offers';

import { DropzoneArea } from 'material-ui-dropzone'
import readXlsxFile from 'read-excel-file'
import MonthPickerInput from 'react-month-picker-calendar';
import 'react-month-picker-calendar/dist/react-month-picker-input.css';
import './style.css';

const ImportJobOffer = props => {

  const [progressStatus, setProgressStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [province, setProvince] = useState([]);
  const [cluster, setCluster] = useState([]);
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [isRightFile, setIsRightFile] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const { history } = props;
  const theme = useTheme();
  const { addToast } = useToasts()
  const classes = useStyles(theme);

  useEffect(() => {

    job_offers.getInfo()
      .then(response => {
        if (response.code === 401) {
          history.push('/login');
        } else {
          if (response.code === 200) {
            setProvince(response.data.provinces);
            setCluster(response.data.clusters);
          }
        }
      })
  }, []);

  useEffect(() => {
    parse(files[0]);
  }, [files]);

  const parse = (file) => {
    readXlsxFile(file).then((rows) => {
      let arr = [];
      for (let i = 0; i < rows.length - 1; i++) {
        let year = 0;
        let month = 0;
        for (let j = 0; j < rows[i].length; j++) {
          if (rows[0][j] === 'rok') {
            year = rows[i + 1][j];
          }
          else if (rows[0][j] === 'miesiac') {
            month = rows[i + 1][j];
            if (parseInt(month) <= 0 || parseInt(month) > 12) {
              addToast('Niepoprawny format pliku.', { appearance: 'error', autoDismissTimeout: 3000, autoDismiss: true });
              setIsRightFile(false);
              return false;
            }
          }
          else if (rows[0][j].startsWith('kzis_')) {
            let code = rows[0][j].slice(5);
            let value = rows[i + 1][j];
            const date = new Date(year, month, 1, 0, 0, 0);
            arr.push({ year: year, month: month, value: value, code: code, type: 1, time_value: date });
          } else {
            for (let k = 0; k < province.length; k++) {
              if (province[k].name.toLowerCase() === rows[0][j].toLowerCase()) {
                let code = province[k].id;
                let value = rows[i + 1][j];
                const date = new Date(year, month, 1, 0, 0, 0);
                arr.push({ year: year, month: month, value: value, code: code, type: 2, time_value: date });
              }
            }
            for (let k = 0; k < cluster.length; k++) {
              if (cluster[k].name.toLowerCase() === rows[0][j].toLowerCase()) {
                let code = cluster[k].id;
                let value = rows[i + 1][j];
                const date = new Date(year, month, 1, 0, 0, 0);
                arr.push({ year: year, month: month, value: value, code: code, type: 3, time_value: date });
              }
            }
          }
        }
      }
      setData(arr);
      setIsRightFile(true);
    })
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleUpload = () => {
    setProgressStatus(true);
    job_offers.create(data)
      .then(response => {
        if (response.code === 401) {
          history.push('/login');
        } else {
          if (response.code === 200) {
            addToast(response.message, { appearance: 'success', autoDismissTimeout: 3000, autoDismiss: true });
          }
          setProgressStatus(false);
        }
      })
  }

  const handleRemove = () => {
    setProgressStatus(true);
    job_offers.delete(fromDate, toDate)
      .then(response => {
        if (response.code === 401) {
          history.push('/login');
        } else {
          if (response.code === 200) {
            addToast(response.message, { appearance: 'success', autoDismissTimeout: 3000, autoDismiss: true });
          }
          setProgressStatus(false);
        }
      })
  }

  return (
    <>
      <div className={classes.public}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.headerBlock}>
              <div className={classes.subHeader}>
                Import danych
              </div>
              <div>
                <DropzoneArea
                  className={classes.dropZone}
                  onChange={setFiles}
                  fileObjects={[]}
                  acceptedFiles={["application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]}
                  filesLimit={1}
                  showFileNames={true}
                  dropzoneText="Proszę zaimportować plik xlsx."
                  showAlerts={false}
                />
              </div>
              <div className={classes.uploadButtonBlock}>
                <Button variant="contained" color="secondary" className={classes.btnSimulate} onClick={handleUpload} disabled={!isRightFile}>
                  Przekazać plik
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.headerBlock}>
              <div className={classes.subHeader}>
                Usuwanie danych
              </div>
              <div style={{ alignItems: 'center'}}>
                <div className = {classes.label}>
                  Od :
                </div>
                <MonthPickerInput
                  value={new Date()}
                  onChangeYearUpdate={false}
                  onChange={function (label,selectedYear,selectedMonth) {
                    const date = new Date(selectedYear, selectedMonth, 0, 0, 0, 0);
                    setFromDate(date);
                  }}
                />
                <div className={classes.label}>
                  Do :
                </div>
                <MonthPickerInput
                  value={new Date()}
                  onChangeYearUpdate={false}
                  onChange={function (label, selectedYear, selectedMonth) {
                    const date = new Date(selectedYear, selectedMonth + 2, 0, 0, 0, 0);
                    setToDate(date);
                  }}
                />
              </div>
              <div style={{marginTop: '115px'}}>
                <Button variant="contained" color="secondary" className={classes.btnSimulate} onClick={() => setOpenModal(true)} disabled={fromDate.length === 0 || toDate.length === 0}>
                  Usuń dane
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
      <DeleteModal handleClose={handleClose} openModal={openModal} handleDelete={handleRemove}/>
      {
        progressStatus ?
          <>
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          </>
          :
          <></>
      }
    </>
  );
};

export default ImportJobOffer;

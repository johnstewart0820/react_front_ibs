import React, { useEffect, useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import useStyles from './style';
import {
  Grid,
  Card,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useToasts } from 'react-toast-notifications'
import contents from '../../apis/contents';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Quill from 'quill';
// import { ImageDrop } from 'quill-image-drop-module';
// import { ImageResize } from 'quill-image-resize-module';

const BlockText = (props) => {
  const classes = useStyles();
  const { addToast } = useToasts()
  const { history } = props;

  const [progressStatus, setProgressStatus] = useState(false);
  const [block, setBlock] = useState([]);
  const [content, setContent] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{
        'color': ['#a52b02', '#44545e']
      }],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      [{ align: '' }, { align: 'right' }, { align: 'center' }, { align: 'justify' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    // imageResize: {
    //   displaySize: true
    // },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'list', 'bullet', 'indent', 'align',
    'link', 'image', 'video'
  ];
  const handleBack = (id) => {
    history.push(`/content_management`)
  }

  useEffect(() => {
    setProgressStatus(true);
    console.log(props);
    contents
      .getBlock(props.match.params.id)
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
          setBlock(response.data.block)
          setContent(response.data.block.content)
        }
      })
  }, []);

  const handleChange = (value) => {
    setContent(value);
  }

  const handleUpdate = () => {
    setProgressStatus(true);
    contents
      .updateBlock(props.match.params.id, content)
      .then(response => {
        setProgressStatus(false);
        if (response.code === 401) {
          history.push('/login');
        } else {
        }
      })
  }

  return (
    <>
      <div className={classes.title}>
        <span>Slug:</span> {block.slug}
      </div>
      <div className={classes.title}>
        <span>Name:</span> {block.name}
      </div>
      <ReactQuill 
          onChange={handleChange}
          value={content}
          modules={modules}
          formats={formats}
          placeholder="Write Something..."
          className={classes.qlClass}
      />
      <div className={classes.buttonBlock}>
        <Button variant="contained" color="secondary" className={classes.btnChange} onClick={handleBack}>
          Plecy
        </Button>
        <Button variant="contained" color="secondary" className={classes.btnOpen} onClick={handleUpdate}>
          Aktualizacja
        </Button>
      </div>
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

export default withRouter(BlockText);

import React, { useState, useCallback, useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import { unionBy } from 'lodash';

import { AppButton } from '../../../components';
import { getReadableSize } from '../../../utils/helpers';
import { post } from '../../../utils/api';
import { AppContext } from '../../../data';
import { GET_COURSEDETAIL_SUCCESS } from '../../../data/appReducer';

const UploadModal = ({ id }) => {
  const [modal, setModal] = useState(false);
  const [myFiles, setMyFiles] = useState([]);
  const [{}, dispatch] = useContext(AppContext);

  const onDrop = useCallback(
    (acceptedFiles) => {
      var result = unionBy(myFiles, acceptedFiles, 'lastModified');

      setMyFiles([...result]);
    },
    [myFiles]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: '.pdf,.pptx,.docx,.xlsx,.ipynb,.jpg,.jpeg,.png',
    maxSize: 25000000,
    onDrop
  });

  const onClickRemove = (file) => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const toggle = () => {
    setModal(!modal);
    setMyFiles([]);
  };

  const onClickUpload = async () => {
    const formdata = new FormData();
    myFiles.forEach((item) => {
      formdata.append('files', item);
    });
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const result = await post(`course/${id}/file`, formdata, config);

    if (result.status === 200) {
      dispatch({ type: GET_COURSEDETAIL_SUCCESS, payload: result.data.data });
    } else {
      // show toast notification
      alert(result.data.message);
    }

    toggle();
  };

  const files = myFiles.map((file) => {
    return (
      <div className="d-flex justify-content-between" key={file.path}>
        <p>
          {file.path} - {getReadableSize(file.size)}
        </p>
        <AppButton
          noBackground
          style={{ color: 'red', fontWeight: 'normal' }}
          onClick={() => onClickRemove(file)}
        >
          Remove
        </AppButton>
      </div>
    );
  });

  return (
    <>
      <AppButton onClick={toggle}>Upload</AppButton>

      <Modal isOpen={modal} toggle={toggle} keyboard={false} backdrop="static" size="lg">
        <ModalHeader toggle={toggle}>Upload Files</ModalHeader>
        <ModalBody>
          <section className="container">
            <div {...getRootProps({ className: 'dropzone dropzone-container' })}>
              <input {...getInputProps()} />
              <p className="filedrop-text">
                Drag and drop or <span>BROWSE</span> file
              </p>
              <p className="filedrop-text m-0">
                pdf, pptx, docx, xlsx, ipynb, jpg, jpeg, png files only (Max files size 50
                MB)
              </p>
            </div>
            <aside>{files}</aside>
          </section>
        </ModalBody>
        <ModalFooter>
          <AppButton onClick={toggle} noBackground>
            Cancel
          </AppButton>
          <AppButton onClick={onClickUpload}>Upload</AppButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UploadModal;

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileDrop from './FileDrop';

const UploadModal = ({ className, children }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onClickUpload = () => {
    // validate form
    // submit form
    // toggle form
    toggle();
  };

  return (
    <>
      <Button
        onClick={toggle}
        style={{ backgroundColor: '#00a09e', border: 'none' }}
        size="sm"
      >
        Upload
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Upload Files</ModalHeader>
        <ModalBody>
          <FileDrop />
        </ModalBody>
        <ModalFooter>
          <Button size="sm" color="link" onClick={toggle}>
            Cancel
          </Button>
          <Button size="sm" color="primary" onClick={onClickUpload}>
            Upload
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UploadModal;

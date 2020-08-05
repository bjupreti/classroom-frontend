import React from 'react';
import { Button } from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import { getReadableSize } from '../../../utils/helpers';

function checkValidation(file) {
  // file size validation
  if (file.size > 52428800) {
    return 'File size should not exceed 50MB.';
  }
}

export default function FileDrop() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: '.pdf,.pptx,.docx,.xlsx,.ipynb,.jpg,.jpeg,.png',
    maxSize: 25000000
  });

  const onClickRemove = () => {
    alert('remove');
  };

  const files = acceptedFiles.map((file) => {
    const message = checkValidation(file);
    return (
      <>
        <div className="d-flex justify-content-between" key={file.path}>
          <p>
            {file.path} - {getReadableSize(file.size)}
          </p>
          <Button color="link" onClick={onClickRemove}>
            &#10006;
          </Button>
        </div>
        <span>{message}</span>
      </>
    );
  });
  console.log(acceptedFiles);
  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone dropzone-container' })}>
        <input {...getInputProps()} />
        <p className="filedrop-text">
          Drag and drop or <span>BROWSE</span> file
        </p>
        <p className="filedrop-text small m-0">
          pdf, pptx, docx, xlsx, ipynb, jpg, jpeg, png files only (Max files size 50 MB)
        </p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

import React, { useContext } from 'react';
import { Table, Button } from 'reactstrap';
import moment from 'moment';
import { getReadableSize } from '../../../utils/helpers';
import { AppContext } from '../../../data';
import UploadModal from './UploadModal';

export default function FileList() {
  const [{ courseDetails }] = useContext(AppContext);

  return (
    <section>
      <div className="d-flex justify-content-between my-2 align-items-center">
        <h3 className="filelist-title">FILES AND FOLDERS</h3>
        <UploadModal />
      </div>
      <Table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DATE ADDED</th>
            <th>LAST MODIFIED</th>
            <th>SIZE</th>
          </tr>
        </thead>
        <tbody>
          {courseDetails.files.map((item) => (
            <tr key={item._id}>
              <td>{item.fileName}</td>
              <td>{moment(item.updatedAt).format('MMM DD, YYYY')}</td>
              <td>{moment(item.updatedAt).format('MMM DD, YYYY')}</td>
              <td>{getReadableSize(item.size)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

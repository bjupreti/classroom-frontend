import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';

import { getReadableSize } from '../../../utils/helpers';
import { AppContext } from '../../../data';
import UploadModal from './UploadModal';
import config from '../../../utils/config';

export default function FileList({ id }) {
  const [{ courseDetails }] = useContext(AppContext);

  return (
    <section>
      <div className="d-flex justify-content-between py-3 align-items-center">
        <h3 className="filelist-title">FILES AND FOLDERS</h3>
        <UploadModal id={id} />
      </div>
      <Table borderless>
        <thead className="table-heading-row">
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
              <td>
                {item.originalName}
                {/* TODO: change the filename to originalname */}
                <a
                  href={`${config.baseURL}course/${id}/file/${item._id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;&nbsp;&#10515;&nbsp;
                </a>
              </td>
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

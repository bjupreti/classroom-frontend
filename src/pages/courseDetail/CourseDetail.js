import React from 'react';
import { Table } from 'reactstrap';
import { Container } from '../../components';
import { protect } from '../../utils';

function CourseDetail() {
  return (
    <Container>
      <div className="container-main">
        <section className="container-courses">
          <div className="file-container">
            <i className="far fa-file-alt"></i>
            <h3 className="green-text">Files</h3>
          </div>
        </section>
        <section className="container-courses">
          <div className="course-listing-header">
            <h3>FILES AND FOLDERS</h3>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default CourseDetail;

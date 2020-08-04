import React from 'react';
import { Container } from '../../components';

export default function CourseDetail() {
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
          </div>
        </section>
      </div>
    </Container>
  );
}

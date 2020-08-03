import React from 'react';
import { Container } from '../../components';

export default function CourseList() {
  return (
    <Container>
      <h2 className="courselist-title">CURRENT SEMESTER COURSES</h2>
      <div className="row">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="col- col-md-6 col-lg-4 col-xl-3 mb-4" key={item}>
            <div className="course-listing-card shadow-sm rounded">
              <div className="course-header">
                <h3>Bioengineering</h3>
              </div>

              <div className="course-detail">
                <h4>Course Name</h4>
                <p className="mb-0">Program Name</p>
                <p className="mb-0">Semester: Quarter 1st</p>
                <p className="mb-0">Start Date: Jun 1, 2020</p>
              </div>
            </div>
            {/* Course listing ends here */}
          </div>
        ))}
      </div>
    </Container>
  );
}

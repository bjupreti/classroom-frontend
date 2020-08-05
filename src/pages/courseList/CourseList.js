import React, { useEffect, useContext } from 'react';
import { Spinner } from 'reactstrap';
import { Container } from '../../components';
import { AppContext } from '../../data';
import { get } from '../../utils/api';
import {
  GET_COURSE_INIT,
  GET_COURSE_SUCCESS,
  GET_COURSE_ERROR
} from '../../data/appReducer';
import { Error } from '../error';

export default function CourseList() {
  const [{ isLoading, hasError, courses }, dispatch] = useContext(AppContext);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    dispatch({ type: GET_COURSE_INIT });
    const result = await get('course');
    if (result && result.status === 200) {
      dispatch({ type: GET_COURSE_SUCCESS, payload: result.data.data });
    } else {
      dispatch({ type: GET_COURSE_ERROR });
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex min-vh-100 align-items-center justify-content-center">
        <Spinner type="grow" style={{ color: '#00a09e' }} />
      </div>
    );
  }

  if (hasError) {
    return <Error />;
  }
  return (
    <Container>
      <h2 className="courselist-title">CURRENT SEMESTER COURSES</h2>
      <div className="row">
        {courses.map((item) => (
          <div className="col- col-md-6 col-lg-4 col-xl-3 mb-4" key={item._id}>
            <div className="course-listing-card shadow-sm rounded">
              <div className="course-header">
                <h3>{item.subject}</h3>
              </div>
              <div className="course-detail">
                <h4>{item.courseName}</h4>
                <p className="mb-0">{item.programName}</p>
                <p className="mb-0">Semester: {item.semester}</p>
                <p className="mb-0">Start Date: {item.startDate}</p>
              </div>
            </div>
            {/* Course listing ends here */}
          </div>
        ))}
      </div>
    </Container>
  );
}

import React, { useEffect, useContext } from 'react';
import { Spinner } from 'reactstrap';
import { Container } from '../../components';
import { get } from '../../utils/api';
import {
  GET_COURSEDETAIL_INIT,
  GET_COURSEDETAIL_SUCCESS,
  GET_COURSEDETAIL_ERROR
} from '../../data/appReducer';
import { AppContext } from '../../data';
import { Error } from '../error';
import FileList from './components/FileList';

function CourseDetail({ id, ...rest }) {
  const [{ isLoading, hasError, courseDetails }, dispatch] = useContext(AppContext);

  useEffect(() => {
    getCourseDetails();
  }, []);

  const getCourseDetails = async () => {
    dispatch({ type: GET_COURSEDETAIL_INIT });
    const result = await get(`course/${id}`);
    if (result && result.status === 200) {
      dispatch({ type: GET_COURSEDETAIL_SUCCESS, payload: result.data.data });
    } else {
      dispatch({ type: GET_COURSEDETAIL_ERROR });
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
  console.warn(courseDetails);
  return (
    <Container>
      <div className="pt-2">
        <p className="file-container">
          {/* <i className="far fa-file-alt"></i> */}
          <span>Files</span>
        </p>
      </div>
      <FileList />
    </Container>
  );
}

export default CourseDetail;

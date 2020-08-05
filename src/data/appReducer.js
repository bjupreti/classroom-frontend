// actions
export const GET_COURSE_INIT = 'GET_COURSE_INIT';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_ERROR = 'GET_COURSE_ERROR';

export const GET_COURSEDETAIL_INIT = 'GET_COURSEDETAIL_INIT';
export const GET_COURSEDETAIL_SUCCESS = 'GET_COURSEDETAIL_SUCCESS';
export const GET_COURSEDETAIL_ERROR = 'GET_COURSEDETAIL_ERROR';

export const initialAppState = {
  isLoading: true,
  hasError: false,
  courses: [],
  courseDetails: {
    files: []
  }
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case GET_COURSE_INIT:
      return { ...state, isLoading: true };
    case GET_COURSE_SUCCESS:
      return { ...state, isLoading: false, hasError: false, courses: action.payload };
    case GET_COURSE_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case GET_COURSEDETAIL_INIT:
      return { ...state, isLoading: true };
    case GET_COURSEDETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        courseDetails: action.payload
      };
    case GET_COURSEDETAIL_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

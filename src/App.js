import React, { useReducer } from 'react';
import { Router } from '@reach/router';

// import pages
import { CourseDetail, CourseList, SignIn, NotFound } from './pages';
import { AppContext, initialAppState, appReducer } from './data';

function App() {
  const appHook = useReducer(appReducer, initialAppState);
  return (
    <AppContext.Provider value={appHook}>
      <Router>
        <SignIn path="/" />
        <CourseList path="/courses" />
        <CourseDetail path="/course/:id" />
        <NotFound default />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

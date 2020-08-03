import React from 'react';
import { Router } from '@reach/router';

// import pages
import { CourseDetail, CourseList, SignIn, NotFound } from './pages';

function App() {
  return (
    <Router>
      <SignIn path="/" />
      <CourseList path="/courses" />
      <CourseDetail path="/course/:id" />
      <NotFound default />
    </Router>
  );
}

export default App;

import React from 'react';
import { Router } from '@reach/router';

// import pages
import { ClassDetail, ClassList, SignIn, NotFound } from './pages';

function App() {
  return (
    <Router>
      <SignIn path="/" />
      <ClassList path="/classes" />
      <ClassDetail path="/class/:id" />
      <NotFound default />
    </Router>
  );
}

export default App;

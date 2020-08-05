import React from 'react';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';

export default function Container({ children }) {
  return (
    <React.Fragment>
      <Header />

      <NavBar />

      <main className="container-wrapper">
        <div className="container-fluid rounded bg-white">{children}</div>
      </main>
    </React.Fragment>
  );
}

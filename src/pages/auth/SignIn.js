import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

export default function SignIn() {
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjIzNjRjOTRiNDUzMTE5ZDM1YTc1YzQiLCJpYXQiOjE1OTY1NTg0Mzh9.Xs_-GPIASbUL4BnqL4dM68gQiDCFvBOP_mMShkl4rAo';
    localStorage.setItem('auth_token', `Bearer ${token}`);
    navigate('/courses');
  }, []);
  return <div>SignIn</div>;
}

import React from 'react';

import { Redirect } from '@reach/router';

export default function protect(PrivateComponent) {
  const hasAuthToken = false;

  // eslint-disable-next-line react/display-name
  return (props) => {
    if (hasAuthToken) return <PrivateComponent {...props} />;
    return <Redirect noThrow to="/" />;
  };
}

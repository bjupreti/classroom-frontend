import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default function AppButton(props) {
  return (
    <div>
      <Button
        className={props.noBackground ? 'app-button-no-bg' : 'app-button'}
        {...props}
      >
        {props.children}
      </Button>
    </div>
  );
}

AppButton.defaultProps = {
  noBackground: false,
  size: 'sm'
};

AppButton.propTypes = {
  noBackground: PropTypes.bool,
  size: PropTypes.string
};

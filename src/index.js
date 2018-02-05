import React from 'react';
import PropTypes from 'prop-types';


const ExampleComponent = ({
  message,
}) => (
  <p>Component JSX goes here.  Message: { message }</p>
);

ExampleComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ExampleComponent;

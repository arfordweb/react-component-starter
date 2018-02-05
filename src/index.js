import React from 'react';
import PropTypes from 'prop-types';


const BaseComponent = ({
  message,
}) => (
  <p>Component JSX goes here.  Message: { message }</p>
);

BaseComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default BaseComponent;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleSubmit, buttonName }) => (
  <button
    type="submit"
    onClick={handleSubmit}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;

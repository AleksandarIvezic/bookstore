import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleSubmit, buttonName, buttonClass }) => (
  <button
    className={buttonClass}
    type="submit"
    onClick={handleSubmit}
  >
    {buttonName}
  </button>
);

Button.defaultProps = {
  buttonClass: '',
};

Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
};

export default Button;

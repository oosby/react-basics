import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, validation, onChange, value, prop, err }) => {
  function handleChange(e) {
    onChange(validation, prop, e.target.value);
  }
  return (
    <fieldset>
      <label>
        {label}
      </label>
      <input type="text" value={value} onChange={handleChange} />
      <span className="error">{err}</span>
    </fieldset>
  );
}

Input.displayName = 'Input';

Input.propTypes = {};

Input.defaultProps = {};

export default Input;

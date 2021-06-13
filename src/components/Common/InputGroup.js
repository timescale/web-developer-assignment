import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

InputGroup.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputGroup.defaultGroup = {
  type: "text",
};

export default InputGroup;

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

function Input({
  placeHolder,
  value,
  onChangeHandler,
  type,
  label,
  required,
  className,
  childElement,
  ...props
}) {
  return (
    <div className={`${className || "Input-Container"}`}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChangeHandler}
        required={required || false}
        {...props}
      />
      {childElement && childElement}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChangeHandler: PropTypes.func,
  required: PropTypes.bool,
  childElement: PropTypes.node,
};

Input.defaultProps = {
  childElement: "",
  label: "",
  type: "",
  value: "",
  onChangeHandler: () => {},
  className: "",
  placeHolder: "",
  required: false,
};

export default Input;

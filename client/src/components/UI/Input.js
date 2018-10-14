import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {
  INPUT
} from "../../element-type-constants";

const Input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case INPUT:
      inputElement = (
        <input
          type={props.type}
          className={classnames("form-control form-control-lg", {
            "is-invalid": props.error
          })}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      );
      break;
    default:
      inputElement = null;
  }
  return (
    <div className="form-group">
      {inputElement}
      {props.error ? (
        <div className="invalid-feedback">{props.error}</div>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

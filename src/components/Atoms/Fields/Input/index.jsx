import React from 'react';

import {Field} from "redux-form";

const Input = ({name, type}) => {
  return (
    <Field name={name} type={type} component="input"/>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
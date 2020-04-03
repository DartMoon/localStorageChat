import React from 'react';

import {Field} from "redux-form";

const Input = ({name}) => {
  return (
    <Field name={name} type={'text'} component="input"/>
  );
};

export default Input;
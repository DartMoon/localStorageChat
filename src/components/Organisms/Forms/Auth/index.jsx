import React from 'react';
import {useDispatch} from "react-redux";
import {reduxForm} from "redux-form";

import {AUTH} from "../../../../store/Auth/constants";
import {FORMS} from "../../../../constants/formName";
import Input from "../../../Atoms/Fields/Input";
import SubmitBtn from "../../../Atoms/Buttons/submit";

const Auth = props => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({type: AUTH.SIGN_IN})
  };

  const handleLogin = () => {
    dispatch({type: AUTH.LOG_IN})
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>UserName</label>
      <Input name={FORMS.AUTH.FIELD_USER_NAME}/>
      <Input name={FORMS.AUTH.FIELD_PASSWORD} type="password"/>
      <SubmitBtn />
      <button type="button" onClick={handleLogin}>login</button>
    </form>
  );
};

export default reduxForm({
  form: FORMS.AUTH.FORM_NAME
})(Auth);
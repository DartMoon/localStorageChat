import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {reduxForm} from "redux-form";

import {FORMS} from "../../../../constants/formName";
import {MESSAGE} from "../../../../store/Chat/constants";
import ChatGroup from "../../../Molecules/FormGroups/ChatGroup";
import SubmitBtn from "../../../Atoms/Buttons/submit";

const ChatForm = props => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch({type: MESSAGE.SET});
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <ChatGroup  />
      <SubmitBtn />
    </form>
  );
};

export default reduxForm({
  form: FORMS.CHAT.FORM_NAME
})(ChatForm);
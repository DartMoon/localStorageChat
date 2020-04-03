import React from 'react';

import {FORMS} from "../../../../constants/formName";
import Input from "../../../Atoms/Fields/Input";

const ChatGroup = props => {
  return (
    <>
      <label>Write message</label>
      <Input name={FORMS.CHAT.FIELD_MSG}/>
    </>

  );
};

export default ChatGroup;
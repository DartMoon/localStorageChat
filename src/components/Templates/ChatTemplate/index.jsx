import React from 'react';

import ChatForm from "../../Organisms/Forms/ChatForm";
import MessagesList from "../../Organisms/MessagesList";

const ChatTemplate = ({chatList}) => {
  return (
    <>
      <ChatForm />
      <MessagesList chatList={chatList}/>
    </>
  );
};

export default ChatTemplate;
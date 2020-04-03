import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import useLocalStorage from "../../hook/loacalStorageHook";

import {chatListSelector} from "../../store/Chat/selector";
import ChatTemplate from "../../components/Templates/ChatTemplate";
import {MESSAGE} from "../../store/Chat/constants";

const MainPage = () => {
  const dispatch = useDispatch();
  const chatList = useSelector(chatListSelector);
  const [name, setName] = useLocalStorage('chatStore', chatList);

  useEffect(() => {
    dispatch({type: MESSAGE.LOAD});
  }, [dispatch]);

  useEffect(() => {
    setName(chatList);
  }, [chatList, setName]);

  return (
    <ChatTemplate chatList={chatList}/>
  );
};

export default MainPage;
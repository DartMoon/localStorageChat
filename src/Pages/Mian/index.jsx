import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {chatListSelector} from "../../store/Chat/selector";
import ChatTemplate from "../../components/Templates/ChatTemplate";
import {MESSAGE} from "../../store/Chat/constants";
import Auth from '../../components/Organisms/Forms/Auth'
import {AUTH} from "../../store/Auth/constants";

const MainPage = () => {
  const dispatch = useDispatch();
  const chatList = useSelector(chatListSelector);

  useEffect(() => {
    dispatch({type: MESSAGE.LOAD});
    dispatch({type: AUTH.LOG_IN});
  }, [dispatch]);

  return (
    <>
      <Auth/>
      <ChatTemplate chatList={chatList || []}/>
    </>
  );
};

export default MainPage;
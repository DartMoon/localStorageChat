import React, {memo} from 'react';

import {toMessageSent} from "../../../utils/time";

import styles from './style.module.css'

const MessagesList = ({chatList}) => {
  return (
    <ul>
      {chatList.map(message => {
        return (
          <li key={message?.id} className={styles.container}>
            <div>
              <span>{message?.name?.authUserName}</span>
              <div>{message?.message}</div>
            </div>
            <div>{toMessageSent(message?.date)}</div>
          </li>
        )
      })}
    </ul>
  );
};

export default memo(MessagesList);
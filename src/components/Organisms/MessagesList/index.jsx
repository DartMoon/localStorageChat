import React, {memo} from 'react';

import styles from './style.module.css'

const MessagesList = ({chatList}) => {
  return (
    <ul>
      {chatList.map(message => {
        return (
          <li key={message.data} className={styles.container}>
            <div>{message.message}</div>
            {/*<div>{message.date.toDateString()}</div>*/}
          </li>
        )
      })}
    </ul>
  );
};

export default memo(MessagesList);
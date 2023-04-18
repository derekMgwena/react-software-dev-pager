import React from 'react';
import { MessageText } from 'stream-chat-react';

const MessageSimple = ({ message }) => {
  return (
    <div className="message-simple">
      <MessageText message={message} />
    </div>
  );
};

export default MessageSimple;

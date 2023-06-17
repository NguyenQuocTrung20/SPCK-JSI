import React from "react";

const ChatItem = ({ content, name, createdAt, id }) => {
  const isMe = id === 1 ? true : false;
    const date = new Date(createdAt?.seconds*1000).toLocaleTimeString()





  return (
    <div>
      <div className={`chat ${isMe ? "chat-end" : "chat-start"}  `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://dogntreats.com/wp-content/uploads/2017/12/ellie-lord-73791-e1512970449129.jpg" />
          </div>
        </div>
        {!isMe && (
          <div className="chat-header">
            {name}
            <time className="text-xs opacity-50 ml-2">{date}</time>
          </div>
        )}

        <div className="chat-bubble">{content}</div>
        {isMe && (
          <div className="chat-footer opacity-50 text-xs mt-1">Delivered at {date}</div>
        )}
      </div>
    </div>
  );
};

export default ChatItem;

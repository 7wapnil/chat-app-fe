import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({ conversation: { id, title, messages } }) => {
  const orderedMessages = (messages) => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map((message) =>
      <li key={message.id}>{message.content}</li>
    );
  };

  return (
    <div className="messages-area">
      <h2>{`Conversation ${id}`}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm conversationId={id} />
    </div>
  );
};

export default MessagesArea;
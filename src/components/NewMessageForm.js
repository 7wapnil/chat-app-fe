import React, { useEffect, useState } from 'react';
import { API_ROOT, HEADERS } from '../constants';

const NewMessageForm = (props) => {
  const [text, setText] = useState('');
  const [conversationId, setConversationId] = useState(props.conversationId);

  useEffect(() => {
    setConversationId(props.conversationId);
  }, [props.conversationId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        content: text,
        conversation_id: conversationId
      })
    });

    setText('');
  };

  return (
    <div className="new-message-form">
      <form onSubmit={handleSubmit}>
        <label>New Message:</label>
        <br/>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value) }
        />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default NewMessageForm;
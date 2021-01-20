import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants';

const NewConversationForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ title })
    });

    setTitle('');
  };

  return (
    <div className="new-conversation-form">
      <form onSubmit={handleSubmit}>
        <label>New conversation:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default NewConversationForm;
import React, { useState, useEffect } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants';
import Cable from './Cable';
import MessagesArea from './MessagesArea';
import NewConversationForm from './NewConversationForm';

const ConversationsList = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    fetch(`${API_ROOT}/conversations`, {
      headers: HEADERS
    })
      .then(res => res.json())
      .then(conversations => setConversations(conversations));
  }, []);

  const handleReceivedConversation = (response) => {
    const { conversation } = response;
    setConversations([...conversations, conversation])
  };

  const handleReceivedMessage = (response) => {
    const { message } = response;
    // const conversation = conversations.find ((conversation) => conversation.id === message.conversation_id);
    // conversation.messages = [...conversation.messages, message];
    const updatedConversations = conversations.map((conversation) => {
      if(conversation.id === message.conversation_id) {
        conversation.messages = [...conversation.messages, message];
      }
      return conversation;
    });
    setConversations(updatedConversations);
  };

  return (
    <div className="conversations-list">
      <ActionCableConsumer
        channel={{ channel: 'ConversationsChannel' }}
        onReceived={handleReceivedConversation}
      />
      {conversations.length > 0 ? (
        <Cable
          conversations={conversations}
          handleReceivedMessage={handleReceivedMessage}
        />
      ): null}
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id} onClick={() => setActiveConversation(conversation.id)}>
            {`Conversation ${conversation.id}`}
          </li>
        ))}        
      </ul>
      <NewConversationForm />
      {
        activeConversation ? (
          <MessagesArea
            conversation={conversations.find((conversation) => conversation.id === activeConversation)}
          />
        ) : null
      }
    </div>
  );
}

export default ConversationsList;
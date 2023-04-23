import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import LoginForm from './components/LoginForm.js';
import './App.css';

const chatAppProps = {
  userName: 'yourUserName',
  userSecret: 'yourUserSecret',
  chatId: 'yourChatId'
};

const projectID = 'b97272b0-bbe5-40d9-9299-6c4a1846e8fb';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
<ChatEngine 
height="100vh"
projectId={ projectID }
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed = {(chatAppProps) >= <ChatFeed {...chatAppProps } />}
onNewMessage = { ()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
/>
  );
};

export default App;
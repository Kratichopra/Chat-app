import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Modal from './components/Loginform';
import './App.css';

function App() {
  if (!localStorage.getItem('username')) return <Modal />;
  return (
    <ChatEngine
    height="100vh"
    projectID="7b1b6285-d86d-4db7-941f-be8586446024"
    userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;

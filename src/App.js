import './App.css';
import Authorization from './components/users/Authorization';
import ConversationsList from './components/ConversationsList';

function App() {
  return (
    <div>
      { true ? <Authorization /> : <ConversationsList /> }
    </div>
  );
}

export default App;

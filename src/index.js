import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ActionCableProvider url={API_WS_ROOT}>
        <App />
      </ActionCableProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

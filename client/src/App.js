import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.scss';
import { Chat } from './components/Chat/Chat';
import { FormMessage } from './components/Form/Form';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Chat />
        <FormMessage />
      </div>
    </Provider>
  );
}

export default App;

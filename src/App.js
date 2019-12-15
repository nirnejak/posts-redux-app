import React from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import logo from './logo.svg';
import './App.scss';

import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">
            Redux Example App
        </h3>
          <small>
            Welcome to Redux Example App
        </small>
        </header>
        <div className="container">
          <PostForm />
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;

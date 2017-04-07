import React, { Component } from 'react';
import books from './books.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Inner">
            <img src={books} className="App-logo" alt="logo" />
            <h2>Egghead Bookshelf</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

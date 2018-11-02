import React, { Component } from 'react';
import Card from './Card.js';
import Bookmark from './Bookmark.js';
import './styles/Main.scss';

export default class App extends Component {
  constructor() {
    super();
      this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <div className="Main-card">
          <h2>Main-card</h2>
        </div>
      </div>
    );
  }
}

export default App;

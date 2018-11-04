import React, { Component } from 'react';
import './App.scss';
import Card from './Card.js';
import Bookmark from './Bookmark.js';
import CardContainer from './CardContainer.js';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
        prototypeData: []
    }
    
  }

  componentDidMount() {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/arrayprototypes')
      .then(response => response.json())
      .then(prototypeData => {
        this.setState({
          prototypeData: prototypeData.arrayPrototypes
        })
      })
      .catch(error => console.log(error))
  }




  render() {
    console.log(this.state.prototypeData);
    return (
      <div className="App">
        <h1>EAT YOUR PROTES</h1>
        <CardContainer allPrototypeData={this.state.prototypeData} />
      </div>
    );
  }
}


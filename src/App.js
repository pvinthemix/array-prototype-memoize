import React, { Component } from 'react';
import './App.scss';
import CardContainer from './CardContainer.js';
import BookmarkContainer from './BookmarkContainer.js';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
        prototypeData: [],
        allBookmarkedCards: []
    }
    
  }

  componentWillMount() {
    let savedBookmarks = localStorage.getItem('allBookmarkedCards');
    savedBookmarks = JSON.parse(savedBookmarks)
    this.setState({
      allBookmarkedCards: savedBookmarks || []
    })
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

  addToBookmarkList = (card) => {
    const allBookmarkedCards = this.state.allBookmarkedCards;
    allBookmarkedCards.push(card);
    this.setState({
      allBookmarkedCards: allBookmarkedCards
    })
    localStorage.setItem('allBookmarkedCards', JSON.stringify(allBookmarkedCards))
  }


  render() {
    return (
      <div className="App">
        <h1>EAT YOUR PROTES</h1>
        <CardContainer 
          allPrototypeData={this.state.prototypeData} 
          addToBookmarkList={this.addToBookmarkList}
        />
        <BookmarkContainer
          allBookmarkedCards={this.state.allBookmarkedCards}
        />
      </div>
    );
  }
}


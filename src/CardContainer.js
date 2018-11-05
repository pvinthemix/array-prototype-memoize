import React, { Component } from 'react';
import Card from './Card.js';
import './styles/_CardContainer.scss';

export default class CardContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  nextCard = (event) => {
    if (this.state.counter > 24) {
      this.setState({
        counter: 0
      })
    } else {
      this.setState({
        counter: this.state.counter + 1  
      })
    }
  }

  previousCard = (event) => {
    if (this.state.counter === 24) {
      this.setState({
        counter: 0
      })
    } else {
      this.setState({
        counter: this.state.counter + 1  
      })
    }
  }

  render() {
    return (
      <div className="card-container">

      <Card 
        key={this.state.counter} 
        prototypeData={this.props.allPrototypeData[this.state.counter]} 
        addToBookmarkList={this.props.addToBookmarkList}
      />

      <div className="controls">
        <button onClick={this.previousCard}className="previous-button">Previous</button>
        <button onClick={this.nextCard} className="next-button">Next</button>
      </div>

      </div>

    );
  }
}
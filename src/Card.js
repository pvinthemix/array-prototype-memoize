import React, { Component } from 'react';
import './styles/_Card.scss';


export default class Card extends Component {
  constructor(props) { 
    super();
    this.state = {
      extendCard: false,
      
    }
  }


  render() {
    return (
      <div className="card">

        <div>
        {this.props.prototypeData.prototypeName}
        </div>
      </div>
    )}
  }





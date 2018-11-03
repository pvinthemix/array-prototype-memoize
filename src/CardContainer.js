import React, { Component } from 'react';
import Card from './Card.js';
import './styles/_CardContainer.scss';

export default class CardContainer extends Component {

  constructor(props){
    super(props);
  }


  render() {

    return (
      <div className="card-container">
        {
  
          this.props.allPrototypeData.map((prototypeMethod, index) => {
            return <Card key={index} prototypeData={prototypeMethod} />
  
          })

        }
      </div>

    );
  }
}
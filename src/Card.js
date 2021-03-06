import React, { Component } from 'react';
import './styles/_Card.scss';


export default class Card extends Component {
  constructor(props) { 
    super();
    this.state = {
      extendCard: false
    }
  }

  toggleExtendCard = () => {
    this.setState({
      extendCard: !this.state.extendCard,
    })
  }

  bookmarkOnClick = () => {
    this.props.addToBookmarkList(this.props.prototypeData.prototypeName)
  }


  render() {
    let prototype = ''
    let extendCard = ''
    if(this.props.prototypeData){
      prototype = this.props.prototypeData.prototypeName
    } 
    if(this.state.extendCard) {
      return (
      extendCard = (
        <div className='extend-card' onClick={this.toggleExtendCard}>
        <div className="bookmark-button-container">
          <button onClick={this.bookmarkOnClick} className='bookmark-button'>
            *Bookmark*
          </button>
        </div>
          <h2>Prototype Name: <span className="prototype-text">{ prototype }</span></h2>
            <h3>Use Case: <span className="useCase-text">{this.props.prototypeData.useCase}</span></h3>
            <h3>Method Type: <span className="typeOfMethod-text">{this.props.prototypeData.typeOfMethod}</span></h3>
            <h3># of Parameters: <span className="maxNumberOfParameters-text">{this.props.prototypeData.maxNumberOfParameters}</span></h3>
            <h3>Return Value: <span className="returnValue-text">{this.props.prototypeData.returnValue}</span></h3>
        </div>
        )
      )
    } else {
      return (
      <div onClick={this.toggleExtendCard} className="card">
        <div>
          <h2>Prototype Name: <span className="prototype-text">{ prototype }</span></h2>
          <p>(click to see additional information)</p>
        </div>
        <div>
          {extendCard}
        </div>
        
      </div>
    );
      }
    }
  }





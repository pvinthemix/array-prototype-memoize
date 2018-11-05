import React, { Component } from 'react';
import './styles/_Bookmark.scss';


export default class Bookmark extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render() {

    return (
      <div className='Bookmark'>
        <p className='bookmark-text'>{this.props.prototypeName}</p>
        <button className='delete-bookmark-button'onClick={() => this.props.removeCardfromList(this.props.prototypeName)}>x</button>
      </div>

    )
  }
}


  
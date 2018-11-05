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
        {this.props.prototypeName}
      </div>

    )
  }
}


  
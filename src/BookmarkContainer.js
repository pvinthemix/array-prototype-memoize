import React, { Component } from 'react';
import Bookmark from './Bookmark'
import './styles/_BookmarkContainer.scss';


export default class BookmarkContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div className="bookmark-container">
        {
          this.props.allBookmarkedCards.map((prototypeName) => {
            return (
              <Bookmark key={prototypeName} prototypeName={prototypeName} />
            )
          })
        }
      </div>

      );
    }
  }
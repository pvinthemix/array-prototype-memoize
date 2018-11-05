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
    if (this.props.allBookmarkedCards === []) {
      return <div></div>
    }
    return (
      <div className="bookmark-container">
      <h3 className='bookmark-container-title'>Prototypes to come back to:</h3>
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
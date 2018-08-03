import React, { Component } from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends Component {
  render() {
    const { imageLinks, title, authors } = this.props.book

    let imageThumbnail = imageLinks ? imageLinks.thumbnail : ''

    return(
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageThumbnail}")`
            }}>
          </div>
          <div className="book-shelf-changer"></div>
          <ShelfSelector
            book={this.props.book}
            changeShelf={this.props.changeShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book

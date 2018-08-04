import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { book, changeShelf, shelfName } = this.props
    const { imageLinks, title, authors } = this.props.book

    let imageThumbnail = imageLinks ? imageLinks.thumbnail : ''

    if((this.props.book.shelf !== 'currentlyReading') && (this.props.book.shelf !== 'wantToRead') && (this.props.book.shelf !== 'read')) {
      this.props.book.shelf = 'none'
    }

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
            <ShelfChanger
              book={book}
              changeShelf={changeShelf}
              shelfName={shelfName}
            />
          </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book

import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { shelfName, shelfHeading, books, changeShelf } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfHeading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books
                .filter(book => book.shelf === shelfName)
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={changeShelf}
                      shelfName={shelfName}
                    />
                  </li>
                ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

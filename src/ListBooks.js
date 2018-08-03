import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render() {
    const { books, changeShelf } = this.props
    
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfHeading="Currently Reading"
              shelfName="currentlyReading"
              books={books}
              changeShelf={changeShelf}
            />
            <BookShelf
              shelfHeading="Want to Read"
              shelfName="wantToRead"
              books={books}
              changeShelf={changeShelf}
            />
            <BookShelf
              shelfHeading="Read"
              shelfName="read"
              books={books}
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

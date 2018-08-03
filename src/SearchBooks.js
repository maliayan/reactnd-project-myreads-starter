import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    matchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.matchedBooks(query)
  }

  matchedBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then((matchedBooks) => {
        if(matchedBooks.error) {
          this.setState({ matchedBooks: [] })
        } else {
          this.setState({ matchedBooks })
        }
      })
    } else {
      this.setState({ matchedBooks: [] })
    }
  }

  render() {

    //
    // let matchedBooksList
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   matchedBooksList = books.filter((book) => match.test(book.title))
    // } else {
    //   matchedBooksList = books
    // }
    //
    // matchedBooks.sort(sortBy('title'))

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            }
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.matchedBooks.map((matchedBook) => (
                <li key={matchedBook.id}>
                  <Book
                    book={matchedBook}
                    changeShelf={this.props.changeShelf}
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

export default SearchBooks

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    matchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.listMatchedBooks(query)
  }

  listMatchedBooks = (query) => {
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
    const { changeShelf } = this.props
    const { matchedBooks } = this.state

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
            matchedBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={changeShelf}
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

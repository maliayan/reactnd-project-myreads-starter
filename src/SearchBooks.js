import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.props.updateSearchBooks(query)
  }



  render() {
    const { changeShelf, book } = this.props
    const { books } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {
              <DebounceInput
                minLength={1}
                debounceTimeout={300}
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
            books.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={changeShelf}
                    shelfName={this.props.shelfName}
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

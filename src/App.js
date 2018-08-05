import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    listBooks: [],
    searchBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ listBooks: books })
    })
  }

  componentDidUpdate() {
    if(this.props.books !== this.state) {
      BooksAPI.getAll().then((books) => {
        this.setState({ listBooks: books })
      })
    }
  }

  updateSearchBooks = (query) => {
    let searchBooksShelf
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] })
        } else {
          searchBooksShelf = books.map(book => {
            book.shelf = this.sameState(book);
            return book;
          })
          this.setState({ searchBooks: searchBooksShelf })
        }
      })
    } else {
      this.setState({ searchBooks: [] })
    }
  }

  // From maevanapcontact's solution: https://github.com/maevanapcontact/fend-my-reads/blob/master/src/App.js
  sameState = (book) => {
    let sameShelf = this.state.listBooks.filter(listBook =>
      book.id === listBook.id
    )
    return sameShelf.length ? sameShelf[0].shelf : undefined
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.componentDidUpdate()
  }

  render() {
    const NoMatch = ({ location }) => (
      <div style={{textAlign: 'center', marginTop: 120}}>
        <h3>Sorry, reader! No match this URL :(</h3>
        <p>Yes, this is just a basic 404 page.</p>
        <p>Possible actions:</p>
        <Link to='/'>Check your book shelves</Link>
        <br></br>
        <Link to='/search'>Search books</Link>
      </div>
    )
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.listBooks}
              changeShelf={this.changeShelf}
            />
          )} />
          <Route path='/search' render={() => (
            <SearchBooks
              books={this.state.searchBooks}
              changeShelf={this.changeShelf}
              updateSearchBooks={this.updateSearchBooks}
            />
          )} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp

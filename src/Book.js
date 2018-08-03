import React, { Component } from 'react'
import Select from 'react-select'
import * as BooksAPI from './BooksAPI'

const options = [
  { value: 'move', label: 'Move to...', isDisabled: true },
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
  { value: 'none', label: 'None' }
]

class Book extends Component {
  state = {
    selectedOption: this.props.book.shelf
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.value })
  }

  render() {
    const { selectedOption } = this.state
    this.props.book.shelf = this.state.selectedOption
    this.props.changeShelf(this.props.book, this.state.selectedOption)

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <Select
            className="book-shelf-changer"
            classNamePrefix="book-shelf-changer-select"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book

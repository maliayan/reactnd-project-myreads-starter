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

const customStyles = {
  container: () => ({
    fontSize: '0.8em',
    zIndex: 100
  }),
  control: () => ({
    position: 'absolute',
    opacity: 0,
    width: 50,
    height: 50,
    bottom: -10,
    right: 0,
  })
}

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
          <div className="book-shelf-changer"></div>
          <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              styles={customStyles}
              searchable={false}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book

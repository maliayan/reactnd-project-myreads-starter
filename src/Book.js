import React, { Component } from 'react'
import Select from 'react-select'

// React Select options
const options = [
  { value: 'move', label: 'Move to...', isDisabled: true },
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
  { value: 'none', label: 'None' }
]

// React Select CSS Styles
const customStyles = {
  container: () => ({
    fontSize: '0.8em',
    zIndex: 100
  }),
  control: () => ({
    position: 'absolute',
    opacity: 0,
    width: 40,
    height: 40,
    bottom: -10,
    right: 0
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
    const { book, changeShelf } = this.props
    let { shelf } = this.props.book
    const { imageLinks, title, authors } = this.props.book

    shelf = selectedOption
    changeShelf(book, selectedOption)

    return(
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageLinks.thumbnail}")`
            }}>
          </div>
          <div className="book-shelf-changer"></div>
          <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              styles={customStyles}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book

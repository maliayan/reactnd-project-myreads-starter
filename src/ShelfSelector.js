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

class ShelfSelector extends Component {
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

    shelf = selectedOption
    changeShelf(book, selectedOption)

    return(
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
      />
    )
  }
}

export default ShelfSelector

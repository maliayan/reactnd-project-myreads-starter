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
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? '#2e7d32' : state.isFocused ? '#60ac5d' : 'none',
    cursor: 'pointer'
  })
}

class ShelfChanger extends Component {
  state = {
    selectedOption: this.props.book.shelf
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.value })
    this.props.book.shelf = selectedOption.value
    this.props.changeShelf(this.props.book, selectedOption.value)
  }

  render() {
    return(
      <Select
        value={this.state.value}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
        isSearchable={false}
        defaultValue={{ value:this.props.book.shelf }}
      />
    )
  }
}

export default ShelfChanger

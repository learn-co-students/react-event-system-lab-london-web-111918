import React, { Component } from 'react'

class Keypad extends Component {

  handleKeyPress = () => console.log('Entering password...')

  render () {
    return (
      <input type='password' onKeyUp={this.props.handleKeyPress} />
    )
  }
}

export default Keypad

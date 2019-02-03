import React, { Component } from 'react'
class eyesOnMe extends Component {

    onFocus = () => console.log('Good!')
    onBlur = () => console.log('Hey! Eyes on me!')

    render () {
      return (
        <button onFocus={this.onFocus} onBlur={this.onBlur} />
      )
    }
}

export default eyesOnMe

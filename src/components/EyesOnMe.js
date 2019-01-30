// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  showFocusText = () => {
    console.log('Good!')
  }

  showBlurText = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <div>
        <button
        onFocus={this.showFocusText}
        onBlur={this.showBlurText}
        >
        </button>
      </div>
    )
  }

}

export default EyesOnMe

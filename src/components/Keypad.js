import React from 'react'
// Code Keypad Component Here
const Keypad = ({props}) => {
  return(
    <input type="password" onKeyUp={() => console.log('Entering password...')}/>
    )
}


export default Keypad


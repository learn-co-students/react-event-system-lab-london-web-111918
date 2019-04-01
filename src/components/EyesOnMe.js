// Code EyesOnMe Component Here
import React from 'react'
// Code EyesOnMe Component Here
const EyesOnMe = ({props}) => {
  return(
    <button onBlur={() => console.log('Hey! Eyes on me!')} onFocus={() => console.log('Good!')}></button>
    )
}


export default EyesOnMe


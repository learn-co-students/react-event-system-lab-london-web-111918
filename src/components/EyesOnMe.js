// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    render(){
        return(
            <div> 
                <button onBlur={() => console.log('Hey! Eyes on me!')} onFocus={() => console.log('Good!')}>Eyes on Me!</button>
            </div>
        )
    }
}

export default EyesOnMe
import React, { Component } from 'react'
import occhio from './blueeye.png'
import './occhio.css'
import starticon from './starticon.webp'

export class Occhio extends Component {
  render() {
    return (
      <>
     
      <div className="occhio">
        <a id='starticon' href='http://www.openbsd.org'><img  width="10%" src={starticon} alt='starticon' /></a>
        <img width="60%" src={occhio} alt='occhio' />
      </div>
      
      </>
    )
  }
}

export default Occhio
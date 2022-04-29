import React, { Component } from 'react'
import occhio from './eye4.jpg'
import './occhio.css'

export class Occhio extends Component {
  render() {
    return (
      <div id="occhio"><img width="60%" src={occhio} alt='occhio' />
      </div>
    )
  }
}

export default Occhio
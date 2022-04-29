import React, { Component } from 'react'
import occhio from './eye.jpg'

export class Occhio extends Component {
  render() {
    return (
      <div><img width="30%" src={occhio} alt='occhio' />
      </div>
    )
  }
}

export default Occhio
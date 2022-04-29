import React, { Component } from 'react'
import  './headers.css';

export default class Header extends Component {

  render() {
    return (
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">Contatti</a></li>
            </ul>
        </nav>
    </header>
    )
  }
}
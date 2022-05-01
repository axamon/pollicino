import React, { Component } from 'react'
import axios from 'axios';
import { Markup } from 'interweave';


export default class Perpetual extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            reply: ""
        };
    }

  componentDidMount() {
    let url = `https://ipfs.io/ipfs/${this.props.cid}`

    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({reply: res.data })
      })
  }

  render() {
    const { reply } = this.state;
    return (
        <Markup content={reply} />
    );
  }
}
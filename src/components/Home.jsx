import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
        <div className="row">
        <div className="col">
            {console.log(this.props.resources)}
        </div>
    </div>
    )
  }
}

export default Home
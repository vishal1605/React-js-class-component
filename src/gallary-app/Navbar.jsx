import React, { Component } from 'react'

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      initializeArray: []
    }
    let myGallary = localStorage.getItem('gallary');
    if (myGallary === null) {
      localStorage.setItem('gallary', JSON.stringify(this.state.initializeArray));

    }
  }

  render() {
    return (
      <div className="row navbar">
        <div className="col">
          <div className="logo text-center">
            <h1>MyGallary</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
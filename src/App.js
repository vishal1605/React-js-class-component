import React, { Component } from 'react'
import Gallary from './gallary-app/Gallary'
import ImageAdd from './gallary-app/ImageAdd'
import Navbar from './gallary-app/Navbar'

export class App extends Component {
  constructor() {
    super();
   
    this.state = {
      count: 0

    }
  }
  myNumber=(a)=>{
    this.setState({count:a})
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <ImageAdd getNumber={this.myNumber}/>
        <Gallary newNumber={this.state.count}/>
      </div>
    )
  }
}

export default App
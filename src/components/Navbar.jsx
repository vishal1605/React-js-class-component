import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      initialData:[],
      resources:[]
    }
  }

  // componentDidMount(){
  //   const data = localStorage.getItem('data');
  //   if (data===null) {
  //     localStorage.setItem('allData', JSON.stringify(this.state.initialData));
      
  //   }
  //   this.setState({resources:data});
  //   this.printData();
  // }

  // printData = ()=>{
  //   setTimeout(()=>{
  //     console.log(this.state.resources);
  //     this.props.passFunction(this.state.resources);
  //   },1500);
  // }

  
  render() {
    

    
    return (
      
      <div className="row header">
          <div className="col-12">
              <div className="logo">
              <h1 className='text-white'>Class-Component</h1>
              </div>
              <div className="menu">
                  <ul>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/blogs'}>Blogs</Link></li>
                      <li><Link to={'/register'}>Register</Link></li>
                      <li><Link to={'/login'}>Login</Link></li>
                      <li><Link to={'/about'}>About us</Link></li>
                      
                      
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}

export default Navbar
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Search from './components/Search';

export class App extends Component {
  state = {
    allData:[],
    search:[]
  }

  // getNavData = (data)=>{
  //   // console.log(data);
  //   this.setState({allData:data})
  // }
  getSearchData = (data)=>{
    // console.log(data);
    this.setState({search:data});
  }

  // componentDidMount(){
  //   console.log(this.state.allData);
  // }
  
  
  render() {
    let myName = "UserName";
    return (
      <div className="container">
        {/* <Navbar passFunction={this.getNavData} /> */}
        <Navbar />
        <Search searchFunction = {this.getSearchData}/>
        <Routes>
        <Route exact path='/' element={<Home resources={this.state.search}/>}/>
        <Route exact path='/blogs' element={<Blogs />}/>
        <Route exact path='/register' element={<Register username={myName} email="Email" password="Password"/>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/about' element={<About />}/>

        </Routes>

      </div>
    )
  }
}

export default App
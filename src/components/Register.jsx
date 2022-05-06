import React, { Component } from 'react'

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: ''
    };
  }

  handleName=(e)=>{
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value});
  }
  
  render() {
    const {email, password} = this.props; //getting props from App.js
    return (
      <div className="row register mt-2">
        <div className="col-sm-7 col-md-5 col-lg-5 col-9 m-auto pb-2">
          <h1 className='text-center'>Register</h1>
          <form >
            <div className="mb-3">
              <label className="form-label">{this.props.username}</label>
              <input type="text" className="form-control" name="userName"
              onChange={this.handleName} value={this.state.userName} required />

            </div>
            <div className="mb-3">
              <label className="form-label">{email}</label>
              <input type="email" className="form-control" name="email" required />            


            </div>
            <div className="mb-3">
              <label className="form-label">{password}</label>
              <input type="password" className="form-control" name="password"
                required />
            </div>

            <button type="submit" className='btn btn-primary'>Register</button>
          </form>

        </div>
      </div>
    )
  }
}

export default Register
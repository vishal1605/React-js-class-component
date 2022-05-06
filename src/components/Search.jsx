import React, { Component } from 'react'

export class Search extends Component {

    state={
        myData:[]

    }
    componentDidMount(){
        const data = localStorage.getItem('data');
        this.setState({myData:JSON.parse(data)});
    }
    handleSearch = (e)=>{
        let result = [];
       if (e.target.value==='') {

       } else {
        result = this.state.myData.filter(obj=>{
            return obj.userName.toLowerCase().includes(e.target.value.toLowerCase());
        });
           
       }
        this.props.searchFunction(result);
    }

  render() {
    return (
      <div className="row search-bar mt-2 bg-dark">
          <div className="col-5 m-auto py-1">
              <input type="text" name='search' onChange={this.handleSearch} />
          </div>
      </div>
    )
  }
}

export default Search
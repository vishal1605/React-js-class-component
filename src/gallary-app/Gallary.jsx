import React, { Component } from 'react'

export class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallaryImages: [],
      loader: false


    }
  }

  getData = () => {
    let data = JSON.parse(localStorage.getItem('gallary'));
    this.setState({ gallaryImages: [...data] })
  }
  componentDidMount() {

    this.getData();

  }


  componentDidUpdate(preProps, preState) {
    if (preProps.newNumber !== this.props.newNumber) {

      this.setState({loader:false});
      this.getData();
    }
    console.log("Updating");



  }

  deleteOperation = (e) => {
    const object = this.state.gallaryImages.find(obj => {
      return obj.id === Number(e.currentTarget.value);
    });

    const index = this.state.gallaryImages.indexOf(object);
    this.state.gallaryImages.splice(index, 1);
    localStorage.setItem('gallary', JSON.stringify(this.state.gallaryImages));
    setTimeout(() => {
      this.getData();
    }, 300);

  }




  render() {
    // console.log(this.props.newNumber);
    return (
      <div className="row my-3 gallary">
        <div className="col all-images">
          {this.state.loader ? null :
            <div className="d-flex justify-content-center loader">
              <h4>please wait...</h4>
              <div className="spinner-border spinner" role="status">
                <span className="visually-hidden">Loading...</span>

              </div>
            </div>
          }
          {
            this.state.gallaryImages.map(data => {
              const { id, imageName, imageSize, className } = data;
              return (<div key={id} className={`photo-card ${className}`}>
                <img src={"/images/" + imageName}
                  style={this.state.loader ? {} : { display: 'none' }}
                  onLoad={() => this.setState({ loader: true })}
                  alt={id} />
                <button id="delete-icon"
                style={this.state.loader ? {} : { display: 'none' }}
                 value={id} onClick={this.deleteOperation}><i className="fa-solid fa-trash-can"></i></button>
              </div>)
            })
          }


        </div>
      </div>

    )
  }
}

export default Gallary
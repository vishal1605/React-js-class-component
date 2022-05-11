import React, { Component } from 'react'

export class ImageAdd extends Component {
    constructor() {
        super();

        this.state = {
            fileInput: {
                id: 0,
                imageName: '',
                imageSize: 0,
                className: ''
            },
            buttonOperation: "",
            dimension: {
                width: 0,
                height: 0
            },
            gallaryImages: [],
            count: 0

        }
    }



    getInputValue = (e) => {
        let img = new Image();
        const inputValue = e.target;
        const fileName = inputValue.files[0].name;
        const fileType = inputValue.files[0].type;
        const fileSize = inputValue.files[0].size;
        
        img.src = window.URL.createObjectURL(e.target.files[0]);
        img.onload = () => {
            let height = img.height;
            let width = img.width;
            this.setState({
                dimension: {
                    width: width, height: height
                }
            });
        }


        const type = fileType.split('/')[1];
        if (fileName && (type === 'png' || type === 'jpeg')) {
            this.setState({ fileInput: { imageName: fileName, imageSize: fileSize } });
            // increment();

            this.setState({ buttonOperation: "" });

        } else {

            this.setState({
                fileInput: {
                    imageName: 'Wrong type file',
                    imageSize: 0,
                    className: ''

                }
            });
            this.setState({ buttonOperation: "disable" });

        }
    }
    buttonClick = (e) => {
        if (this.state.dimension.height > this.state.dimension.width) {
            // console.log("Tall");
            this.setState(pre => ({ fileInput: { ...pre.fileInput, className: 'tall' } }));

        } else {
            // console.log("wide");

            this.setState(pre => ({ fileInput: { ...pre.fileInput, className: '' } }));

        }
    }
    formSubmit = (e) => {
        e.preventDefault();

        if (this.state.fileInput.imageSize === 0) {
            this.setState(pre => ({ fileInput: { ...pre.fileInput, imageName: 'Wrong option' } }));


        } else {
            let randomId = 0
            let condition = true;

            while (condition) {
                randomId = Math.floor(Math.random() * 100) + 1;
                

                condition = this.state.gallaryImages.some(obj => {
                    return obj.id === randomId;
                })

            }
            this.setState(pre => ({ fileInput: { ...pre.fileInput, id: randomId } }));
            this.setState({ count: this.state.count + 1 });
            setTimeout(() => {
                const data = JSON.parse(localStorage.getItem('gallary'));
                if (data === null) {
                    let arr = [];
                    localStorage.setItem('gallary', JSON.stringify(arr));
                    this.setState((pre) => {
                        return { gallaryImages: [...JSON.parse(localStorage.getItem('gallary')), this.state.fileInput] }
                    });
                } else {
                    this.setState((pre) => {
                        return { gallaryImages: [...JSON.parse(localStorage.getItem('gallary')), this.state.fileInput] }
                    });
                }


                setTimeout(() => {
                    localStorage.setItem('gallary', JSON.stringify(this.state.gallaryImages));
                    this.increaseCount(this.state.count)

                }, 1000);
                this.setState({ fileInput: { className: '', imageSize: 0, imageName: '', id: 0 } });
                this.setState({ dimension: { width: 0, height: 0 } });

            }, 500);



        }

    }

    increaseCount = (value) => {
        this.props.getNumber(value);
    }

    render() {
        return (
            <div className="row pt-3 image-add">
                <div className="col-4 m-auto">

                    <form onSubmit={this.formSubmit} className="text-center">
                        <h5 className="imageName" id="imageName">{this.state.fileInput.imageName && ` "${this.state.fileInput.imageName}" selected`}</h5>

                        <input type="file" hidden name="image" id="image-section" onChange={this.getInputValue} />
                        <label htmlFor="image-section"><i className="fa-solid fa-plus"></i></label><br />
                        <button type="submit" className={`btn btn-success mt-2 ${this.state.buttonOperation}`} onClick={this.buttonClick}>
                            upload
                        </button>

                    </form>


                </div>
            </div>
        )
    }
}

export default ImageAdd
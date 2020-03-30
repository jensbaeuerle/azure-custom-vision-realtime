import React, {Component} from 'react';
import axios from 'axios';

import {Table, Button, Container, Image} from 'react-bootstrap'




class CustomVision extends Component {

    state = {
        file:null,
        file_url: null,
        pred: []
    }
    
handleFile(e){
    // console.log(e.target.files)
    // console.log(e.target.files[0])

    let file = e.target.files[0]

    this.setState({file: file})
    this.setState({file_url: URL.createObjectURL(e.target.files[0])})
}

handleUpload(e){



let file = this.state.file

let formdata = new FormData()

formdata.append('image',file)
console.log("Hallo")



axios({
    url: 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/74544207-bf9b-44fc-be36-3de9330e276f/detect/iterations/Iteration1/image',
    method: 'POST',
    headers:{
        'Content-Type': 'multipart/form-data',
        'Prediction-Key': process.env.REACT_APP_PREDICTION_API
    },
    data: formdata
}).then((res)=>{


this.setState({pred: res.data.predictions})
console.log(res.data.predictions)



})
}


    render(){


        console.log(this.state.pred)
        
        const probability = []
        const tagName = []
      
        // for (const [index, value] of elements.entries()) {
        //   items.push(<li key={index}>{value}</li>)
        // }

        for (var i=0; i < this.state.pred.length; i++){
        probability.push(<li>{this.state.pred[i].probability}</li>)
        tagName.push(<li>{this.state.pred[i].tagName}</li>)
        }
      

        return (
          <Container>

            <div>

            <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
      onChange={(e)=>this.handleFile(e)}
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      
    </label>
  </div>
</div>
<p></p>
<Image id = "image-preview" src={this.state.file_url} rounded />

<p></p>

<Button variant="outline-primary" onClick={(e)=>this.handleUpload(e)}>Prediction</Button>


            <p></p>
            <p></p>











            <Table striped bordered hover>
            <thead>
            <tr>
            <th>#</th>
            <th>Tag Name</th>
            <th>Probability</th>
            </tr>
            </thead>

            <tbody>

            {this.state.pred.map((todo,index) => (

            <tr>
            <td>{index}</td>
            <td>{todo.tagName}</td>
            <td>{todo.probability}</td>
            </tr>

            ))}

            </tbody>
            </Table>


            </div>
            <p>{JSON.stringify(this.state.pred)}</p>
          </Container>

            
        );   
    }



}

export default CustomVision;

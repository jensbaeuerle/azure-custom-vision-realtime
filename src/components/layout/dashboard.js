import React, {Component} from 'react';
import axios from 'axios';



class Dashboard extends Component {

    state = {
        file:null,
        file_url: null,
        pred: []
    }
 
    // handleImageChange = event => {
    //     this.setState({
    //       image: event.target.files[0]
    //     })
    //   };

    // handleSubmit = event => {
    // event.preventDefault();

    // // 
    // //Upload url
    // //

    // // const url = 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/74544207-bf9b-44fc-be36-3de9330e276f/detect/iterations/Iteration1/url'
    // // const data = 'https://mldatasets10.blob.core.windows.net/dataset/Custom%20Vision/Object%20Detection/Brand%20Detection/Nike/Download%20(7).jfif'
    
    // // // send a POST request
    // // axios({
    // //   method: 'post',
    // //   url: url,
    // //   data: {
    // //     Url: data
    // //   },
    // //   headers: {
        // 'Content-Type': 'application/json',
        // 'Prediction-Key': 'd8c83231606649a5b7e157f80ac0c474'
    // //   }
    // // })
    // // // .then(res => this.setState({todos: JSON.stringify(res.data)}))
    // // // .then(res => console.log(typeof(JSON.stringify(res.data))))
    // // .then(res => console.log(res.data))
    

    // // 
    // //Upload image
    // //
    // const url = 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/74544207-bf9b-44fc-be36-3de9330e276f/detect/iterations/Iteration1/image'


    // }

    
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

axios({
    url: 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/74544207-bf9b-44fc-be36-3de9330e276f/detect/iterations/Iteration1/image',
    method: 'POST',
    headers:{
        'Content-Type': 'multipart/form-data',
        'Prediction-Key': 'd8c83231606649a5b7e157f80ac0c474'
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
        <div>

            <form>

            <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
            <p>
            <img src={this.state.file_url}/>
            </p>
            
            <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>

            </form>

            
            {probability.map((value) => {
                return <p>{value}</p>
            })}

            {tagName.map((value) => {
                return <p>{value}</p>
            })}
            

            
            {/* {probability}
            {tagName} */}
        
        </div>

        );   
    }



}

export default Dashboard;

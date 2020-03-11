import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



import axios from 'axios';
import { AutoInit } from 'materialize-css';

function CustomVision(){
    const [state, setState] = useState(
    {
        file:null,
        file_url: null,
        pred: [],
    },
);

    const [pred, setPred] = useState([])
    const [img, setImg] = useState({file:null})
    const [imgUrl, setImgUrl] = useState({file_url: null})
    const [formData, setformData] = useState()


useEffect(() => {
  axios({
      url: 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/74544207-bf9b-44fc-be36-3de9330e276f/detect/iterations/Iteration1/image',
      method: 'POST',
      headers:{
          'Content-Type': 'multipart/form-data',
          'Prediction-Key': process.env.REACT_APP_PREDICTION_API
          // 'Prediction-Key': process.env.REACT_APP_PREDICTION_API
          
      },
      data: formData
  }).then((res)=>{
  
  
  setPred({pred: res.data.predictions})
  console.log(res.data.predictions)
  
  })
}, [formData])

const handleFile = e => {
    // console.log(e.target.files)
    console.log(e.target.files[0])
    let file = e.target.files[0]

    setImg({

        file: file,
    
    })
    setImgUrl({

      file_url: URL.createObjectURL(e.target.files[0])

  })
}

const handleUpload = () => {

    let file = img.file
    
    let formdata = new FormData()
    
    formdata.append('image',file)

    console.log(formData)

    setformData(formdata)

    }
    
const gridLayout = useStylesGrid();
const imgCard = useStylesImgCard();
const imgUpload = useStylesImgUpload();
const PredButton = useStylesPredButton();


return(
    <React.Fragment>


<p>{JSON.stringify(pred.pred)}</p>

<div className={gridLayout.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
            {/* Platzhalter */}
        </Grid>
        <Grid item xs={4}>
        
            <Card className={imgCard.root}>
                
                    {/* <CardMedia
                        className={imgCard.media}
                        image={state.file_url}
                        title="uploded Image"
                        /> */}


            <img src={imgUrl.file_url} className={imgUpload.img} /> 
                        
                       
            </Card>
        </Grid>
        <Grid item xs={4}>
            {/* Platzhalter */}
        </Grid>
      </Grid>
</div>
















    <CssBaseline />
    <AppBar position="fixed" color="primary" className={imgUpload.appBar}>
      <Toolbar>

      <input
        accept="image/*"
        className={imgUpload.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={e=>handleFile(e)}
        />
    <label htmlFor="raised-button-file">
    <Fab color="secondary" aria-label="add" component="span" className={imgUpload.fabButton}>
        <AddIcon />
    </Fab>
    </label> 

      </Toolbar>
    </AppBar>

  
    <div>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={PredButton.button}
        endIcon={<SendIcon/>}
        onClick={handleUpload}
      >
        Predict
      </Button>
    </div>
                      
    </React.Fragment>
)
}

export default CustomVision;


//
//Section for CSS Styling
//
const useStylesGrid = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop:50,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const useStylesImgCard = makeStyles({
    root: {
      maxWidth: 700,
      height: 'auto',
    },
    media: {
      height: 140,
    
    },
  });

const useStylesImgUpload = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    img: {
      width: '100%',
      height: '100%',
    }
  }));

  const useStylesPredButton = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
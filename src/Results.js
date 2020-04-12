import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



export default class Results extends React.Component {
    render(){
        return (
            <div>
            <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Results
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We analyzed over <span style={{fontWeight:'bold'}}>100,000,000</span> seed phrases so far.  19,632,106 or 1 in 5 mnemonic phrases were detected as <span style={{color:'red'}}>insecure </span> 
               by our AI. We plan to analyze 1 BILLION seed phrases and make this data publicly available 
              to companies who plan to use it for building products or services benefiting the society. 
            </Typography>
            <Divider style={{width:'100%'}} />
            <br />
            <h3>Analysis files</h3>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        0 - 999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1MLMCAlbM8YlX8GL8VD49HoLAmVuK2cUK/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>
      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>
                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        1M - 1,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1nsJCc6f-yIs-uW8Nxavx47x7CBz-X2AH/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>
      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>
                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        2M - 2,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1e28-bXPlCrp6CNNBxiaeESk2LzrRyJSa/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

        
                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        3M - 3,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/13VEqnBLvVBQVhFni7Jy5uJeW-15wcwwU/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        4M - 4,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1o_9KuL63XgPo-MexnIBs1eerf9fbNrye/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        5M - 5,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1SqtjdUj704tjzXE_P1ywjTgHZkiFx81J/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        6M - 6,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1c33bGDUx9SorxDqa9B9idFuypP58lwYa/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        7M - 7,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/11ZPDYdoipEljEWj3iKc8gkeVkjLbaAy9/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>


                <Grid item xs={4}>
                    <FileCopyIcon fontSize="large"/>
                    <Typography variant="subtitle2" gutterBottom>
        8M - 8,999,999
      </Typography>
      <a href="https://drive.google.com/file/d/1pNrDUXGUvMS7gRulZP96-jSzeIMFFT7Q/view" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none'}}>

      <Button variant="outlined" color="secondary">
        Download
      </Button>
      </a>
                </Grid>

                
            </Grid>
            </Container>
                </div>
        )
    }
}
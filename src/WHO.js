import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Smart from './Smart Contract/Smart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LanguageIcon from '@material-ui/icons/Language';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class WHOpage extends React.Component {
    state = {
      id:'',
      website:'',
      realId:"0",
      companyName:'',
      attempted:false,
    }
    

    GetInfo = async () => {
      try{
        let info = await Smart.methods.VerifiedAddresses(this.state.id).call();
        this.setState({website:info[1],realId:info[0],companyName:info[2],attempted:true});

      } catch(err){
        console.log(err.message);
      }

    }


    render(){


    
    

          
        return (


            <div>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <h3>Verify companies approved by MetaSafe to use our services </h3>
                            <p>Companies using our services will have a badge with an ID which you can use to verify their identity.</p>
                            <TextField id="standard-basic" label="ID example: 1050"   value={this.state.id} onChange={(event) => this.setState({id:event.target.value.trim()})} />

                            </Grid>
        <Grid item xs={12}>
        <Button
        variant="contained"
        color="secondary"
        onClick={this.GetInfo}
        startIcon={<SearchIcon />}
      >

        Search Now
      </Button>
        </Grid>

                            <Divider style={{width:'100%',marginBottom:'15px'}} />
                            {this.state.attempted === true ? (                          <Grid container spacing={3}>    <Grid item xs={4}>
                            <Paper elevation={3} >
                            <Card  variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Status
        </Typography>
        <Typography variant="h5" component="h2">
          {this.state.realId !== "0" ?         <CheckCircleIcon fontSize="large" htmlColor="green" /> : <HighlightOffIcon fontSize="large" htmlColor="red" />}
        </Typography>
        <Typography  variant="body2" component="p">
        {this.state.realId !== "0" ?         <span style={{color:'green'}}>Verified</span> : <span style={{color:'red'}}>Not Verified</span>    }
        </Typography>
      </CardContent>
    </Card>
                            </Paper>
                              </Grid>
                              <Grid item xs={4}>
                            <Paper elevation={3} >
                            <Card  variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Company
        </Typography>
        <Typography variant="h5" component="h2">
        {this.state.realId !== "0" ?          <ApartmentIcon fontSize="large" htmlColor="blue" />  :  <HighlightOffIcon fontSize="large" htmlColor="red" /> }
        </Typography>
        <Typography variant="body2" component="p">
        {this.state.realId !== "0" ?             <span style={{color:'blue'}}>{this.state.companyName}</span>  :         <span style={{color:'red'}}>Not Verified</span> }

        </Typography>
      </CardContent>
    </Card>
                            </Paper>
                              </Grid>
                              <Grid item xs={4}>
                            <Paper elevation={3} >
                            <Card  variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Website
        </Typography>
        <Typography variant="h5" component="h2">
        {this.state.realId !== "0" ?             <LanguageIcon fontSize="large" /> :   <HighlightOffIcon fontSize="large" htmlColor="red" /> }

        </Typography>

        <Typography variant="body2" component="p">
        {this.state.realId !== "0" ?              <span style={{color:'black'}}>{this.state.website}</span>  :         <span style={{color:'red'}}>Not Verified</span>}
        </Typography>
      </CardContent>
    </Card>
                            </Paper>
                              </Grid>  </Grid>
)  : <span /> }
                         

                            </Grid>

            </div>

        )
    }
}
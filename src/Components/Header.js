
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Laptop from '../icons/laptop_image.png';
import Clientside from '../icons/client_side.png';
import Video from '../icons/video.mp4';
import SpeedIcon from '@material-ui/icons/Speed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import EvStationIcon from '@material-ui/icons/EvStation';
import Blockchain from '../icons/moreCrypto.png';
import Paper from '@material-ui/core/Paper';
import SecurityIcon from '@material-ui/icons/Security';
import LED from '../icons/led.jpeg';


export default class Header extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

    
    render(){


    
    

          
        return (
            <div>
                <AppBar position="relative" style={{backgroundColor:'transparent', paddingLeft:'5%'}}>
        <Toolbar style={{flexWrap:'wrap',paddingTop:'8px'}}>
          <Typography variant="h6"  style={{border:'1px solid white'}}>
           <a href="/" style={{textDecoration:'none',color:'inherit'}}> MetaSafe </a>
          </Typography>
          <nav>
            <a href="/try" style={{textDecoration:'none',color:'inherit'}}>
          <Button color="inherit">
          Try Now
          </Button>
          </a>
          <a href="/recover" style={{textDecoration:'none',color:'inherit'}}>
          <Button color="inherit">
          Seed Phrase Recovery
          </Button>
          </a>
          <a href="/documentation" style={{textDecoration:'none',color:'inherit'}}>
          <Button color="inherit">
          Documentation
          </Button>
          </a>
          </nav>
          {/* <Typography variant="h6" noWrap  >
          Features
          </Typography>
          <Typography variant="h6" noWrap  >
          FAQ
          </Typography>
          <Typography variant="h6" noWrap  >
          Documentation
          </Typography> */}
        </Toolbar>
      </AppBar>
      <br /> <br /> <br /> <br />
      <Container maxWidth="md" style={{zIndex:'1',position:'relative'}}>
            <Typography component="h1" variant="h2" align="center" style={{color:'white'}} gutterBottom>
              Seed Phrase Recovery
            </Typography>
            <Typography variant="h5" align="center" style={{color:'white'}} paragraph>
              A service for those who forgot their seed phrase
            </Typography>
            </Container>
            <div style={{width:'100%',position:'absolute',height:'100%',backgroundImage:`url(${LED})`,bottom:'100px',transform:'skewY(-5deg)'}}>

            <div style={{background:'linear-gradient(150deg, #e33371 15%,#dc004e 70%, #9a0036 94%)',height:'100%',opacity:'0.85'}}>
           
            </div>
               
            </div>
            <Grid item xs={12} md={12}>
            <div>
                <img src={Laptop} style={{maxWidth:'1100px',backgroundSize:'100% 100%',height:'70%',width:'100%',textAlign:'center', position:'relative',zIndex:'100'}} />
             </div>
             </Grid>


                                     <Container maxWidth="md" style={{zInde:'1',position:'relative'}}>
             <br />
             <Grid  container
  direction="row"
  justify="center"
  alignItems="center"  >
             <Grid item xs={12} md={6}>
             <Typography variant="h6" color="textPrimary" gutterBottom>
        Multiple Cryptocurrencies Supported
      </Typography>          
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Recover your seed phrase for most cryptocurrencies and unlock 
        your lost funds. 
      </Typography> 
      <a href="/who" style={{textDecoration:'none',color:'inherit'}}>

      <Button variant="contained" color="secondary">
      Try Now
      </Button>
      <br /> <br />
      </a> 
             </Grid>

             <Grid item xs={12} md={6}>
            <img src={Blockchain} width="400px" style={{boxShadow:'0 20px 60px -10px rgba(0,0,0,.2)',borderRadius:'11px'}} />
             </Grid>
             </Grid>
             <br /> <br />
             </Container>

            <div style={{zInde:'1',position:'relative',backgroundColor:'#F6F9FC'}}>
            <br /> <br />
            <Container maxWidth="md" style={{zInde:'1',position:'relative'}}>
             <Grid  container
  direction="row"
  justify="center"
  alignItems="center"  >
    <Grid item xs={12} md={6}>
            {/* <img src={Clientside} width="400px" style={{boxShadow:'0 20px 60px -10px rgba(0,0,0,.2)',borderRadius:'11px'}} /> */}
            <video src={Video} width="400px" playsinline autoPlay loop muted style={{borderRadius:'11px',boxShadow:'0 20px 60px -10px rgba(0,0,0,.2)'}} />
             </Grid>
             <Grid item xs={12} md={6}>
             <Typography variant="h6" color="textPrimary" gutterBottom>
        Confidential
      </Typography>     
   
      <Typography variant="body1" color="textSecondary" gutterBottom>
        We put your safety in first place. Our tool can be used offline without 
        an internet connection, far away from hackers. 
      </Typography>  
        
      <a href="/try" style={{textDecoration:'none',color:'inherit'}}>

      <Button variant="contained" color="secondary">
      Try Now
      </Button>
      </a>
      <br />
             </Grid>

             </Grid>
             <br /> <br />
             </Container>
            </div>
             
             <Container maxWidth="md" style={{zInde:'1',position:'relative'}}>
             <br />
             <Grid  container
  direction="row"
  justify="center"
  alignItems="center"  >
             <Grid item xs={12} md={6}>
             <Typography variant="h6" color="textPrimary" gutterBottom>
        Analysis 
      </Typography>          
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Our tool can show you in depth analysis such as the last seed phrase 
        attempt before finding your funds. This may give you an idea how 
        close you are to finding your seed phrase. 
      </Typography>  
      <a href="/analysis" style={{textDecoration:'none',color:'inherit'}}>

      <Button variant="contained" color="secondary">
      Analyze
      </Button>
      </a>
      <br /> <br />
             </Grid>

             <Grid item xs={12} md={6}>
            <img src={Clientside} width="400px" style={{boxShadow:'0 20px 60px -10px rgba(0,0,0,.2)',borderRadius:'11px'}} />
             </Grid>
             </Grid>
             <br /> <br />
             </Container>

            <div style={{zInde:'1',position:'relative',backgroundColor:'#f50057',color:'white'}}>
            <br /> <br />
            <Container maxWidth="lg">
            <Grid container>
            <Grid xs={12} style={{backgroundColor:'#f50057',color:'white'}} >
                    <h1>Features</h1>
                  </Grid>
                  <Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                  <SpeedIcon fontSize="large" />
                    <h3>FAST</h3>
                    <p>Up to 100 seed phrases per second</p>
                    <br />
                  </Grid>
                  <Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                  <ViewModuleIcon fontSize="large" />
                    <h3>Real Time Blockchain</h3>
                    <p>Data is checked at the latest block of the blockchain.</p>
                    <br />

                  </Grid><Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                    <EvStationIcon fontSize="large" />
                    <h3>Powerful</h3>
                    <p>Check up to 4,194,304 seed phrase combinations in one go 
                    </p>
                  </Grid>
            </Grid>
            <br /> <br />

            </Container>

            

            </div>

             <div style={{zIndex:'11',position:'relative'}}>
            <br /> <br />
            <Container maxWidth="md">
            <Paper elevation={3} style={{height:'210px'}}>
            <Typography variant="h6" gutterBottom style={{paddingTop:'20px'}}>
        Rediscover Your Seed Phrase Now!
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom style={{paddingLeft:'50px',paddingRight:'50px'}} > 
        Seed phrases are very practical to use. Whether you are a dAPP user, an exchange, or 
        agency, we can help you to recover your seed phrase. 
      </Typography>  
      <a href="/try" style={{textDecoration:'none',color:'inherit'}}>

      <Button color="primary" variant="contained">
          Try Now
          </Button>
          </a>
            </Paper>
            </Container>
            </div>


                <div style={{zIndex:'10',height:'80px',paddingTop:'120px',position:'relative',transform:'skewY(-5deg)',backgroundColor:'#f6f9fc'}}>

                        </div>
            <footer>

            <Grid container style={{zIndex:'11', position:'relative'}}>
            <Grid item xs={4}>
            <span style={{color:'grey'}}>© 2020 MetaSafe</span>

            </Grid>

            <Grid item xs={4}>
            <a href="/terms" style={{color:'grey',textDecoration:'none'}}>
            Terms and Conditions
            </a>
            </Grid>
            </Grid>

            </footer>
            </div>
        )
    }
}

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
import RepeatIcon from '@material-ui/icons/Repeat';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import Blockchain from '../icons/blockchain2.png';
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
              Secure Seed Phrases
            </Typography>
            <Typography variant="h5" align="center" style={{color:'white'}} paragraph>
              We analyzed over <span style={{fontWeight:'bold'}}>100,000,000</span> seed phrases and  19,632,106 or 1 in 5 were detected as <span style={{color:'black'}}>insecure </span> 
               by our AI.
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
        Analyzer 
      </Typography>          
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Our client-side analyzer is a free tool that does not store 
        your data and lets you know how strong your mnemonic is. 
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
        Security
      </Typography>     
   
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Whether you are a normal user or company, by implementing MetaSafe you may exponentially 
        improve the security of the seed phrase and therefore keep your funds safer.
      </Typography>  
        
      <a href="/try" style={{textDecoration:'none',color:'inherit'}}>
      <Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="secondary"
        // onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate Seed Phrase  
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
        Compliant 
      </Typography>          
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Every company that uses MetaSafe protocol will have their compliance 
        stored on the blockchain and receive a badge with their ID.
      </Typography> 
      <a href="/who" style={{textDecoration:'none',color:'inherit'}}>

      <Button variant="contained" color="secondary">
      Search Compliance
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

            <div style={{zInde:'1',position:'relative',backgroundColor:'#f50057',color:'white'}}>
            <br /> <br />
            <Container maxWidth="lg">
            <Grid container>
            <Grid xs={12} style={{backgroundColor:'#f50057',color:'white'}} >
                    <h1>Features</h1>
                  </Grid>
                  <Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                  <RepeatIcon fontSize="large" />
                    <h3>No Word Repetition</h3>
                    <p>Seed phrases with repeating words are exponentially easier to brute-force.</p>
                    <br />
                  </Grid>
                  <Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                    <SortByAlphaIcon fontSize="large" />
                    <h3>No 3+ Consecutive Letters</h3>
                    <p>Mnemonics with words that start with the same letter make it easier for hackers.</p>
                    <br />

                  </Grid><Grid xs={12} md={4} style={{backgroundColor:'#f50057',color:'white'}} >
                    <LowPriorityIcon fontSize="large" />
                    <h3>No 4+ Words Coming From First 10% of All Seed Words</h3>
                    <p>There are 2048 words from which seed phrase is generated. The first 10% are the most 
                      brute-forced.
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
        Level Up Your Seed Phrase Now!
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom style={{paddingLeft:'50px',paddingRight:'50px'}} > 
        Seed phrases are very practical to use. Whether you are a dAPP user, an exchange, a wallet generator service or 
        agency, we can help you to generate safer seed phrases. 
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
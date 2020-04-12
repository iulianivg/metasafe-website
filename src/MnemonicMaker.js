import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SecurityIcon from '@material-ui/icons/Security';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import BusinessIcon from '@material-ui/icons/Business';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RepeatIcon from '@material-ui/icons/Repeat';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {generateMnemonic12, generateMnemonic24} from 'metasafe-eth';

var ethers = require("ethers");
const words240 = require("./240words");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default class MnemonicMaker extends React.Component {
    state = {
        goodMnemonic:'',
        consecutiveLettersDialog:false,
    }

        
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    
    handleCloseconsecutiveLetters = async() => {
      this.setState({consecutiveLettersDialog:false})
    }


    generateMnemonic = async() => {
        try{
          let mnemonic = await generateMnemonic12();
          this.setState({goodMnemonic:mnemonic.join(" ")});


    
        }catch(err){
          console.log(err.message);
        }
      }
      generateMnemonic24 = async() => {
        try{
          let mnemonic = await generateMnemonic24();
          this.setState({goodMnemonic:mnemonic.join(" ")});

    
        }catch(err){
          console.log(err.message);
        }
      }

    render(){


    
    

          
      return (
          <div style={{width:'100%'}}>
          <Grid container spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} md={6}>
                      <a href="/results" style={{textDecoration:'none'}}>
                    <Alert variant="filled" severity="info">
        We used AI to  analyze over 100 MILLION user seed phrases and 19.6% are constantly coming out as vulnerable based on our criteria. 
                 </Alert>
                 </a>
                        <h4>
                            Don't lose your funds. Get your <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> mnemonic now.
                        </h4>
                    </Grid>
                    <Divider style={{width:'100%'}}/>
              <br />
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

                    <Grid item xs = {3} />
                    {/* <Grid item xs = {6} >
                    <Button
        style={{width:'100%',marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="default"
        onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
      {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />}
                    </Grid> */}
        
        <Divider style={{width:'100%'}}/>
        <Grid item md={2} lg={2} />
        <Grid item xs={12} md={4} lg={4} >
        <Card>
                <CardHeader
                  title="Personal Mnemonic"
                  subheader="A safe ethereum mnemonic for personal use"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<AccountCircleIcon color="secondary" />}
                />
                <CardContent>
                  <div >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      FREE
                    </Typography>
                  </div>
                  <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Ideal for using dAPPS" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Can be used for cold storage*" secondary="Recommended as long as cold storage measures are applied and is not used on a daily basis" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Exponentially lowers the chances of brute-force" />
        </ListItem>
        </List>
        
                </CardContent>
                <CardActions>
                <Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="secondary"
        // onClick={this.generateMnemonic}
        onClick={() => this.setState({consecutiveLettersDialog:true})}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
                </CardActions>
                <a style={{color:'grey',textDecoration:'none'}} href="/terms">Terms & Conditions apply</a> 
                {/* {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />} */}

              </Card>
        </Grid>

         <Grid item xs={12} md={4} lg={4} >
        <Card>
                <CardHeader
                  title="Enterprise Mnemonic"
                  className="#"
                  subheader="Safe ethereum mnemonics for companies"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<BusinessIcon color="secondary" />}
                />
                <CardContent>
                  <div >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      CONTACT US
                    </Typography>
                  </div>
                  <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Ideal for companies that need many safe accounts for their users such as exchanges" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Can be used for cold storage*" secondary="Recommended as long as cold storage measures are applied and is not used on a daily basis" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Exponentially lowers the chances of brute-force" />
        </ListItem>
        </List>

         <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="MetaSafe Verified badge (blockchain-based)" secondary={<img width="25%" alt="MetaSafe Verified Badge" src={require('./icons/Badge.png')} />}>
          </ListItemText>
        </ListItem>
        </List>
        
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outline" color="primary">
                  <a href="mailto:ethmetasafe@gmail.com?Subject=Enterprise%20Mnemonic" target="_top">CONTACT US</a>
                  </Button>
                </CardActions>
              </Card>
        </Grid>
        <Divider style={{width:'100%'}}/>
        <Grid item xs={2} />
        <Grid item xs={12} md={8}>
        <h2>FAQ</h2>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >What is a brute-force attack?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <blockquote>"In cryptography, a brute-force attack consists of an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly."
              </blockquote>
              <cite><a style={{color:'grey'}} href="https://en.wikipedia.org/wiki/Brute-force_attack" rel="noopener noreferrer" target="_blank">Wikipedia.org</a></cite>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >What are the chances of a mnemonic brute-force attack?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Mathematically speaking mnemonics are very safe to brute-force attacks as it would take more time than the age of universe for a computer
            to find the exact right combination. Unfortunately this calculation does not assume whether the hacker starts brute-forcing by not
            starting from the beggining of all mnemonics and instead using a predeterministic input. 
            For example, the mnemonic <blockquote>add wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth</blockquote>
            is much easier to bruteforce compared to more complex mnemonics. Our service takes into consideration different deterministic parameters
            of a mnemonic such as the <span style={{textDecoration:'underline'}}> number of repetitions</span>, <span style={{textDecoration:'underline'}}>the number of words coming from the first 10% </span> of all mnemonic words (the most bruteforced words),
            <span style={{textDecoration:'underline'}}>number of words starting with a consencutive letter</span> and produces a secure mnemonic <span style={{fontWeight:'bold'}}>exponentially</span> more difficult to brute-force.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >Why should I use MetaSafe mnemonics?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          It doesn't matter if you store your funds into a very secure wallet because if a hacker guesses your mnemonic they will be 
            able to steal your funds and nobody can stop them. You should take all precautions to avoid such event to happen. If you have not read it yet, also read the previous question to understand 
            why you must use MetaSafe. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >How many mnemonics are insecure?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Using a standard mnemonic generator, we found out that 19.6% is a constant rate appearing and indicating mnemonics not meeting our safety parameters.
          We analyzed over 100 MILLION mnemonics so far from which 19,632,106 were insecure. Aproximately 1/5 users have a wallet with a bad mnemonic. You can analyse 
          yours using our Mnemonic Analyser or generate a new one using our free to use software. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >If I use MetaSafe mnemonics this is a guarantee that I will never be hacked ever again. Hooray!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Cybersecurity is a process, not a one step solution. You should not rely just on MetaSafe to protect your funds and instead take 
          other measures. MetaSafe mnemonics are just a step closer for better security but there is no guarantee. For example, if 
          a malicious hacker convinces you through social engineering to give them your mnemonic you will lose your funds. Never share
          your mnemonic and always use Ethereum wallets that are MetaSafe verified. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        </Grid>
               
          </Grid>
          <Dialog
          maxWidth={'sm'}
          fullWidth={true}
        open={this.state.consecutiveLettersDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseconsecutiveLetters}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{<div>FREE <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> MNEMONIC</div>}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

<Grid container spacing={2}>
<Grid item xs={6}>
<Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="primary"
        // onClick={this.generateMnemonic}
        onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate 12 Words  Mnemonic  
      </Button>   
      </Grid>   
<Grid item xs={6}>    
      <Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="primary"
        // onClick={this.generateMnemonic}
        onClick={this.generateMnemonic24}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate 24 Words  Mnemonic  
      </Button>  
      </Grid> 
      </Grid>
      <Divider />
      {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseconsecutiveLetters} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
            {/* <h4> We've analysed over 100 million Ethereum mnemonics from which 19.6% did not meet our criteria
                of security. Some mnemonics are exponentially easier to bruteforce. Don't lose your funds to a 
                stupid mistake.  </h4> */}
          </div>

);
}
} 
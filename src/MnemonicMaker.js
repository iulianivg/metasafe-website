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


var ethers = require("ethers");
const words240 = require("./240words");



export default class MnemonicMaker extends React.Component {
    state = {
        goodMnemonic:'',
    }
    checkDuplicates = names =>
    names.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
    }), {})


    analysis = async(wordss) => {
        // let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(wordss.join(" "));
          // random check to see if mnemonic is valid
        let duplicates = this.checkDuplicates(wordss);
        let duplicateGrade = 40;
        let consecutiveGrade = 30;       
        let from10Grade = 30;
        let theWords = [];
        let theWords2 = [];
  
        for(let [key, value] of Object.entries(duplicates)){
          if(value > 1) {
            duplicateGrade = duplicateGrade-(value* 3);
          }
        }
  
        for(let i=0; i<wordss.length-1;i++) {
          if((wordss[i].charCodeAt(0) - wordss[i+1].charCodeAt(0)) === 0){
            theWords.push(wordss[i]);
          }
        }
        if(theWords.length >= 2){
          consecutiveGrade = consecutiveGrade - (theWords.length *2.5);
      }
  
      for(let i=0; i<words240.length;i++){
        for(let j=0;j<wordss.length;j++){
            if(words240[i] === wordss[j]){
                // console.log(words[i]);
                /// logic for if 4 or more words, it's risky
                theWords2.push(wordss[i]);
            }
        }
    }
    if(theWords2.length >= 4){
        from10Grade = from10Grade-(theWords2.length*2.5)
    }
  
    return [duplicateGrade,consecutiveGrade,from10Grade];
  
  
    }


    generateMnemonic = async() => {
        try{
          let y = true;
          while(y === true){
            var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
            mnemonic = mnemonic.split(" ");
            let x = await this.analysis(mnemonic);
            if(x[0]+x[1]+x[2] === 100){
              y = false;
              this.setState({goodMnemonic:mnemonic.join(" ")});
            }
          }

    
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
                    <Alert variant="filled" severity="info">
        We have analyzed over 100 MILLION user mnemonics and 19.6% are constantly coming out as vulnerable based on our criteria. 
                 </Alert>
                        <h4>
                            Don't lose your funds. Get your <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> mnemonic now.
                        </h4>
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
        onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
                </CardActions>
                {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />}

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
            {/* <h4> We've analysed over 100 million Ethereum mnemonics from which 19.6% did not meet our criteria
                of security. Some mnemonics are exponentially easier to bruteforce. Don't lose your funds to a 
                stupid mistake.  </h4> */}
          </div>

);
}
} 
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
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import CloseIcon from '@material-ui/icons/Close';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RecoverSeed from './RecoverSeed';


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
        
        <Grid item md={2} lg={2} />
        <Grid item xs={12} md={4} lg={4} >
        <Card>
                <CardHeader
                  title="Online Tool"
                  subheader="Use our tool in your browser"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<NoEncryptionIcon color="secondary" />}
                />
                <CardContent>
                  {/* <div >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      FREE
                    </Typography>
                  </div> */}
                  <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="2048 attempts / seed phrase" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CloseIcon htmlColor="#ce0000" />
          </ListItemIcon>
          <ListItemText primary="Custom Wallet Path"/>
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
          <CloseIcon htmlColor="#ce0000" />
          </ListItemIcon>
          <ListItemText primary="See what is being analyzed" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
          <CloseIcon htmlColor="#ce0000" />
          </ListItemIcon>
          <ListItemText primary="Multiple Blockchain and API support" />
        </ListItem>
        </List>
        
        
        
                </CardContent>
                {/* <CardActions>
               
                </CardActions> */}
                <a style={{color:'grey',textDecoration:'none'}} href="/terms">Terms & Conditions apply</a> 
                {/* {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />} */}

              </Card>
        </Grid>

         <Grid item xs={12} md={4} lg={4} >
        <Card>
                <CardHeader
                  title="Desktop Tool"
                  className="#"
                  subheader="Use our tool on your machine"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<VerifiedUserIcon htmlColor="green" />}
                />
                <CardContent>
                  <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="4,194,304 attemps / seed phrase" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Custom Wallet Path"  />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="See what is being analyzed" />
        </ListItem>
        </List>

         <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Multiple Blockchains and Custom API">
          </ListItemText>
        </ListItem>
        </List>
        
                </CardContent>
                <CardActions>
                  <a href="/download" style={{textDecoration:'none',width:'100%'}}>
                <Button fullWidth variant="contained" color="secondary">Download Now</Button>
                </a>
                </CardActions>
                                <a style={{color:'grey',textDecoration:'none'}} href="/terms">Terms & Conditions apply</a> 

              </Card>
        </Grid>
        <Divider style={{width:'100%'}}/>
        </Grid>

      {/* <ul style={{textAlign:'left'}}>
          <li>MetaSafe for Windows:        <a href={`https://www.dropbox.com/s/tduaa43gjhaamu2/MetaSafe-windows.rar?dl=1`}>Download (103 MB)</a></li>
          <li>MetaSafe for MacOS:   Coming Soon </li>
      </ul> */}

        <RecoverSeed />

            {/* <h4> We've analysed over 100 million Ethereum mnemonics from which 19.6% did not meet our criteria
                of security. Some mnemonics are exponentially easier to bruteforce. Don't lose your funds to a 
                stupid mistake.  </h4> */}
          </div>

);
}
} 
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import SpeedIcon from '@material-ui/icons/Speed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SecurityIcon from '@material-ui/icons/Security';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'

import recovery from './Smart Contract/recovery';
import words from './words';
import { CircularProgress } from '@material-ui/core';
const Web3 = require("web3");
var ethers = require("ethers");

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default class RecoverSeed extends React.Component {

    state = {
        wordIndex:2,
        word1:'',
        word1Disabled:false,
        word2:'',
        word2Disabled:true,
        word3:'',
        word3Disabled:false,
        word4:'',
        word4Disabled:false,
        word5:'',
        word5Disabled:false,
        word6:'',
        word6Disabled:false,
        word7:'',
        word7Disabled:false,
        word8:'',
        word8Disabled:false,
        word9:'',
        word9Disabled:false,
        word10:'',
        word10Disabled:false,
        word11:'',
        word11Disabled:false,
        word12:'',
        word12Disabled:false,
        results:[],
        hasStarted:false,
        seeData:false,
        needsAccess:false,
        loading:false,
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    

    forceWord = async() => {
        try{ 

            /// check provider ////
            let web3;
// const apiLink = options.api;
const apiLink = "https://rinkeby.infura.io/v3/4b6cf47f5f6e4aca850c45c04a58cf0d";
// const apiLink= "http://127.0.0.1:8545";
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {

  const provider = new Web3.providers.HttpProvider(apiLink
    // pass url of remote node
    // 'https://mainnet.infura.io/v3/4b6cf47f5f6e4aca850c45c04a58cf0d'
  );
  web3 = new Web3(provider);
}
let walletPath = {
    "standard": `m/44'/60'/0'/0/0`,
    // m/44'/60'/0' LEDGER (ETH)
    // @TODO: Include some non-standard wallet paths
};

window.ethereum.enable();

/// add mnemonics

            let accounts = await web3.eth.getAccounts();
            let hasAccess = await recovery.methods.players(accounts[0]).call();
            if(hasAccess === true) {
            let mnemonic = [];
            let emptyArray = this.state.results;
            emptyArray.length = 0;
            this.setState({results:emptyArray,hasStarted:true,seeData:true})
            mnemonic.push(this.state.word1.toLowerCase(),this.state.word2.toLowerCase(), this.state.word3.toLowerCase(),this.state.word4.toLowerCase(),this.state.word5.toLowerCase(),this.state.word6.toLowerCase(),
            this.state.word7.toLowerCase(),this.state.word8.toLowerCase(),this.state.word9.toLowerCase(),this.state.word10.toLowerCase(),this.state.word11.toLowerCase(),this.state.word12.toLowerCase());
            let time = new Date();
            let userIndex = this.state.wordIndex-1;
            for(var i=0; i<2048; i++){
                mnemonic[userIndex] = words[i];
                let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
                if(mnemonicValid === true){
                    let myResults = this.state.results;
                    let hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic.join(" "));
                    let node = hdnode.derivePath(walletPath.standard);
                    let wallet = new ethers.Wallet(node.privateKey);
                    let balance = await web3.eth.getBalance(wallet.address);
                    balance = web3.utils.fromWei(balance, 'ether');
                    myResults.push(<div style={{padding:'5px'}}>Mnemonic {mnemonic.join(" ")} with balance {balance}, {i+1} of 2048 <Divider style={{width:'100%'}} /></div>)
                    this.setState({results:myResults});
            }
        }
        this.setState({hasStarted:false});
    } else {
        this.setState({needsAccess:true});
    }
    }
        catch(err){
            console.log(err.message);
        }
    }

    buyAccess = async() => {
        try{
            let web3;
            // const apiLink = options.api;
            const apiLink = "https://rinkeby.infura.io/v3/4b6cf47f5f6e4aca850c45c04a58cf0d";
            // const apiLink= "http://127.0.0.1:8545";
            if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
              web3 = new Web3(window.web3.currentProvider);
            } else {
            
              const provider = new Web3.providers.HttpProvider(apiLink
                // pass url of remote node
                // 'https://mainnet.infura.io/v3/4b6cf47f5f6e4aca850c45c04a58cf0d'
              );
              web3 = new Web3(provider);
            }
            let walletPath = {
                "standard": `m/44'/60'/0'/0/0`,
                // m/44'/60'/0' LEDGER (ETH)
                // @TODO: Include some non-standard wallet paths
            };
            
            window.ethereum.enable();

            let accounts = await web3.eth.getAccounts();
            this.setState({loading:true});
            await recovery.methods.buyAccess().send({ 
                from:accounts[0],
                value:web3.utils.toWei('0.25','ether')
            });
            this.setState({loading:false});
            window.location.reload();
        } catch(err){
            this.setState({loading:false})
            console.log(err.message);
        }
    }

    render()
    {

        const handleWord = event => {
            this.setState({wordIndex:event.target.value});


            switch(event.target.value) {
                case "1":
                  this.setState({word1Disabled:true,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                    word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "2":
                    this.setState({word1Disabled:false,word2Disabled:true,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "3":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:true,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "4":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:true,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "5":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:true,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "6":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:true,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "7":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:true,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "8":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:true,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "9":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:true,word10Disabled:false,word11Disabled:false,word12Disabled:false})
                  break;
                case "10":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:true,word11Disabled:false,word12Disabled:false})
                  break;
                case "11":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:true,word12Disabled:false})
                  break;
                case "12":
                    this.setState({word1Disabled:false,word2Disabled:false,word3Disabled:false,word4Disabled:false,word5Disabled:false,word6Disabled:false,word7Disabled:false,
                        word8Disabled:false,word9Disabled:false,word10Disabled:false,word11Disabled:false,word12Disabled:true})
                  break;
              }

             }
           
    
    

          
        return (


            <div>
                <h2>Did you forget a word or two of your seed phrase?</h2>
                <p>Our tool gives you a second chance to recover your funds</p>
                <Divider style={{width:'100'}} />
                <br />
                <Grid container spacing={3} style={{backgroundImage:'linear-gradient(rgb(245, 0, 87),black)',}} >
                <Grid xs={12} style={{color:'white'}} >
                    <h1>Why this tool</h1>
                  </Grid>
                  <Grid xs={12} md={4} style={{color:'white'}} >
                  <SpeedIcon fontSize="large" htmlColor="red" />
                    <h3>FAST</h3>
                    <p>Up to 100 mnemonic attempts/s</p>
                    <br />
                  </Grid>
                  <Grid xs={12} md={4} style={{color:'white'}} >
                    <ViewModuleIcon fontSize="large" htmlColor="red" />
                    <h3>Real-Time Blockchain Analysis</h3>
                    <p>Data is checked at the latest block mined</p>
                    <br />

                  </Grid><Grid xs={12} md={4} style={{color:'white'}} >
                    <SecurityIcon fontSize="large" htmlColor="red" />
                    <h3>Secure</h3>
                    <p>Mnemonics are never sent to our servers.
                    </p>
                  </Grid>

                    <Grid item xs = {3} />
                   
                </Grid>
                <br />
                <Divider style={{width:'100'}} />
            <br />
            <Grid container spacing={3} >
                <Grid item xs ={12} md={2}>

                </Grid>
                <Grid item xs={12} md={6}>

        <TextField required id="standard-basic" disabled={this.state.word1Disabled} label="Word 1" value={this.state.word1} onChange={(event) => this.setState({word1:event.target.value.trim()})} />
        <TextField required id="standard-basic" disabled={this.state.word2Disabled} label="Word 2" value={this.state.word2} onChange={(event) => this.setState({word2:event.target.value.trim()})} />
        <TextField required id="standard-basic" disabled={this.state.word3Disabled} label="Word 3" value={this.state.word3} onChange={(event) => this.setState({word3:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word4Disabled} label="Word 4" value={this.state.word4} onChange={(event) => this.setState({word4:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word5Disabled} label="Word 5" value={this.state.word5} onChange={(event) => this.setState({word5:event.target.value.trim()})} />
        <TextField required id="standard-basic" disabled={this.state.word6Disabled} label="Word 6" value={this.state.word6} onChange={(event) => this.setState({word6:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word7Disabled} label="Word 7" value={this.state.word7} onChange={(event) => this.setState({word7:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word8Disabled} label="Word 8" value={this.state.word8} onChange={(event) => this.setState({word8:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word9Disabled} label="Word 9" value={this.state.word9} onChange={(event) => this.setState({word9:event.target.value.trim()})}/>
        <TextField required id="standard-basic" disabled={this.state.word10Disabled} label="Word 10" value={this.state.word10} onChange={(event) => this.setState({word10:event.target.value.trim()})} />
        <TextField required id="standard-basic" disabled={this.state.word11Disabled} label="Word 11" value={this.state.word11} onChange={(event) => this.setState({word11:event.target.value.trim()})} />
        <TextField required id="standard-basic" disabled={this.state.word12Disabled} label="Word 12" value={this.state.word12} onChange={(event) => this.setState({word12:event.target.value.trim()})} />
                </Grid>
                <Grid item xs={12} md={4}>
                <FormControl fullWidth required>
    <InputLabel htmlFor="age-native-required"> Word # I don't remember</InputLabel>
        <Select
          native
          value={this.state.wordIndex}
          name="Word"
          onChange={handleWord}
          inputProps={{
            id: 'Terms-native-required',
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
        
      </FormControl>
                {/* <Button onClick={this.forceWord} disabled={this.state.hasStarted} fullWidth variant="contained" color="secondary">Recover Seed Phrase</Button> */}
                <Button disabled fullWidth variant="contained" color="secondary">Recover Seed Phrase (coming soon)</Button>
                <a style={{color:'grey',textDecoration:'none'}} href="/terms">Terms & Conditions apply</a> 

                </Grid>
                <br /> 
                <Divider style={{width:'100%'}} />
                <Grid item xs={12} md={2} />
                <Grid item xs={12} md ={8}>
                {this.state.seeData === true ? (<Paper elevation={3}>
                <div style={{height:'310px',overflow:'scroll',textAlign:'left'}}>
                    {this.state.results}
                    </div>
                    </Paper> ) : <span />}
                
                </Grid>
                <Dialog
        open={this.state.needsAccess}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.setState({needsAccess:false})}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Get access now"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <h4>This is a premium feature </h4>
            Are you a premium user? If yes please log it to MetaMask using the 
            account you purchased our service. 
            <Divider style={{width:'100%'}} /> <br />
            Access costs just <span style={{fontWeight:'bold'}}> 0.25 ETH </span>and it's for life! <br />
            <Button onClick={this.buyAccess} variant="contained" fullWidth color="primary"> {this.state.loading === false ? (<div>Buy access now</div>) : <CircularProgress style={{color:'white'}} /> }  </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.setState({needsAccess:false})}  color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
                </Grid>

            </div>

        )
    }
}

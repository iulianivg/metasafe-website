import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import InputAdornment from '@material-ui/core/InputAdornment';

import words from './words';
import { CircularProgress } from '@material-ui/core';
const Web3 = require("web3");

var ethers = require("ethers");


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default class Recover_basic extends React.Component {
state = {
    wordIndex:12,
    word1:'',
    word1Disabled:false,
    word2:'',
    word2Disabled:false,
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
    word12Disabled:true,
    results:[],
    hasStarted:false,
    seeData:false,
    loading:false,
    apiLink:'',
    loader:0,
    closed:true,
}


forceWord = async() => {
    try{ 

        /// check provider ////
        let web3;
// const apiLink = options.api;
const apiLink = this.state.apiLink;
// const apiLink= "http://127.0.0.1:8545";
if(apiLink !== '' && (apiLink.startsWith('https://mainnet.infura.io/v3') || apiLink.startsWith('https://rinkeby.infura.io/v3') || apiLink.startsWith('https://kovan.infura.io/v3') || apiLink.startsWith('https://ropsten.infura.io/v3') || apiLink.startsWith('https://goerli.infura.io/v3')) ){

    let walletPath = {
        "standard": `m/44'/60'/0'/0/0`,
        // m/44'/60'/0' LEDGER (ETH)
        // @TODO: Include some non-standard wallet paths
        };

const provider = new Web3.providers.HttpProvider(apiLink);
web3 = new Web3(provider);
this.setState({snackBar:false})

/// logic to check 
let mnemonic = [];
let emptyArray = this.state.results;
emptyArray.length = 0;
this.setState({results:emptyArray,hasStarted:true,seeData:true,loader:0})
mnemonic.push(this.state.word1.toLowerCase(),this.state.word2.toLowerCase(), this.state.word3.toLowerCase(),this.state.word4.toLowerCase(),this.state.word5.toLowerCase(),this.state.word6.toLowerCase(),
this.state.word7.toLowerCase(),this.state.word8.toLowerCase(),this.state.word9.toLowerCase(),this.state.word10.toLowerCase(),this.state.word11.toLowerCase(),this.state.word12.toLowerCase());
let userIndex = this.state.wordIndex-1;
for(var i=0; i<2048; i++){
    this.setState({loader:i/2048*100});
    mnemonic[userIndex] = words[i];
    let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
    if(mnemonicValid === true){
        let myResults = this.state.results;
        let hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic.join(" "));
        let node = hdnode.derivePath(walletPath.standard);
        let wallet = new ethers.Wallet(node.privateKey);
        let balance = await web3.eth.getBalance(wallet.address);
        balance = web3.utils.fromWei(balance, 'ether');
        if(balance > 0){
        myResults.push(<div style={{padding:'5px'}}>Mnemonic {mnemonic.join(" ")} with balance {balance} has been recovered! <Divider style={{width:'100%'}} /></div>);
        this.setState({results:myResults});
        }
        
        // myResults.push(<div style={{padding:'5px'}}>Mnemonic {mnemonic.join(" ")} with balance {balance}, {i+1} of 2048 <Divider style={{width:'100%'}} /></div>)
}
}
this.setState({hasStarted:false});

}
else {
this.setState({snackBar:true});
}


}
    catch(err){
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
                <br />
                <Collapse in={this.state.closed}>
                <Alert style={{width:'100%'}} variant="filled" severity="warning" action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                this.setState({closed:false});
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
        For security reasons you should use the Desktop Tool.
      </Alert>
                </Collapse>
                        
      <h2>Ethereum Seed Recovery</h2>
      <h4>Wallet Path m/44'/60'/0'/0/0</h4>

                            <Grid container spacing={3} >

 <Grid item xs={6}>

              <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <Tooltip title="Get your API link from https://infura.io     Your seed phrase will never be shared with infura!">

                    <InfoIcon />
                    </Tooltip>

                  </InputAdornment>
                )}
                } 
              fullWidth style={{marginLeft:'11%'}} required id="standard-basic" value={this.state.apiLink} onChange={(event) => this.setState({apiLink:event.target.value.trim()})} label="Infura API Link" />
              </Grid>
              <Grid item xs={6}> 

              </Grid>
              <Divider style={{width:'100%'}} />
                <Grid item xs={12} md={8}>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word1Disabled} label="Word 1" value={this.state.word1} onChange={(event) => this.setState({word1:event.target.value.trim()})} />
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word2Disabled} label="Word 2" value={this.state.word2} onChange={(event) => this.setState({word2:event.target.value.trim()})} />
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word3Disabled} label="Word 3" value={this.state.word3} onChange={(event) => this.setState({word3:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word4Disabled} label="Word 4" value={this.state.word4} onChange={(event) => this.setState({word4:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word5Disabled} label="Word 5" value={this.state.word5} onChange={(event) => this.setState({word5:event.target.value.trim()})} />
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word6Disabled} label="Word 6" value={this.state.word6} onChange={(event) => this.setState({word6:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word7Disabled} label="Word 7" value={this.state.word7} onChange={(event) => this.setState({word7:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word8Disabled} label="Word 8" value={this.state.word8} onChange={(event) => this.setState({word8:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word9Disabled} label="Word 9" value={this.state.word9} onChange={(event) => this.setState({word9:event.target.value.trim()})}/>
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word10Disabled} label="Word 10" value={this.state.word10} onChange={(event) => this.setState({word10:event.target.value.trim()})} />
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word11Disabled} label="Word 11" value={this.state.word11} onChange={(event) => this.setState({word11:event.target.value.trim()})} />
        <TextField required id="standard-basic" autoComplete="off" disabled={this.state.word12Disabled} label="Word 12" value={this.state.word12} onChange={(event) => this.setState({word12:event.target.value.trim()})} />
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
    
      <br /> <br />
                <Button onClick={this.forceWord} disabled={this.state.hasStarted} fullWidth variant="contained" color="secondary">Recover Seed Phrase</Button>
                {/* <Button disabled fullWidth variant="contained" color="secondary">Recover Seed Phrase (coming soon)</Button> */}
                <a style={{color:'grey',textDecoration:'none'}} href="/terms">Terms & Conditions apply</a> 
          
                </Grid>
                <br /> 
                <Divider style={{width:'100%'}} />
                <Grid item xs={12} md={2} />
                <Grid item xs={12} md ={8}>
                {this.state.seeData === true ? (
                    <div>
                      {this.state.loader < 99 ? (<div> <CircularProgress variant="static" value={this.state.loader} /> <br /> {this.state.loader.toFixed(2)}% </div>) : <span />}
                        <div>
                            {this.state.loader < 99 ? (<div>                        Analyzing 2048 possible seed phrases...
                            If anything is found it will appear here.  <span style={{fontWeight:'bold'}}>Do not close this window.</span> </div>) : <div>Finished</div> }
                    {this.state.results.length === 0 && this.state.hasStarted === false ? <p>Nothing found</p> : <span />}
                        <Paper elevation={1}>
                        <div style={{height:'310px',overflow:'scroll',textAlign:'left'}}>
                    {this.state.results}
                    </div>
                    </Paper>
                        </div>
                        <Divider style={{width:'100%'}} />
                            <br /> <br />
                    </div>
                    ) : <span />}

                    </Grid>
                    <Snackbar open={this.state.snackBar} autoHideDuration={6000} onClose={this.handleSnackbar}>
        <Alert onClose={this.handleSnackbar} severity="error">
          Error. You're on the free plan and API must be infura link! Check <a style={{color:'inherit'}} href="https://infura.io" target="_blank"  rel='noopener noreferrer'>Infura.io</a> <br />
           Your link will be something like:  https://mainnet.infura.io/v3/infuraToken   <br />
                   <Button onClick={() => this.setState({snackBar:false})}>Close</Button>

        </Alert>
      </Snackbar>
</Grid>
            </div>

    )


}

}
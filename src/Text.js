import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import WarningIcon from '@material-ui/icons/Warning';
import CancelIcon from '@material-ui/icons/Cancel';
import Popover from '@material-ui/core/Popover';
import {Line} from 'react-chartjs-2';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

const Web3 = require("web3");
var ethers = require("ethers");
const words = require("./words");
const words240 = require("./240words");




export default class Text extends React.Component {
    state = {
        value: 'Infura',
        myarray:[                    <div>
                    <Grid container>

            <Grid item xs={11} sm={11}>
            <TextField fullWidth  id="outlined-basic" label="Infura API" variant="outlined" onChange={(event) => this.setState({infuraLink:event.target.value})} />
            </Grid>
            <Grid item xs={1} sm={1}>
            <Tooltip title="Your infura.io key. It looks like this: https://mainnet.infura.io/v3/apiKey">
          <HelpIcon />

      </Tooltip>
            </Grid>
            </Grid>
      </div>],
      metaFunction:'lastWord',
      termsAgree:"I Agree",
      infuraLink:'https://mainnet.infura.io/v3/4b6cf47f5f6e4aca850c45c04a58cf0d',
      word1:'',
      word2:'',
      word3:'',
      word4:'',
      word5:'',
      word6:'',
      word7:'',
      word8:'',
      word9:'',
      word10:'',
      word11:'',
      word12:'',
      textOutput:[],
      showInfo:false,
      mnemonicLegit:false,
      mnemonicDuplicates:false,
      consecutiveLetters:false,
      wordsFrom10:0,
      loading:false,
      mydata: {},
      counterMnemonic:0,
    }
    componentDidMount() {
        console.log("Hi");
    }
    
    checkDuplicates = names =>
    names.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
    }), {})

    checkEthereumNode = async() => {
      let web3;
      let apiLink;
      if(this.state.value == 'Infura'){
        /// to do for rinkeby and other test networks
        if(this.state.infuraLink.includes('https://mainnet.infura.io/v3/') == true){
            apiLink = this.state.infuraLink;
        }
    }
    if(this.state.value == "Metamask"){
    if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
        web3 = new Web3(window.web3.currentProvider);
      }
     } else {
      
        const provider = new Web3.providers.HttpProvider(apiLink
          // pass url of remote node
        );
        web3 = new Web3(provider);
      };
      
    }

    //// function to check for last word
    lastWord = async() => {
        let web3;
        let apiLink;
        if(this.state.value == 'Infura'){
            /// to do for rinkeby and other test networks
            if(this.state.infuraLink.includes('https://mainnet.infura.io/v3/') == true){
                apiLink = this.state.infuraLink;
            }
        }
        if(this.state.value == "Metamask"){
        if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            web3 = new Web3(window.web3.currentProvider);
          }
         } else {
          
            const provider = new Web3.providers.HttpProvider(apiLink
              // pass url of remote node
            );
            web3 = new Web3(provider);
          };

          ///
          let walletPath = {
            "standard": `m/44'/60'/0'/0/0`,
            // m/44'/60'/0' LEDGER (ETH)
            // @TODO: Include some non-standard wallet paths
        };
        ///
          var mnemonic = [];
          let nfound = 0;
          mnemonic.push(this.state.word1,this.state.word2, this.state.word3,this.state.word4,this.state.word5,this.state.word6,this.state.word7,this.state.word8,this.state.word9,this.state.word10,this.state.word11,this.state.word12);
          for(var i=0;i<2048;i++){
            let mnemonicCounter = i/2047*100;
            if(this.state.loading === false){
                var output = [];
                this.setState({textOutput:output})
                break;
            }
            this.setState({counterMnemonic:mnemonicCounter.toFixed(2)});
            mnemonic[11]=words[i];
            let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
            if(mnemonicValid === true){
                var output = this.state.textOutput;
                let hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic.join(" "));
                let node = hdnode.derivePath(walletPath.standard);
                let wallet = new ethers.Wallet(node.privateKey);
                let balance = await web3.eth.getBalance(wallet.address);
                balance = web3.utils.fromWei(balance, 'ether');
                // output.push(`Mnemonic ${mnemonic.join(" ")} with balance ${balance}, ${nfound} so far, ${i} of 2047`);
                output.push(<div> <p>Mnemonic {mnemonic.join(" ")} with balance {balance}, {i} mnemonic of 2047 </p> <hr/> </div>)
                console.log(output);
                this.setState({textOutput:output})

            }
        }
        console.log(web3);
        // console.log(web3.eth.getAccounts());
    }



    //// analysis LOGIC
    ////
    ////
    ////
    startAnalysis = async () => {
        try{



            await this.setState({loading:true});
            this.setState({showInfo:true, mnemonicDuplicates:false,});
            var mnemonic = [];
            let duplicateGrade = 40;
            let consecutiveGrade = 30;
            let from10Grade = 30;
            mnemonic.push(this.state.word1,this.state.word2, this.state.word3,this.state.word4,this.state.word5,this.state.word6,this.state.word7,this.state.word8,this.state.word9,this.state.word10,this.state.word11,this.state.word12);
            let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
            /// logic if menmonic is invalid (to do);
            if(mnemonicValid == false){
                this.setState({mnemonicLegit:false})
            } else {
                this.setState({mnemonicLegit:true});
                // this.lastWord();

            }
            let duplicates = this.checkDuplicates(mnemonic);
            let theWords = [];
            let theWords2 = [];
            //// logic to iterate over array of duplicates
            for(let [key, value] of Object.entries(duplicates)){
                if(value > 1){
                    duplicateGrade = duplicateGrade-(value* 3);
                    this.setState({mnemonicDuplicates:true});
                    // break;
                    /// logic one word repeated say there is low rosk, one word repeated multiple times or 
                    // multiple words is high risk!
                }
            };

            /// logic to check if more consecutive words start with same letter
            for(let i=0; i<mnemonic.length-1;i++) {

                if((mnemonic[i].charCodeAt(0) - mnemonic[i+1].charCodeAt(0)) == 0){
                theWords.push(mnemonic[i]);
                }
                
                }
            if(theWords.length >= 2){
                consecutiveGrade = consecutiveGrade - (theWords.length *2.5);
                this.setState({consecutiveLetters:true});
                // console.log("hawai! At least 25% of your words start consecutively with the same letter")
            } else {
                this.setState({consecutiveLetters:false});
            }

            

            /// logic to get how many words come from first 10% of all

            for(let i=0; i<words240.length;i++){
                for(let j=0;j<mnemonic.length;j++){
                    if(words[i] == mnemonic[j]){
                        // console.log(words[i]);
                        /// logic for if 4 or more words, it's risky
                        theWords2.push(words[i]);
                    }
                }
            }
            if(theWords2.length >= 4){
                from10Grade = from10Grade-(theWords2.length*2.5)
            }

            let totalUser = from10Grade+consecutiveGrade+duplicateGrade;
            const data = {
                labels: ['Mnemonic Strength', "Time"],  
            
                datasets: [
                  {
                    label: 'Recommended Score',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgba(75,192,192,1)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: 'rgba(75,192,192,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [0,100]
                  },
                  {
                    label: 'Your Score',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#ce0000',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#ce0000',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [0,totalUser-5]
                  }
                ]
              };
              this.setState({wordsFrom10:theWords2.length, mydata:data})

            // if(theWords2.length === 4){
            //     this.setState({wordsFrom10:4});
            //     console.log("hawai!, at least 30% of your words come from first 10% of all mnemonics")
            // } else{
            //     if(theWords2.length > 4){
            //         console.log("very high risk as more than 33% of your words come from first 10% of all mnemonics");
            //     }
            // }
    
        } catch(err){
            console.log(err.message);
        }
    }

    render(){


        const handleChange = event => {
            this.setState({value:event.target.value});
            let myArray = [];
            if(event.target.value == "Metamask"){
                myArray.push(
                    <div>
                        Make sure you have metamask installed!
                    </div>
                );
                this.setState({myarray:myArray});
            } else {
                myArray.push(
                    <div>
                    <Grid container>

            <Grid item xs={11} sm={11}>
            <TextField fullWidth  id="outlined-basic" label="Infura API" variant="outlined" />
            </Grid>
            <Grid item xs={1} sm={1}>
            <Tooltip title="Your infura.io key. It looks like this: https://mainnet.infura.io/v3/apiKey">
          <HelpIcon />

      </Tooltip>
            </Grid>
            </Grid>
      </div>
                );
                this.setState({myarray:myArray});
            }
          };

        const handleMetaSafe = event => {
            this.setState({metaFunction:event.target.value});
        }
        const handleTerms = event => {
            this.setState({termsAgree:event.target.value});
        }
    

          
      return (
          <div>
                <h2>Mnemonic Analyser</h2>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
            <FormControl fullWidth component="fieldset">
      <FormLabel component="legend">Ethereum Provider</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={handleChange}>
        <FormControlLabel value="Metamask" control={<Radio />} label="Metamask" />
        <FormControlLabel value="Infura" control={<Radio />} label="Infura" />
        <Tooltip title="You need to buy the advanced plan">
        <FormControlLabel value="disabled" disabled control={<Radio />} label="Custom" />
        </Tooltip>
      </RadioGroup>
    </FormControl>        
    {this.state.myarray}
    <br />

        </Grid>
        
        <Grid item xs={12} sm={6}>
        <h4>Mnemonic</h4>
        <TextField required id="standard-basic" label="Word 1" value={this.state.word1} onChange={(event) => this.setState({word1:event.target.value})} />
        <TextField required id="standard-basic" label="Word 2" value={this.state.word2} onChange={(event) => this.setState({word2:event.target.value})} />
        <TextField required id="standard-basic" label="Word 3" value={this.state.word3} onChange={(event) => this.setState({word3:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 4" value={this.state.word4} onChange={(event) => this.setState({word4:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 5" value={this.state.word5} onChange={(event) => this.setState({word5:event.target.value})} />
        <TextField required id="standard-basic" label="Word 6" value={this.state.word6} onChange={(event) => this.setState({word6:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 7" value={this.state.word7} onChange={(event) => this.setState({word7:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 8" value={this.state.word8} onChange={(event) => this.setState({word8:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 9" value={this.state.word9} onChange={(event) => this.setState({word9:event.target.value})}/>
        <TextField required id="standard-basic" label="Word 10" value={this.state.word10} onChange={(event) => this.setState({word10:event.target.value})} />
        <TextField required id="standard-basic" label="Word 11" value={this.state.word11} onChange={(event) => this.setState({word11:event.target.value})} />
        <TextField required id="standard-basic" label="Word 12" value={this.state.word12} onChange={(event) => this.setState({word12:event.target.value})} />
        
        </Grid>
        
        <Grid item xs={12} sm={3}>
        <FormControl fullWidth required>
        <InputLabel htmlFor="function-required">MetaSafe Smart Functions+</InputLabel>
        <Select
          native
          value={this.state.metaFunction}
          onChange={handleMetaSafe}
          name="function"
          inputProps={{
            id: 'function-required',
          }}
        >
          <option value="lastWord">Last Word</option>
          <Tooltip title="You need to buy the advanced plan">
          <option disabled value="firstWord">First Word (advanced)</option>
          </Tooltip>
          <Tooltip title="You need to buy the advanced plan">
          <option disabled value="allRow">All In A Row (advanced)</option>
          </Tooltip>
          <Tooltip title="You need to buy the advanced plan">
          <option disabled value="lastTwo">Last Two At The Same Time (advanced) </option>
          </Tooltip>
          <Tooltip title="You need to buy the advanced plan">
          <option disabled value="firstTwo">First Two At The Same Time (advanced)</option>
          </Tooltip>
          <Tooltip title="You need to buy the advanced plan">

          <option disabled value="Custom">Custom (advanced) </option>
          </Tooltip>

        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl><FormControl fullWidth required>
        <InputLabel htmlFor="age-native-required"> <a href="#">Terms & Conditions</a></InputLabel>
        <Select
          native
          value={this.state.termsAgree}
          onChange={handleTerms}
          name="Terms"
          inputProps={{
            id: 'Terms-native-required',
          }}
        >
          <option value={"I Agree"}>I Agree</option>
          <option value={"I disagree"}>I Disagree</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <Button variant="contained" color="secondary" style={{width:'100%'}} onClick={() => this.setState({loading:false,showInfo:false,word1:'',word2:'',word3:'',word4:'',word5:'',word6:'',word7:'',word8:'',word9:'',word10:'',word11:'',word12:'',})}>
            Reset
            </Button>
            {/* {this.state.termsAgree == "I Agree" ? <h2>hahaha</h2> : <br />} */}
            <Button variant="contained" color="primary" style={{width:'100%', marginTop:'5px'}} onClick={this.startAnalysis}>
            Go
            </Button>
        </Grid>
        
        </Grid>
        
       {this.state.showInfo == true ?  <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
          <h2 style={{textAlign:"center"}}>Results</h2>
          </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
        {this.state.mnemonicLegit == true ?         <Line data={this.state.mydata} height={200} /> : <span />}
            </Grid>
            
            <Grid item xs={12} sm={6}>
          {/* CheckCircleIcon */}
          <List component="nav">
        <ListItem button>
          <ListItemIcon>
              {this.state.mnemonicLegit == false ?   <CancelIcon color="error"/> : <CheckCircleIcon htmlColor="green" />}
          </ListItemIcon>
          <ListItemText primary="Mnemonic is legitimate" />
        </ListItem>
        {this.state.mnemonicLegit == true ? <List>  <ListItem button>
          <ListItemIcon>
              {this.state.mnemonicDuplicates == false ?             <CheckCircleIcon htmlColor="green" /> :                       <CancelIcon color="error"/> }
          </ListItemIcon>
          <ListItemText primary="No word repetition" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
              {this.state.consecutiveLetters == false ?             <CheckCircleIcon htmlColor="green" /> :             <CancelIcon color="error" />}
          </ListItemIcon>
          <ListItemText primary="No three or more consecutive words starting with the same letter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
              {this.state.wordsFrom10 >= 4 ?  <CancelIcon color="error" /> : <CheckCircleIcon htmlColor="green" />}
          </ListItemIcon>
          <ListItemText primary="Less than 4 words come from first 10% of all mnemonics" />
        </ListItem> </List> : <span />}
       
        </List>
        <br />
        </Grid> 
        <Grid item xs={12} sm={3}>
        {this.state.mnemonicLegit === true ? (<div><h4>Your mnemonic looks safe</h4>
        <Fab color="secondary" aria-label="add">
        {/* {this.state.counterMnemonic}% */}
        <CheckIcon />
        </Fab></div>) : <span />}
        
        </Grid>
        </Grid> : <h2>haha</h2>}
        <Divider />

        <br />
        {this.state.mnemonicLegit === true ?         <Paper elevation={3}>
        <div style={{width:'100%',height:'380px',overflow:'scroll', textAlign:'left',paddingLeft:'5px',paddingTop:'5px'}}>
      {this.state.textOutput}
      </div>
      </Paper> : <br />}


        </div>  
      );
    }
} 
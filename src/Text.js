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
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'
import Autocomplete from '@material-ui/lab/Autocomplete';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SecurityIcon from '@material-ui/icons/Security';




const Web3 = require("web3");
var ethers = require("ethers");
const words = require("./words");
const words240 = require("./240words");


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class Text extends React.Component {
    state = {
      termsAgree:"I Agree",
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
      showInfo:false,
      mnemonicLegit:false,
      mnemonicLegitDialog:false,
      mnemonicDuplicates:false,
      mnemonicDuplicatesDialog:false,
      consecutiveLetters:false,
      consecutiveLettersDialog:false,
      consecutiveLettersScore:0,
      wordsFrom10:0,
      wordsFrom10Dialog:false,
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


    handleCloseMnemonicLegit = async() => {

        this.setState({mnemonicLegitDialog:false})
    }

    handleCloseDuplicates = async() => {
      this.setState({mnemonicDuplicatesDialog:false})
    }
    handleClosewordsFrom10 = async() => {
      this.setState({wordsFrom10Dialog:false})
    }

    handleCloseconsecutiveLetters = async() => {
      this.setState({consecutiveLettersDialog:false})
    }

    //// analysis LOGIC
    ////
    ////
    ////
    startAnalysis = async () => {
        try{
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
            this.setState({consecutiveLettersScore:consecutiveGrade})
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
        {/* <Grid item xs={12} sm={3}>
        <p>Analyse how secure your mnemonic is. </p>
        </Grid> */}
        
        <Grid item xs={12} sm={6}>

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

        <Grid item xs={12} sm={6}>
    <FormControl fullWidth required>
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
          <option value={"I Disagree"}>I Disagree</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <Button variant="contained" color="secondary" style={{width:'100%'}} onClick={() => this.setState({showInfo:false,word1:'',word2:'',word3:'',word4:'',word5:'',word6:'',word7:'',word8:'',word9:'',word10:'',word11:'',word12:'',})}>
            Reset
            </Button>
            {/* {this.state.termsAgree == "I Agree" ? <h2>hahaha</h2> : <br />} */}
            <Button variant="contained" color="primary" style={{width:'100%', marginTop:'5px'}} onClick={this.startAnalysis}>
            Go
            </Button>
            
        </Grid>
        <Grid xs={12}>
        <Divider />
          </Grid>
        </Grid>

       {this.state.showInfo == true ?  <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            
          <h2 style={{textAlign:"center"}}>Results</h2>
          
          </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        {this.state.mnemonicLegit == true ?         <Line data={this.state.mydata} height={200} /> : <span />}
            </Grid>
            
            <Grid item xs={12} sm={4}>
          {/* CheckCircleIcon */}
          <List component="nav">
        <ListItem button onClick={() => this.setState({mnemonicLegitDialog:true})}>
          <ListItemIcon>
              {this.state.mnemonicLegit == false ?   <CancelIcon color="error"/> : <CheckCircleIcon htmlColor="green" />}
          </ListItemIcon>
          <ListItemText primary="Mnemonic is legitimate"   />
          <InfoOutlinedIcon htmlColor="grey" />
         

        </ListItem>
        {this.state.mnemonicLegit == true ? <List>  
          <ListItem button onClick={() => this.setState({mnemonicDuplicatesDialog:true})}>
          <ListItemIcon>
              {this.state.mnemonicDuplicates == false ?             <CheckCircleIcon htmlColor="green" /> :                       <CancelIcon color="error"/> }
          </ListItemIcon>
          <ListItemText primary="No word repetition" />
          <InfoOutlinedIcon htmlColor="grey" />
          
        </ListItem>
        <ListItem button onClick={() => this.setState({consecutiveLettersDialog:true})}>
          <ListItemIcon>
              {this.state.consecutiveLetters == false ?             <CheckCircleIcon htmlColor="green" /> :             <CancelIcon color="error" />}
          </ListItemIcon>
          <ListItemText primary="No three or more consecutive words starting with the same letter" />
          <InfoOutlinedIcon htmlColor="grey" />
        </ListItem>
        <ListItem button onClick={() => this.setState({wordsFrom10Dialog:true})}>
          <ListItemIcon>
              {this.state.wordsFrom10 >= 4 ?  <CancelIcon color="error" /> : <CheckCircleIcon htmlColor="green" />}
          </ListItemIcon>
          <ListItemText primary="Less than 4 words come from first 10% of all mnemonics" /> <InfoOutlinedIcon htmlColor="grey" />
        </ListItem> 
                 
 </List> : <span />}
       
        </List>
        <br />
        </Grid> 
        <Grid item xs={12} sm={5}>
        {this.state.mnemonicLegit === true && this.state.wordsFrom10 <4 && this.state.mnemonicDuplicates === false ? (<div><h4>Your mnemonic looks safe</h4>
        <Fab color="secondary" aria-label="add">
        {/* {this.state.counterMnemonic}% */}
        <CheckIcon />
        </Fab></div>) : <span />}
        <Alert variant="filled" severity="warning">Warning! Mnemonic is not safe. Hackers can steal your funds</Alert>
        <Button
        style={{width:'100%',marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="default"
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid black',textTransform:'none'}}> MetaSafe </span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
          
          <h5>Your <span style={{border:'1px solid black',textTransform:'none'}}> MetaSafe</span>  mnemonic is: </h5>
      <p>
      add wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth
        
      </p>

        </Grid>  
        </Grid> : <br />}
        <Dialog
        open={this.state.mnemonicLegitDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseMnemonicLegit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Mnemonic is legitimate?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            A mnemonic phrase is a set of 12 or 24 words from which wallets can derive. If 
            your mnemonic is not legitimate please double
            check the spelling of each word. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseMnemonicLegit} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={this.state.mnemonicDuplicatesDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseDuplicates}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Any word repetition?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The more words repeat in your mnemonic, the lower the score. For instance the mnemonic
            <Paper elevation={3} style={{backgroundColor:'aliceblue'}}>
            <blockquote style={{fontWeight:'bold'}}>
              add, <span style={{textDecoration:'underline'}}>wealth, wealth, wealth, wealth, wealth, wealth, wealth, wealth, wealth, wealth, wealth</span>
            </blockquote>
            </Paper>
            is more insecure as it has a word repeated over 10 times compared to 
            <Paper elevation={3} style={{backgroundColor:'aliceblue'}}>
            <blockquote style={{fontWeight:'bold'}}>
            elder,<span style={{textDecoration:'underline'}}>shell</span>,cause,detect,orbit,way,fragile,silly,
            trend,zero,absorb,<span style={{textDecoration:'underline'}}>shell</span>
            </blockquote>
            </Paper>
            which only has a repetition. No word repetition is great practice.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseDuplicates} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={this.state.wordsFrom10Dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClosewordsFrom10}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Less than 4 words come from first 10% of all mnemonics?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The first 240 words of all mnemonics are the most bruteforced by hackers. You should have less than 4 words
            coming from the first 10% of all mnemonics. 
            Once the 4 words threshold is reached, the more words you have from the first 240 words, the lower your score. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosewordsFrom10} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

            <Dialog
        open={this.state.consecutiveLettersDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseconsecutiveLetters}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"How many consecutive words start with the same letter?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            A mnemonic with many words starting with the same letter is not good practice. To be more secure, your mnemonic
            words must be distributed among a higher range of letters. 
            For example, a mnemonic that has three consecutive words starting with letter "A" will score lower because is
            less secure. 

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseconsecutiveLetters} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* consecutiveLettersDialog */}
        </div>  
      );
    }
} 
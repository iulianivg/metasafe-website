import TextField from '@material-ui/core/TextField';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
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
import CancelIcon from '@material-ui/icons/Cancel';
import {Line} from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SecurityIcon from '@material-ui/icons/Security';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';




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
      word13:'',
      word14:'',
      word15:'',
      word16:'',
      word17:'',
      word18:'',
      word19:'',
      word20:'',
      word21:'',
      word22:'',
      word23:'',
      word24:'',
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
      goodMnemonic:'',
      score:0,
      type:"12",
      generateMnemonicDialog:false,
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

    handleClosegenerateMnemonic = async () => {
      this.setState({generateMnemonicDialog:false,goodMnemonic:''})
    }


    /// function to analyze array of mnemonics and get their grades
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
              theWords2.push(words[i]);
          }
      }
  }
  if(theWords2.length >= 4){
      from10Grade = from10Grade-(theWords2.length*2.5)
  }

  return [duplicateGrade,consecutiveGrade,from10Grade];


  }

  analysis24 = async(wordss) => {
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
        duplicateGrade = duplicateGrade-(value* 1.5);
      }
    }

    for(let i=0; i<wordss.length-1;i++) {
      if((wordss[i].charCodeAt(0) - wordss[i+1].charCodeAt(0)) === 0){
        theWords.push(wordss[i]);
      }
    }
    if(theWords.length >= 2){
      consecutiveGrade = consecutiveGrade - (theWords.length *1.75);
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
    from10Grade = from10Grade-(theWords2.length*1.75)
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

      // let goodMnemonics = 0;
      // let badMnemonics = 0;
      // for(let i=0; i<1000000;i++){
      //   var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
      //   var mnemonic = mnemonic.split(" ");
      //   let x = await this.analysis(mnemonic); 

      //   if(x[0]+x[1]+x[2] === 100){
      //     goodMnemonics++;
      //   } else {
      //     badMnemonics++;
      //   }

      // }

    }catch(err){
      console.log(err.message);
    }
  }

  generateMnemonic24 = async() => {
    try{
      let y = true;
      while(y === true){
        var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(32));
        mnemonic = mnemonic.split(" ");
        let x = await this.analysis24(mnemonic);
        if(x[0]+x[1]+x[2] === 100){
          y = false;
          this.setState({goodMnemonic:mnemonic.join(" ")});
        }
      }


    }catch(err){
      console.log(err.message);
    }
  }

    //// analysis LOGIC
    //// does same things as "analysis" with minor changess
    //// such as stating states
    startAnalysis = async () => {
        try{
            this.setState({showInfo:true, mnemonicDuplicates:false,});
            var mnemonic = [];
            let duplicateGrade = 40;
            let consecutiveGrade = 30;
            let from10Grade = 30;
            mnemonic.push(this.state.word1.toLowerCase(),this.state.word2.toLowerCase(), this.state.word3.toLowerCase(),this.state.word4.toLowerCase(),this.state.word5.toLowerCase(),this.state.word6.toLowerCase(),
            this.state.word7.toLowerCase(),this.state.word8.toLowerCase(),this.state.word9.toLowerCase(),this.state.word10.toLowerCase(),this.state.word11.toLowerCase(),this.state.word12.toLowerCase());
              // mnemonic.push(this.state.word1.toLowerCase(),this.state.word2.toLowerCase(), this.state.word3.toLowerCase(),this.state.word4.toLowerCase(),this.state.word5.toLowerCase(),this.state.word6.toLowerCase(),
              // this.state.word7.toLowerCase(),this.state.word8.toLowerCase(),this.state.word9.toLowerCase(),this.state.word10.toLowerCase(),this.state.word11.toLowerCase(),this.state.word12.toLowerCase(),
              // this.state.word13.toLowerCase(),this.state.word14.toLowerCase(), this.state.word15.toLowerCase(),this.state.word16.toLowerCase(),this.state.word17.toLowerCase(),this.state.word18.toLowerCase(),
              // this.state.word19.toLowerCase(),this.state.word20.toLowerCase(),this.state.word21.toLowerCase(),this.state.word22.toLowerCase(),this.state.word23.toLowerCase(),this.state.word24.toLowerCase());
            
            let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
            /// logic if menmonic is invalid (to do);
            if(mnemonicValid === false){
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

                if((mnemonic[i].charCodeAt(0) - mnemonic[i+1].charCodeAt(0)) === 0){
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
                    if(words[i] === mnemonic[j]){
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
                    data: [0,totalUser]
                  }
                ]
              };
              this.setState({wordsFrom10:theWords2.length, mydata:data,score:totalUser})

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

    startAnalysis24 = async () => {
      try{
          this.setState({showInfo:true, mnemonicDuplicates:false,});
          var mnemonic = [];
          let duplicateGrade = 40;
          let consecutiveGrade = 30;
          let from10Grade = 30;
            mnemonic.push(this.state.word1.toLowerCase(),this.state.word2.toLowerCase(), this.state.word3.toLowerCase(),this.state.word4.toLowerCase(),this.state.word5.toLowerCase(),this.state.word6.toLowerCase(),
            this.state.word7.toLowerCase(),this.state.word8.toLowerCase(),this.state.word9.toLowerCase(),this.state.word10.toLowerCase(),this.state.word11.toLowerCase(),this.state.word12.toLowerCase(),
            this.state.word13.toLowerCase(),this.state.word14.toLowerCase(), this.state.word15.toLowerCase(),this.state.word16.toLowerCase(),this.state.word17.toLowerCase(),this.state.word18.toLowerCase(),
            this.state.word19.toLowerCase(),this.state.word20.toLowerCase(),this.state.word21.toLowerCase(),this.state.word22.toLowerCase(),this.state.word23.toLowerCase(),this.state.word24.toLowerCase());
          
          let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(mnemonic.join(" "));
          /// logic if menmonic is invalid (to do);
          if(mnemonicValid === false){
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
                  duplicateGrade = duplicateGrade-(value* 1.5);
                  this.setState({mnemonicDuplicates:true});
                  // break;
                  /// logic one word repeated say there is low rosk, one word repeated multiple times or 
                  // multiple words is high risk!
              }
          };

          /// logic to check if more consecutive words start with same letter
          for(let i=0; i<mnemonic.length-1;i++) {

              if((mnemonic[i].charCodeAt(0) - mnemonic[i+1].charCodeAt(0)) === 0){
              theWords.push(mnemonic[i]);
              }
              
              }
          if(theWords.length >= 2){
              consecutiveGrade = consecutiveGrade - (theWords.length *1.75);
              this.setState({consecutiveLetters:true});
              // console.log("hawai! At least 25% of your words start consecutively with the same letter")
          } else {
              this.setState({consecutiveLetters:false});
          }

          

          /// logic to get how many words come from first 10% of all

          for(let i=0; i<words240.length;i++){
              for(let j=0;j<mnemonic.length;j++){
                  if(words[i] === mnemonic[j]){
                      // console.log(words[i]);
                      /// logic for if 4 or more words, it's risky
                      theWords2.push(words[i]);
                  }
              }
          }
          if(theWords2.length >= 4){
              from10Grade = from10Grade-(theWords2.length*1.75)
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
                  data: [0,totalUser]
                }
              ]
            };
            this.setState({wordsFrom10:theWords2.length, mydata:data,score:totalUser})

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


       

        const handleTerms = event => {
            this.setState({termsAgree:event.target.value});
        }

        const handleType = event => {
          this.setState({type:event.target.value,word1:'',word2:'',word3:'',word4:'',word5:'',word6:'',word7:'',word8:'',word9:'',word10:'',word11:'',word12:'',word13:'',word14:'',word15:'',word16:'',word17:'',word18:'',word19:'',word20:'',word21:'',word22:'',word23:'',word24:''});

        }
    

          
      return (
          <div>
                <h2>Ethereum Mnemonic Analyser</h2>
                
        <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={3}>
        <p>Analyse how secure your mnemonic is. </p>
        </Grid> */}
        
        <Grid item xs={12} sm={12} lg={6}>
        {this.state.type === "12" ? ( <div>       <TextField required id="standard-basic" label="Word 1" value={this.state.word1} onChange={(event) => this.setState({word1:event.target.value.trim()})} />
        <TextField required id="standard-basic" label="Word 2" value={this.state.word2} onChange={(event) => this.setState({word2:event.target.value.trim()})} />
        <TextField required id="standard-basic" label="Word 3" value={this.state.word3} onChange={(event) => this.setState({word3:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 4" value={this.state.word4} onChange={(event) => this.setState({word4:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 5" value={this.state.word5} onChange={(event) => this.setState({word5:event.target.value.trim()})} />
        <TextField required id="standard-basic" label="Word 6" value={this.state.word6} onChange={(event) => this.setState({word6:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 7" value={this.state.word7} onChange={(event) => this.setState({word7:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 8" value={this.state.word8} onChange={(event) => this.setState({word8:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 9" value={this.state.word9} onChange={(event) => this.setState({word9:event.target.value.trim()})}/>
        <TextField required id="standard-basic" label="Word 10" value={this.state.word10} onChange={(event) => this.setState({word10:event.target.value.trim()})} />
        <TextField required id="standard-basic" label="Word 11" value={this.state.word11} onChange={(event) => this.setState({word11:event.target.value.trim()})} />
        <TextField required id="standard-basic" label="Word 12" value={this.state.word12} onChange={(event) => this.setState({word12:event.target.value.trim()})} />
        </div>) : (
           <div>       <TextField required id="standard-basic" label="Word 1" value={this.state.word1} onChange={(event) => this.setState({word1:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 2" value={this.state.word2} onChange={(event) => this.setState({word2:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 3" value={this.state.word3} onChange={(event) => this.setState({word3:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 4" value={this.state.word4} onChange={(event) => this.setState({word4:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 5" value={this.state.word5} onChange={(event) => this.setState({word5:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 6" value={this.state.word6} onChange={(event) => this.setState({word6:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 7" value={this.state.word7} onChange={(event) => this.setState({word7:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 8" value={this.state.word8} onChange={(event) => this.setState({word8:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 9" value={this.state.word9} onChange={(event) => this.setState({word9:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 10" value={this.state.word10} onChange={(event) => this.setState({word10:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 11" value={this.state.word11} onChange={(event) => this.setState({word11:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 12" value={this.state.word12} onChange={(event) => this.setState({word12:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 13" value={this.state.word13} onChange={(event) => this.setState({word13:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 14" value={this.state.word14} onChange={(event) => this.setState({word14:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 15" value={this.state.word15} onChange={(event) => this.setState({word15:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 16" value={this.state.word16} onChange={(event) => this.setState({word16:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 17" value={this.state.word17} onChange={(event) => this.setState({word17:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 18" value={this.state.word18} onChange={(event) => this.setState({word18:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 19" value={this.state.word19} onChange={(event) => this.setState({word19:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 20" value={this.state.word20} onChange={(event) => this.setState({word20:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 21" value={this.state.word21} onChange={(event) => this.setState({word21:event.target.value.trim()})}/>
           <TextField required id="standard-basic" label="Word 22" value={this.state.word22} onChange={(event) => this.setState({word22:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 23" value={this.state.word23} onChange={(event) => this.setState({word23:event.target.value.trim()})} />
           <TextField required id="standard-basic" label="Word 24" value={this.state.word24} onChange={(event) => this.setState({word24:event.target.value.trim()})} />
           </div>
        ) }


        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
    <FormControl fullWidth required>
    <InputLabel htmlFor="age-native-required"> <a href="/terms">Terms & Conditions</a></InputLabel>
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


{/* Second Form */}
      <FormControl fullWidth required>
      <InputLabel htmlFor="age-native-required">Seed Phrase Type</InputLabel>
        <Select
          native
          value={this.state.type}
          onChange={handleType}
          name="Terms"
          inputProps={{
            id: 'Terms-native-required',
          }}
        >
          <option value={"12"}>12 Words</option>
          <option value={"24"}>24 Words</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl>
      
      <Button variant="contained" color="secondary" style={{width:'100%'}} onClick={() => this.setState({showInfo:false,word1:'',word2:'',word3:'',word4:'',word5:'',word6:'',word7:'',word8:'',word9:'',word10:'',word11:'',word12:'',word13:'',word14:'',word15:'',word16:'',word17:'',word18:'',word19:'',word20:'',word21:'',word22:'',word23:'',word24:''})}>
            Reset
            </Button>
            {/* {this.state.termsAgree == "I Agree" ? <h2>hahaha</h2> : <br />} */}
            {this.state.type === "12" ? (            <Button variant="contained" color="secondary" style={{width:'100%', marginTop:'5px'}} onClick={this.startAnalysis}>
            Go
            </Button>) : (            <Button variant="contained" color="secondary" style={{width:'100%', marginTop:'5px'}} onClick={this.startAnalysis24}>
            Go
            </Button>) }

            
        </Grid>
        <Grid xs={12}>
        <Divider />
          </Grid>
        </Grid>

       {this.state.showInfo === true && this.state.termsAgree === "I Agree" ?  <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            
          <h2 style={{textAlign:"center"}}>Results</h2>
          
          </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
        {this.state.mnemonicLegit === true ?         <Line data={this.state.mydata} height={200} /> : <span />}
            </Grid>
            
            <Grid item xs={12} sm={6} lg={4}>
          {/* CheckCircleIcon */}
          <List component="nav">
        <ListItem button onClick={() => this.setState({mnemonicLegitDialog:true})}>
          <ListItemIcon>
              {this.state.mnemonicLegit === false ?   <CancelIcon color="error"/> : <CheckCircleIcon htmlColor="green" />}
          </ListItemIcon>
          <ListItemText primary="Mnemonic is legitimate"   />
          <InfoOutlinedIcon htmlColor="grey" />
         

        </ListItem>
        {this.state.mnemonicLegit === true ? <List>  
          <ListItem button onClick={() => this.setState({mnemonicDuplicatesDialog:true})}>
          <ListItemIcon>
              {this.state.mnemonicDuplicates === false ?             <CheckCircleIcon htmlColor="green" /> :                       <CancelIcon color="error"/> }
          </ListItemIcon>
          <ListItemText primary="No word repetition" />
          <InfoOutlinedIcon htmlColor="grey" />
          
        </ListItem>
        <ListItem button onClick={() => this.setState({consecutiveLettersDialog:true})}>
          <ListItemIcon>
              {this.state.consecutiveLetters === false ?             <CheckCircleIcon htmlColor="green" /> :             <CancelIcon color="error" />}
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
        <Grid item xs={12} sm={6} lg={5}>
        {this.state.mnemonicLegit === true && this.state.wordsFrom10 <4 && this.state.mnemonicDuplicates === false ? (<span />) : <span />}
        {this.state.mnemonicLegit === true && this.state.score === 100 ?     <Alert variant="filled" severity="success">You mnemonic is safe</Alert> : this.state.mnemonicLegit === true && this.state.score < 100 ?         <Alert variant="filled" severity="warning">Warning! Mnemonic is not safe. Hackers can steal your funds</Alert>
: <span /> }
    
    
        <Button
        style={{width:'100%',marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="default"
        onClick={() => this.setState({generateMnemonicDialog:true})}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
 <Typography variant="subtitle1" gutterBottom>
          Are you an exchange and need many safe mnemonics for your users? 
           <a href="/">Click here</a>
          </Typography>

          {/* <h5>Your <span style={{border:'1px solid black',textTransform:'none'}}> MetaSafe</span>  mnemonic is: </h5>
      <p>
      add wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth wealth
        
      </p> */}

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
        <DialogTitle id="alert-dialog-slide-title">{"Less than 4 words come from first 10% of all mnemonic words?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The first 240 words of all mnemonic words are the most bruteforced by hackers. You should have less than 4 words
            coming from the first 10% of all those words. 
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
      

                <Dialog
          maxWidth={'sm'}
          fullWidth={true}
        open={this.state.generateMnemonicDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClosegenerateMnemonic}
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
          <Button onClick={this.handleClosegenerateMnemonic} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* consecutiveLettersDialog */}
        </div>  
      );
    }
} 
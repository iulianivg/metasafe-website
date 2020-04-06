import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default class Documentation extends React.Component {

    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render(){


    

          
        return (


            <div>
                <Grid container spacing={3} style={{textAlign:'left'}}>

                <Grid item xs={12}>

                <h3>Installation </h3>                
                </Grid>
                <Grid item xs={12}>
                <div style={{color:'white',backgroundColor:'#272727',height:'5vh',fontFamily:'"Fira Mono", "Andale Mono", "Consolas", monospace',width:'100%'}}> <NavigateNextIcon /> npm install --save metasafe-eth</div>

                </Grid>
                    <Divider style={{width:'100%'}} />

                <Grid item xs={12}>
                <h3>Usage </h3>

            
 <div style={{color:'white',backgroundColor:'#272727',fontFamily:'"Fira Mono", "Andale Mono", "Consolas", monospace',padding:'10px',width:'100%'}}>   
 var metasafe = require('metasafe-eth');
          <br /> <br />
          metasafe.generateMnemonic12().then((event) => {'{console.log(event);}'}) <br /> <span style={{color:'grey'}}> /// result => a safe 12 words mnemonic phrase </span>
            <br /> <br /> 
            metasafe.generateMnemonic24().then((event) => {'{console.log(event);}'})  <br /> <span style={{color:'grey'}}>/// result => a safe 24 words mnemonic phrase </span>
            <br /> <br /> 
            var mnemonic = ['add','wealth','wealth','wealth','wealth', <br /> 
            'wealth','wealth','wealth','wealth','wealth', <br /> 
            'wealth','wealth']; <br /> <br />
            metasafe.analysis12(mnemonic).then((event) => {'{'}
            <br /> 
            console.log(event); <br /> {'}'}) <br />  
            <span style={{color:'grey'}}> /// or </span> <br />
            metasafe.analysis24(mnemonicOf24).then((event) => {'{'}
            <br /> 
            console.log(event); <br /> {'}'}) <br />
            
            <span style={{color:'grey'}}>/// result => 3 grades: first is grade for number of repeating words </span> <br />
            <span style={{color:'grey'}}>/// second is grade for words starting with the same letter </span> <br /> 
            <span style={{color:'grey'}}>/// third is grade for words coming from first 10% of all mnemonic words </span> <br /> 
<span style={{color:'grey'}}>/// The total of them is subtracted to 100 for the result. </span> <br /> 
 <span style={{color:'grey'}}>/// 100 = secure. Less than 100 = less secure </span> <br /> 
 <br /> 

 </div>


            or
          <div style={{color:'white',backgroundColor:'#272727',fontFamily:'"Fira Mono", "Andale Mono", "Consolas", monospace',padding:'10px', width:'100%'}}>   
          import {'{generateMnemonic12, generateMnemonic24, analysis12, analysis24}'} from 'metasafe-eth';
          <br /> <br />
          mnemonicOf12 = async() => {'{'}
          <br /> let mnemonic = await generateMnemonic12();
          <br /> console.log(mnemonic)   <span style={{color:'grey'}}>/// result => a safe 12 words mnemonic phrase </span>
          <br />  {'}'}
          <br /> <br />
          mnemonicOf24 = async() => {'{'}
          <br /> let mnemonic = await generateMnemonic24();
          <br /> console.log(mnemonic)   <span style={{color:'grey'}}>/// result => a safe 24 words mnemonic phrase </span>
          <br />  {'}'}
          <br /> <br />
          analyze12 = async() => {'{'}
          <br /> <br /> var mnemonic = ['add','wealth','wealth','wealth','wealth', <br /> 
            'wealth','wealth','wealth','wealth','wealth', <br /> 
            'wealth','wealth']; <br /> <br />
          let grades = await analysis12(mnemonic); 
          <br /> console.log(mnemonic)           <br />  {'}'}
 <br />  
 <span style={{color:'grey'}}>/// result => 3 grades: first is grade for number of repeating words </span> <br />
            <span style={{color:'grey'}}>/// second is grade for words starting with the same letter </span> <br /> 
            <span style={{color:'grey'}}>/// third is grade for words coming from first 10% of all mnemonic words </span> <br /> 
<span style={{color:'grey'}}>/// The total of them is subtracted to 100 for the result. </span> <br /> 
 <span style={{color:'grey'}}>/// 100 = secure. Less than 100 = less secure </span> <br /> 
 <br /> 

 </div>

                </Grid>

                </Grid>

                </div>
        )
    }
}
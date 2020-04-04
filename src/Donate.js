import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class Donate extends React.Component {


    render(){


    
    

          
        return (


            <Grid container spacing={2}>
            <Grid item xs={2} />
                <Grid item xs={8}>
                    <p>Our service is free and will support the re-creation of millions of wallets. We plan to 
                        bring this service to other blockchains all <span style={{fontWeight:'bold'}}> for free</span>. 
                        Just like other companies we have running costs. You can help us by donating </p>
                       
                       <h3>Bitcoin address </h3>
                       <p>bc1qek0qg937g46rxyzmcyj9qh05n8xm79y40nqalp</p>
                       <img src={require('./icons/btc_qrcode.png')} />
                       <hr />
                       <h3>Ethereum address </h3>
                       <p>0x262bd83Edab0b5957aC4f1F4945637e16dbF1D93 </p>
                       <img src={require('./icons/eth_qrcode.png')} />

                </Grid>

            </Grid>

        )
    }
};
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Donate extends React.Component {

        
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      
    render(){


    
    

          
        return (


            <Grid container spacing={2}>
            <Grid item xs={2} />
                <Grid item xs={8}>
                    <p>Love MetaSafe? Donate <FavoriteIcon htmlColor="#ce0000"/>  </p>
                       
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
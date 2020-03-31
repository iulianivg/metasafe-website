import React from 'react';
import { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default class WHOpage extends React.Component {

    render(){


    
    

          
        return (


            <div>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <h3>Verify companies approved by MetaSafe to use our services </h3>
                            <p>Companies using our services will have a badge with an ID which you can use to verify their identity.</p>
                            <TextField id="standard-basic" label="ID example: 1050"  />

                            </Grid>
        <Grid item xs={12}>
        <Button
        variant="contained"
        color="secondary"
        startIcon={<SearchIcon />}
      >
        Search Now
      </Button>
        </Grid>

                            <Divider style={{width:'100%'}} />

                            <Grid item xs={12}>
                            
                            </Grid>
</Grid>
            </div>

        )
    }
}
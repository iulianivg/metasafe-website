import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Download extends React.Component {


    render()
{
    return (
        <div>
            <h2>Download <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> for Desktop</h2>


            <Grid container spacing={3}>
            <Grid item xs={6}>
            <a href={`https://www.dropbox.com/s/o07jr8mnsa6efxu/MetaSafe-windows.rar?dl=1`}>
            <img src={require('./icons/windows.png')} width="25%" />
            </a>
            <h4><a href={`https://www.dropbox.com/s/o07jr8mnsa6efxu/MetaSafe-windows.rar?dl=1`}>Download (104 MB)</a> for Windows</h4>
            </Grid>
            <Grid item xs={6}>
            <img src={require('./icons/mac.png')} width="25%" />
            <h4>Download for Mac OS</h4>
            <Typography variant="subtitle" color="textSecondary" gutterBottom>
        Coming soon
      </Typography>
            </Grid>
            <Grid item xs={12}>
            <img src={require('./icons/linux.png')} width="15%" />
            <h4>Download for Linux</h4>
            <Typography variant="subtitle" color="textSecondary" gutterBottom>
        Coming soon
      </Typography>
            </Grid>
            </Grid>
        </div>
    )
}
}
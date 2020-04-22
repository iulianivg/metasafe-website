import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Windows from './icons/windows.png';

export default class Download extends React.Component {


    render()
{
    return (
        <div>
            <h2>Download <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> for Desktop</h2>


            <Grid container spacing={3}>
            <Grid item xs={6}>
            <a href={`https://www.dropbox.com/s/tduaa43gjhaamu2/MetaSafe-windows.rar?dl=1`}>
            <img src={require('./icons/windows.png')} width="25%" />
            </a>
            <h4><a href={`https://www.dropbox.com/s/tduaa43gjhaamu2/MetaSafe-windows.rar?dl=1`}>Download (103 MB)</a> for Windows</h4>
            </Grid>
            <Grid item xs={6}>
            <img src={require('./icons/mac.png')} width="25%" />
            <h4>Download for Mac OS</h4>
            </Grid>
            <Grid item xs={12}>
            <img src={require('./icons/linux.png')} width="15%" />
            <h4>Download for Linux</h4>
            </Grid>
            </Grid>
        </div>
    )
}
}
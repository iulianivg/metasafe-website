import React from 'react';
import Container from '@material-ui/core/Container';

export default class Disclaimer extends React.Component {

    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render(){



        return(
            <div>
                <h2>Disclaimer</h2>
                <Container maxWidth="sm">
                <p style={{color:'red'}}>You must apply appropriate security measures when using our tool. MetaSafe is not responsible for your losses and is not a guarantee of security. As cybersecurity is 
                a process and not a one-step solution, you must follow adequate practices. Our recommendation may give you an idea on how to apply security practices but is not a guarantee 
                of security.</p>
                <div style={{textAlign:'left'}}>
                <ul>
                    <li>Download our offline tool from <a href="/download">here</a></li>
                    <li>Always use the desktop <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> application rather than the online website https://metasafe.org</li>
                    <li>When using the desktop application, it is recommended to use your own blockchain node to access data offline. </li>
                    <li>When you find your seed phrase, you should still apply adequate security measures to it</li>
                    <li>Despite being a very efficient tool, MetaSafe is not a guarantee if you don't use it correctly </li>
                    <li>Read this <a href="https://coinsutra.com/keep-recovery-seed-safe-secure/" target="_blank" rel='noopener noreferrer' >article</a> related to seed phrase security</li>
                </ul>
                </div>
                </Container>

            </div>
        )
    }
}



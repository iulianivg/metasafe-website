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
                <p style={{color:'red'}}>You must apply appropriate security measures to your seed phrases. MetaSafe is not responsible for your losses and is not a guarantee of security. As cybersecurity is 
                a process and not a one-step solution, you must follow adequate practices. Our recommendation may give you an idea on how to apply security practices but is not a guarantee 
                of security.</p>
                <div style={{textAlign:'left'}}>
                <ul>
                    <li>Use the desktop <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> application rather than the online website https://metasafe.org</li>
                    <li>When using the desktop application, turn off your internet and then proceed generating or analysing your seed phrase </li>
                    <li>Write your seed phrase in a file and encrypt it</li>
                    <li>Alternatively write your seed phrase on a paper wallet and store it in a safe</li>
                    <li>Memorize your seed phrase </li>
                    <li>Never share you seed phrase with friends or unknown parties</li>
                    <li style={{fontWeight:'bold'}}>Never use the first, second or third account unlocked from your seed phrase </li>
                    <li>Read this <a href="https://coinsutra.com/keep-recovery-seed-safe-secure/" target="_blank" rel='noopener noreferrer' >article</a></li>
                </ul>
                </div>
                </Container>

            </div>
        )
    }
}



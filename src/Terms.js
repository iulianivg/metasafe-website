import React from 'react';
import Grid from '@material-ui/core/Grid';


export default class Terms extends React.Component {

    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render(){


    
    

          
        return (


            <div>

                    <Grid container spacing={3}>

                    <Grid item xs={3} />
                    <Grid item xs={12} sm={7}>
                    <h1>Terms and Conditions</h1>
                    <h2>Updated to 01/04/2020</h2>
                    <p>Greetings! MetaSafe is a client-side tool which allows users 
                        to analyse and generate safe mnemonics to open their Ethereum 
                        account. Those are the Terms and Conditions that you should read carefully.
                        They may also be referred to as <span style={{fontWeight:'bold'}}>"Terms of Service"</span>. They apply on the whole website available at metasafe.org and to your use of MetaSafe 
                        services.</p>
                    <h3>Introduction</h3>
                    <p>
                    The Terms of Service set forth the legally binding terms for your use of the Services. By using the Services, you agree to be bound by the Terms of Service, any additional posted guidelines or rules applicable to specific services and features, 
                    . If you are accepting the Terms of Service on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to the terms set forth herein. If you do not have such authority or do not agree to be
                     bound by the Terms of Service, you may not access or use the Services. You must agree to the Terms of Service and Privacy Policy when you create analyse or generate a mnemonic via the Site, and/or otherwise use the Services.
                    </p>
                    <p>
                        THESE TERMS OF SERVICE WILL CONTAIN ANY INFORMATION REGARDING YOUR LEGAL RIGHTS AND OBLIGATIONS. NOTE THAT 
                        THESE TERMS INCLUDE AN AGREEMENT BETWEEN YOU AND METASAFE WHERE YOU AGREE THAT ANY DISPUTES WILL BE RESOLVED 
                        BY MANDATORY BINDING ARBITRATION AND YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT.
                        </p>
                        <p>
                            We may modify or revise the Terms of Service at any point in time, and you agree to be bound by the 
                            modifications or revisions. We will notify you when major changes are made to the Terms of Service however 
                            you must periodically review the most up-to-date version posted on the website metasafe.org. Your 
                            continued use of Services provided by us indicates your acceptance of such changes. 
                        </p>
                        <h3>Services Eligibility</h3>
                        <p>
                            Our services allow you to created user wallets and analyse your own mnemonic. The 
                            Services are offered and available only if the user is at least 16 years old and resident 
                            in a country where cryptocurrencies are not illegal. By using the Services, you agree and 
                            warrant to be at least 16 years of age and that you will abide by the conditions mentioned in
                            the Terms of Service. 
                            </p>
                            <p>
                            The site is client-side and we will never hold or store your mnemonic on 
                            our database. You will be able to interact with the Site using the interface 
                            which may be directly interacting with other blockchains. 
                            </p>
                            <p>When you access certain features of the Services, you will be able to analyse 
                                your Ethereum mnemonic and the client will apply business logic to determine 
                                how safe your mnemonic is. We do not store data nor we will track you when such
                                operations happen. MetaSafe does not collect or hold your mnemonic information, 
                                and the operations are entirely client side. 
                            </p>
                            <p>If you are an Enterprise Client, you may use our npm package to generate or analyze your user mnemonics. You may opt in to create mnemonics front-end or back-end 
                                depending on your needs. You must let us know if you're using MetaSafe Service such that we can provide you with a badge. Using MetaSafe as an enterprise without our 
                                authorization is a breach of agreement. Fees apply on the creation of your badge and storage of your Service usage on the blockchain. Shall you not respect this 
                                condition you agree that MetaSafe will take you to court in United Kingdom in order to resolve our dispute. 
                            </p>
                            <p>
                                You expressly relieve and release MetaSafe from any and all liability and/or loss arising from your 
                                use of the Services.
                                </p>
                                <h3>Your Rights </h3>
                                <p>
                                Our Services are entirely protected by copyright, trademark and other Laws of the United Kingdom 
                                and foreign countries. You may not remove, alter or obscure any copyright, trademark, service mark or 
                                any other proprietary rights incorporated in or accompanying the Services. 
                                </p>
                                <p> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
                                    BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF 
                                    OR IN CONNECTION WITH THE SOFTWARE
                                </p>
                                <p>
                                    You agree not to interefere with, damage, impair or disable the Services' operations, by any means 
                                    (wehther through automated means or otherwise), including uploading or otherwise disseminating viruses,
                                    worms, spyware, adware or other malicious code. You will not use any robots, spider, scraper or 
                                    automated means to access the services for any porpose other than without our express 
                                    consent. You will not remove, circumvent, disable, disable or damage or interfere with any part 
                                    of the Services or features that enforce limitation of the Services. You will not use the Services 
                                    for any illegal or unauthorized purpose and nor may you, in the use of the Service, violate laws in 
                                    your jurisdiction (including and not limited to intellectual property laws).
                                </p>
                        </Grid>
                        </Grid>
                </div>

        )
    }

}
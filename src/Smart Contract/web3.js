import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);
// just for metamask

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or user is not running metamask
  // set up our own provider that works through infura
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/aee4dd30db8a42aa935d0f714ee521ae'
  );
  web3 = new Web3(provider);
}

export default web3;
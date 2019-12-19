import web3 from './web3js';

import Config from '@/config'

web3.eth.defaultAccount = web3.eth.accounts[0];
var acc = web3.eth.defaultAccount;

var SocialNetworkContract = web3.eth.contract(Config.ABI);

var Social = SocialNetworkContract.at(Config.ContractAddress);
Social.acc = acc;
const HotelBooking = Social;




export default HotelBooking;
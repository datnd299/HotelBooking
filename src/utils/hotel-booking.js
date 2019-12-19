import web3 from './web3js';

import Config from '@/config'
var ckAcc = getCookie('addr')
if(ckAcc){
    web3.eth.defaultAccount=ckAcc;
}else{
    web3.eth.defaultAccount = web3.eth.accounts[1];
}


var acc = web3.eth.defaultAccount;

var SocialNetworkContract = web3.eth.contract(Config.ABI);

var Social = SocialNetworkContract.at(Config.ContractAddress);
Social.acc = acc;
var HotelBooking = Social;

HotelBooking.setAcc = function(addr){
    
    HotelBooking.acc = addr;
    document.cookie = "addr="+addr;
}


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

export default HotelBooking;
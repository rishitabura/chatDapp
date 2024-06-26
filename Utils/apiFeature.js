const { ethers } = require("ethers");

import Web3Modal from "web3modal";

import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const CheckIfWalletConnected = async () => {
  alert("Install MetaMask");
  try {
    if (!window.ethereum) return console.log("Install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    // const secAccount = accounts[1];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    // if (!window.ethereum) return console.log("Install MateMask");

    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });

    if (!window.ethereum) return console.log("Install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

const fetchContract = (signer) =>
  new ethers.Contract(ChatAppAddress, ChatAppABI, signer);

// export const connectingWithContract = async () => {
//   try {
//     const web3modal = new Web3Modal();
//     const connection = await web3modal.connect();
//     console.log(connection);
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     const contract = fetchContract(signer);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// export const converTime = (time) => {
//   const newTime = new Date(time.toNumber());

//   const realTime =
//     newTime.getHours() +
//     "/" +
//     newTime.getMinutes() +
//     "/" +
//     newTime.getSeconds() +
//     "  Date:" +
//     newTime.getDate() +
//     "/" +
//     (newTime.getMonth() + 1) +
//     "/" +
//     newTime.getFullYear();

//   return realTime;
// };
export const convertTime = (time) => {
  // not working
  // // const newTime = new Date(time);
  //  // Convert BigInt to milliseconds (number)
  //  const milliseconds = Number(time); // This may lose precision for large BigInts

  //  // Create a Date object from milliseconds
  //  const newTime = new Date(milliseconds);

  // const realTime =
  //   newTime.getHours() +
  //   ":" +
  //   newTime.getMinutes() +
  //   ":" +
  //   newTime.getSeconds() +
  //   "  Date:" +
  //   newTime.getDate() +
  //   "/" +
  //   (newTime.getMonth() + 1) +
  //   "/" +
  //   newTime.getFullYear();
  // return realTime;


  //display current time - 
  // const date = require('date-and-time');
  // // Create a new Date object
  // const now = new Date();
  // // Format the date and time
  // const formattedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
  // // Display the formatted date and time
  // console.log(formattedDate);
  // return formattedDate;


  // month in words
  const date = require('date-and-time');
  // Create a new Date object
  const now = new Date();
  // Define the custom format for the month
  const customMonthFormatter = date.compile('MMMM'); // This will give the full name of the month
  // Format the date and time
  const formattedDate = date.format(now, 'DD ' + customMonthFormatter + ' YY HH:mm:ss');
  // Display the formatted date and time
  console.log(formattedDate);
  // return the formatted date
  return formattedDate;

  
};

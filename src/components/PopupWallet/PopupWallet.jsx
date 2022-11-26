import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Avatar, Button } from '@mui/material';
import './styles.css';
import metamask from '../../assets/metamask.png';
import coinbase from '../../assets/coinbase.png';
import walletConnect from '../../assets/walletConnect.png';
import phantom from '../../assets/phantom.png';
import coreWallet from '../../assets/coreWallet.png';

import { useSelector, useDispatch } from 'react-redux';
import { CONNECT_ACC, FETCH_SOLIDITY } from '../../constraint/actionTypes';
import { addressReceiver, transactABI, transactAddress } from '../../utils/constants';
import { ethers } from 'ethers';

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(transactAddress, transactABI, signer);
  console.log(contract);
  return contract;
};

function PopupWallet() {
  console.log('mounting component');

  const [balance, setBalance] = useState();

  const dispatch = useDispatch();

  let accounts;

  const web3Handler = async () => {
    console.log('connecting accounts');
    // connect metamask
    accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get signer
    const signer = provider.getSigner();
    //get balance
    const balance_this = await provider.getBalance(accounts[0]);

    const balanceInETH = ethers.utils.formatEther(balance_this);

    setBalance(balanceInETH);

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    console.log('account connected account:', accounts[0]);

    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0],
      },
    });
  };

  const handleClick = () => {
    if (!window.ethereum) return alert('Please install metamask first');
    web3Handler();
  };

  return (
    <Box className="wrapper" sx={{ display: 'flex', position: 'absolute', right: '0' }}>
      <Box className="wallet">
        <Box className="walletUser">
          <Avatar />
          <Typography className="titleUser">My Wallet</Typography>
        </Box>
        <Typography className="slogan">
          If you don't have a wallet yet, you can select a provider and create one now.
        </Typography>
        <Box className="listWallet">
          <Box className="walletItems" onClick={handleClick}>
            <Avatar src={metamask} />
            <Typography className="title">Metamask</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={coinbase} />
            <Typography className="title">Coinbase Wallet</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={walletConnect} />
            <Typography className="title">WalletConnect</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={phantom} />
            <Typography className="title">Phantom</Typography>
          </Box>
          <Box className="walletItems">
            <Avatar src={coreWallet} />
            <Typography className="title">Core</Typography>
          </Box>
        </Box>
        <Button variant="outlined" sx={{ width: '100%', height: '50px' }}>
          Show More
        </Button>
      </Box>
    </Box>
  );
}

export default PopupWallet;

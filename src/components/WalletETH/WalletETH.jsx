import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Box, Avatar, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { CONNECT_ACC, FETCH_SOLIDITY } from '../../constraint/actionTypes';
import { addressReceiver, transactABI, transactAddress } from '../../utils/constants';
import metamask from '../../assets/metamask.png';
import { ethers } from 'ethers';

import './styles.css';

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(transactAddress, transactABI, signer);
  console.log(contract);
  return contract;
};

function WalletETH() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState();
  const dispatch = useDispatch();

  let accounts;

  const web3Handler = async () => {
    // connect metamask
    accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log('Getting provider...');
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    // Get signer
    const signer = provider.getSigner();
    //get balance
    const balance_this = await provider.getBalance(accounts[0]);

    const balanceInETH = ethers.utils.formatEther(balance_this);

    setBalance(balanceInETH);

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });
    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0],
      },
    });
  };

  const handleSend = async () => {
    try {
      if (window.ethereum) {
        //get transac contract
        const contract = getContract();
        //parese to ETH
        const amount_eth = ethers.utils.parseEther(amount);

        const addressTo = addressReceiver;

        //request send eth
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              to: addressTo,
              gas: '0x5208',
              value: amount_eth._hex,
            },
          ],
        });

        const contractHash = await contract.addToBlockchain(addressTo, amount_eth);

        setIsLoading(true);

        console.log('Loading ', contractHash.hash);

        await contractHash.wait();

        console.log('Success', contractHash.hash);

        const transCount = await contract.getTransactionCount();

        setCount(transCount.toNumber());
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!window.ethereum) return alert('Please install metamask first');

    if (!accounts) {
      web3Handler();
    } else {
      handleSend();
    }
  };

  const account_data = useSelector((state) => state.solidity.account);

  const [amount, setAmount] = useState(0);

  if (account_data) {
    web3Handler();
  }

  return (
    <Card sx={{ color: '#000' }}>
      <Box
        className="wallet"
        sx={{
          position: 'absolute',
          right: '0',
          width: 400,
          height: '100%',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
            <Avatar src={metamask} />
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Your Wallet:
            </Typography>
          </Box>
          <Typography className="walletAddress" variant="subtitle1" sx={{ fontStyle: 'bold', color: 'rgb(0,0,0,0.15' }}>
            {account_data ? `${account_data.slice(0, 5) + '...' + account_data.slice(38, 42)}` : 'Connect Wallet'}
          </Typography>
        </Box>
        <Divider sx={{ border: '1px solid #ccc' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '24px',
            padding: ' 16px',
            border: '1px solid #ccc',
            borderRadius: '16px',
          }}
        >
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
            {account_data ? 'Total balance' : ''}
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: '700' }}>
            {account_data ? parseFloat(balance).toFixed(3) + ' ETH' : 'Your Balance'}
          </Typography>

          <Typography variant="subtitle1" noWrap gutterBottom>
            Type amount of money you wanna donate here!
          </Typography>

          <input
            className="wallet_input"
            value={amount}
            step="0.001"
            type="number"
            placeholder="Amount"
            onChange={(e) => {
              console.log(e.target.value);
              setAmount(e.target.value);
            }}
          />
          <Button
            className="wallet__button"
            onClick={handleClick}
            variant="contained"
            color="secondary"
            sx={{ width: '100%', height: '60px', backgroundColor: 'rgb(32, 129, 226)' }}
          >
            <Typography variant="h6" sx={{ fontWeight: '600', color: 'rgba(255,255,255,1)' }}>
              {account_data ? 'Donate' : 'Connect to Wallet'}
            </Typography>
          </Button>
        </Box>
        <Divider sx={{ border: '1px solid #ccc', marginY: '16px' }} />

        <Box sx={{ justifyItems: 'flex-end' }}>
          <Typography>
            For more information about the transparency policy and trust, we will release out history transactions{' '}
            <a target="_blank" href="https://goerli.etherscan.io/address/0x9b729471D9A04ff08884686b347dcd5d8Bb76565">
              here
            </a>{' '}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default WalletETH;

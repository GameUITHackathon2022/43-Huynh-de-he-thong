import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

import nftitems from "../../assets/nftitems.jpg";
import NFTItem from "./NFTItem";
import { useSelector } from "react-redux";


const NFTList = () => {
  let { nftList, isLoading, account, marketplaceContract, nftContract } =
  useSelector((state) => state.solidity);

  let myNFT = nftList.filter(nft=> nft.owner.toLowerCase() == account.toLowerCase())
  console.log(nftList);


  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "flex-end",
        px: "50px",
      }}
    >
      {myNFT?.map(nft => (
        <NFTItem id={nft.id} title={nft.name} image={nft.image} />
      ))}
    </Box>
  );
};

export default NFTList;

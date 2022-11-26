import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

import nftitems from "../../assets/nftitems.jpg";
import NFTItem from "./NFTItem";
import { useSelector } from "react-redux";


const NFTList = ({donate}) => {
  let { nftList, isLoading, account, marketplaceContract, nftContract } =
  useSelector((state) => state.solidity);

  let myNFT = nftList.filter(nft=> nft.owner.toLowerCase() == account?.toLowerCase())
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
        <NFTItem id={nft.tokenId} title={nft.name} image={nft.image} donate={donate} marketplaceContract={marketplaceContract} nftContract={nftContract}/>
      ))}
    </Box>
  );
};

export default NFTList;

import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

import nftitems from "../../assets/nftitems.jpg";
import NFTItem from "./NFTItem";

const NFTList = () => {
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
      <NFTItem />
      <NFTItem />
      <NFTItem />
      <NFTItem />
      <NFTItem />
      <NFTItem />
    </Box>
  );
};

export default NFTList;

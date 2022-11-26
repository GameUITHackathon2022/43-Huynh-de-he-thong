import { Box, CardContent, Typography } from "@mui/material";
import nftitems from "../../assets/nftitems.jpg";
import React from "react";
import "./styles.css";

const NFTItem = () => {
  return (
    <Box className="MyNFTInfo">
      <Box className="MyNFTInfo__container">
        <Box className="MyNFTInfo__headerImg">
          <img src={nftitems} alt="NFT_Image" />
        </Box>
        <CardContent className="MyNFTInfo__content">
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase" }}
            fontWeight={700}
          >
            #1525
          </Typography>
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase" }}
            gutterBottom
            fontWeight={700}
          >
            Super Idol
          </Typography>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase" }}
            fontWeight="700"
          >
            0.434 eth
          </Typography>

          {/* <Typography align="justify" variant="body2">
        {description}
      </Typography> */}
        </CardContent>
      </Box>
    </Box>
  );
};

export default NFTItem;

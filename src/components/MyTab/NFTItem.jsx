import { Box, CardContent, Typography } from "@mui/material";
import nftitems from "../../assets/nftitems.jpg";
import React from "react";
import "./styles.css";

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

const NFTItem = ({id, title, image}) => {
  return (
    <Box className="MyNFTInfo">
      <Box className="MyNFTInfo__container">
        <Box className="MyNFTInfo__headerImg">
          <img src={`data:image/png;base64,${toBase64(image.buffer.data)}`} alt="NFT_Image" />
        </Box>
        <CardContent className="MyNFTInfo__content">
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase" }}
            fontWeight={700}
          >
            #{id}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textTransform: "uppercase" }}
            gutterBottom
            fontWeight={700}
          >
            {title}
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

import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import coverImg from "../../assets/coverImg.jpg";
import avatarImg from "../../assets/avatar.jpg";

// const intial
let account_data = null;
const Accounts = () => {
  return (
    <Box>
      <Box
        sx={{
          minWidth: "100%",
          height: "350px",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <img
          src={coverImg}
          alt="coverImg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          position: "absolute",
          top: "35%",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "green",
            borderRadius: "50%",
            border: "5px solid white",
            backgroundImage: `url(${avatarImg})`,
            backgroundSize: "cover",
            marginLeft: "20px",
          }}
        ></Box>
        <Box
          className="account_info"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Box
            className="left"
            sx={{ display: "flex", flexDirection: "column", margin: "0 20px" }}
          >
            <Typography variant="h4" fontWeight={700}>
              Account1
            </Typography>
            <Box>
              <Typography variant="subtitle2">
                {account_data
                  ? `${
                      account_data.slice(0, 5) +
                      "..." +
                      account_data.slice(38, 42)
                    }`
                  : "Connect Wallet"}
              </Typography>
            </Box>
          </Box>
          <Box className="right" sx={{ display: "flex" }}>
            <Avatar />
            <Avatar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Accounts;

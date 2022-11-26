import { Avatar, Box, Button, IconButton, Typography, CircularProgress } from "@mui/material";
import React from "react";
import coverImg from "../../assets/coverImg.jpg";
import avatarImg from "../../assets/avatar.jpg";
import ethereum from "../../assets/ethereum.svg";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MyTab from "../../components/MyTab/MyTab";
import {useSelector} from 'react-redux'
// const intial
let account_data = null;
const Accounts = () => {
  const {account, isLoading} = useSelector(state=>state.solidity)
  return (
    <Box>
      <Box
        classname="coverImg"
        sx={{
          minWidth: "100%",
          height: "350px",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <img
        class="accountCover"
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
          padding: "0 20px",
          position: "absolute",
          top: "250px",
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
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0 20px",
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {account}
            </Typography>
            <Box sx={{ display: "flex ", gap: "8px" }}>
              <img
                src={ethereum}
                alt="icon"
                srcset=""
                style={{ width: "10px", height: "auto" }}
              />
              <Typography variant="subtitle2">
                {account_data
                  ? `${
                      account_data.slice(0, 5) +
                      "..." +
                      account_data.slice(38, 42)
                    }`
                  : "Connect Wallet"}
              </Typography>
              <Typography variant="subtitle2">Joined November 2022</Typography>
            </Box>
          </Box>
          <Box className="right" sx={{ display: "flex" }}>
            <Button color="inherit" startIcon={<IosShareIcon />}></Button>
            <Button color="inherit" startIcon={<MoreHorizIcon />}></Button>
          </Box>
        </Box>
      </Box>
      {/* tabs */}
      <Box mt={30}>
     { isLoading ? (
    <CircularProgress />
  ) : (
        <MyTab />)}
      </Box>
    </Box>
  );
};

export default Accounts;

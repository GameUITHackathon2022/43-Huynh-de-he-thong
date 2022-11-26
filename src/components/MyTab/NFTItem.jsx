import { Box, CardContent, Typography, TextField, Button } from "@mui/material";
import nftitems from "../../assets/nftitems.jpg";
import React, { useState } from "react";
import "./styles.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

const NFTItem = ({
  id,
  title,
  image,
  donate,
  marketplaceContract,
  nftContract,
  account,
}) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const transNFT = async () => {
    if (donate) {
      await (
        await marketplaceContract.transItem(nftContract.address, id)
      ).wait();
      const noti = {
        account_address: account,
        title: "Donate NFT to system",
        description: desc,
        isRead: false,
      };
      // await api.createNoti(noti)
      window.location.reload();
    }
  };

  const handleClickOpen = () => {
    if (donate) {
      console.log(12)

      setOpen(true);
    }
  };

  const handleClose = () => {
    if (donate) {
      console.log(1)
      setOpen(false);

    }
  };



  return (
    <Box className="MyNFTInfo" >
      <Box className="MyNFTInfo__container" onClick={handleClickOpen}>
        <Box className="MyNFTInfo__headerImg">
          <img
          className="imgTest"
            src={`data:image/png;base64,${toBase64(image.buffer.data)}`}
            alt="NFT_Image"
          />
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

        </CardContent>
      </Box>
      <Dialog open={open}>
        <DialogTitle>Transform NFT To System</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To transform NFT please enter short description and submit. We
            thank you for your contribution.
          </DialogContentText>
          <TextField
            margin="dense"
            label="NFT Name"
            value={title}
            fullWidth
            variant="standard"
            sx={{marginTop: "20px"}}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Short Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            fullWidth
            variant="standard"
            sx={{marginTop: "10px"}}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={transNFT}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NFTItem;

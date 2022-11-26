import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import {
  Avatar,
  Button,
  CardActionArea,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { ethers } from "ethers";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { toBase64, toWei, fromWei } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAuctionById } from "../actions/auction";

const Text = styled.p`
  font-size: 15px;
`;
const CartHeader1 = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuctionDetail = () => {
  const [title, setTitle] = useState("");
  const [isCompaingn, setIsCompaingn] = useState(true);
  const handleSlideChange = () => {
    setIsCompaingn(!isCompaingn);
    // console.log("slide change");
  };

  const { nft_id } = useParams();
  const { currAuction } = useSelector((state) => state.auction);

  const { nftList, marketplaceContract, isLoading } = useSelector(
    (state) => state.solidity
  );

  // useEffect(() => {
  //   const handleCreateAuction = async (itemId, campId) => {
  //     const listingPrice = ethers.utils.parseEther("0.003");
  //     await (
  //       await marketplaceContract.startAuction(itemId, 600, listingPrice)
  //     ).wait();

  //     // const auc = {
  //     //   nft_id: itemId,
  //     //   campaign_id: campId,
  //     //   status: 'Available'
  //     // }
  //     // dispatch(createAuction(auc))
  //   };
  //   handleCreateAuction(4, 1);
  // }, [marketplaceContract]);

  const nft = nftList.filter((nft) => nft.tokenId == nft_id)[0];
  console.log(nft_id);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setTitle(isCompaingn ? nft?.name : currAuction?.title);
  }, [isCompaingn]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionById(nft_id));
  }, [nft_id]);

  const bid = async (e) => {
    // if (price < nft.startPrice) {
    //   alert("price less than current price");
    //   return;
    // }
    await (
      await marketplaceContract.bid(nft.id, { value: toWei(price) })
    ).wait();
  };

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    if (arr != undefined)
      return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
  }

  if (!currAuction) return null;

  let endAt;
  if (nft) {
    endAt = new Date(nft?.endAt * 1000);
    console.log(endAt)
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={5}>
          <Swiper
            navigation={true}
            onSlideChangeTransitionEnd={handleSlideChange}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <SwiperSlide>
              <Card
                sx={{
                  maxWidth: 700,
                  height: 500,
                  marginTop: 3,
                  border: "1px solid #e0e0e0",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="500"
                    image={currAuction?.img1_url}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  maxWidth: 700,
                  width: 600,
                  marginTop: 3,
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <ReceiptLongOutlinedIcon
                        style={{
                          fontSize: 30,
                          marginRight: 10,
                        }}
                      />
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "26px",
                          fontWeight: "600",
                        }}
                        component="div"
                      >
                        Description
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                      color="text.secondary"
                    >
                      {currAuction?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                sx={{
                  maxWidth: 700,
                  height: 500,
                  marginTop: 3,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="500"
                    width="auto"
                    image={`data:image/png;base64,${toBase64(
                      nft?.image?.buffer?.data
                    )}`}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  maxWidth: 700,
                  width: 600,
                  marginTop: 3,
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <ReceiptLongOutlinedIcon
                        style={{
                          fontSize: 30,
                          marginRight: 10,
                        }}
                      />
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "26px",
                          fontWeight: "600",
                        }}
                        component="div"
                      >
                        Description
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                      color="text.secondary"
                    >
                      {nft?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid
          item
          md={12}
          sm={8}
          lg={7}
          sx={{
            height: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Poppins , sans-serif",
              fontWeight: "600",
              paddingTop: "40px",
            }}
          >
            <Typography
              sx={{
                color: "#1868B7",
                marginRight: 1,
                paddingBottom: "20px",
              }}
              variant="h5"
              gutterBottom
            >
              {!isCompaingn ? 'NFT' : 'Campaign'}
            </Typography>
            <VerifiedIcon
              sx={{
                paddingBottom: "20px",
                marginBottom: 1,
                color: "#1868b7",
              }}
            />
          </div>
          <Typography
            sx={{
              color: "#353840",
              fontFamily: "Poppins , sans-serif",
              fontSize: "40px",
              fontWeight: "700",
              paddingBottom: "10px",
            }}
            variant="h3"
            gutterBottom
          >
            {title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "#04111d",
                marginRight: 1,
                fontWeight: "600",
              }}
              variant="h5"
              gutterBottom
            >
              Owned by
            </Typography>
            <Typography
              sx={{
                color: "#1868b7",
                fontWeight: "600",
              }}
              variant="h5"
              gutterBottom
            >
              yolanda22
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <VisibilityOutlinedIcon />
              <p
                style={{
                  color: "#04111d",
                  paddingLeft: "10px",
                  paddingRight: "30px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                404 View
              </p>
            </div>
            <div
              style={{
                color: "##04111d",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: "#04111d",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              />
              <p
                style={{
                  paddingLeft: "10px",
                  color: "#04111d",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                8 Favorites
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgb(229, 232, 235)",
              backgroundColor: "rgb(251, 253, 255)",
              marginTop: "70px",
              borderRadius: "10px ",
              width: "95%",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgb(229, 232, 235)",
                borderColor: "#ABABAB",
                display: "flex",
                alignItems: "center",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <AccessTimeIcon
                sx={{
                  marginLeft: "34px",
                  marginRight: 1,
                  color: "#353840",
                }}
              />
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "Poppins",
                  fontWeight: "520",
                  color: "#353840",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                End in {endAt?.toString()}
              </p>
            </div>

            <div>
              <Typography
                sx={{
                  color: "#707a83",
                  fontSize: "22px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: "35px",
                }}
                variant="h4"
              >
                Current price
              </Typography>
              <div
                style={{
                  display: "flex",
                  paddingBottom: "10px",
                  // alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#353840",
                    fontSize: "34px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    paddingBottom: "10px",
                    marginLeft: "35px",
                  }}
                  variant="h2"
                >
                  {`${nft?.highestBid ? nft?.highestBid : nft?.startPrice} ETH`}
                </Typography>
                {/* <Typography
                  sx={{ 
                    color: "#707a83",
                    fontSize: "20px",
                    marginTop: "15px", 
                    marginLeft: "12px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  variant="h5"
                >
                  $561.22
                </Typography> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingBottom: "30px",
                }}
              >
                <TextField
                  label="Price"
                  type="number"
                  autoComplete="current-password"
                  sx={{
                    width: "66%",
                  }}
                  inputProps={{
                    step: "0.001",
                  }}
                  value={price}
                  onChange={e=>setPrice(e.target.value)}
                />
                <Button
                  sx={{
                    padding: "10px 20px",
                    borderRadius: "12px",
                    fontWeight: "550",
                    fontSize: "15px",
                  }}
                  variant="contained"
                  onClick={bid}
                >
                  <LocalOfferIcon />
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    Make Offer
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuctionDetail;

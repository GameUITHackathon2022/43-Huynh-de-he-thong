import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import slider1 from "../../images/slider4.jpg";
import { Grid, Box, Container, Typography } from "@mui/material";
const SwiperSlide1 = () => {
  return (
    <SwiperSlide>
      <Card
        sx={{
          maxWidth: 200,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            // maxHeight="100"
            image={slider1}
            alt="green iguana"
            sx={{}}
          />
          <CardContent>
            <Typography sx={{ color: "#000" }} variant="h5" component="div">
              What are Blockchain gas fees?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </SwiperSlide>
  );
};

export default SwiperSlide1;

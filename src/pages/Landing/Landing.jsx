import React, { useEffect } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import img1 from "../../assets/logo.svg";
import { getAuction } from "../../actions/auction";
import { useDispatch, useSelector } from "react-redux";
import brow1 from "../../images//browser/brow1.jpg";
import brow2 from "../../images//browser/brow2.jpg";
import brow3 from "../../images//browser/brow3.jpg";
import brow4 from "../../images//browser/brow4.jpg";
import brow5 from "../../images//browser/brow5.jpg";
import brow6 from "../../images//browser/brow6.jpg";
import brow7 from "../../images//browser/brow7.jpg";
import brow8 from "../../images//browser/brow8.jpg";
import brow9 from "../../images//browser/brow9.jpg";
import AuctionItem from "../../components/AuctionItem";
import slider1 from "../../images/slider4.jpg";
import slider2 from "../../images/slider5.jpg";
import slider3 from "../../images/slider6.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import albi from "../../assets/albitrum.png";
import goer from "../../assets/goerli.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {useHistory} from 'react-router-dom'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Landing = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { auctions } = useSelector((state) => state.auction);
  const { nftList } = useSelector((state) => state.solidity);
  let auct
  if (auctions.length > 0 && nftList.length > 0) {
     auct = auctions.map((auc) => {
      for (let i = 0; i < nftList.length; i++) {
        if (auc.nft_id == nftList[i].tokenId) {
          return {
            ...auc,
            currentPrice: `${nftList[i].highestBid} ETH`,
            itemId: nftList[i].id
          };
        }
      }
    });
    console.log(auct);
  }
  const history = useHistory()
  useEffect(() => {
    dispatch(getAuction());
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "white", mt: "20px" }}
        fontWeight={700}
      >
        Make Earth Alive Again
      </Typography>

      <Box sx={{ mt: "50px" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", color: "#fff" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ml:'20px'}}
            >
              <Tab
                label="Recent"
                {...a11yProps(0)}
                sx={{ color: "#fff", fontSize: "18px" }}
              />
              <Tab
                label="Top"
                {...a11yProps(1)}
                sx={{ color: "#fff", fontSize: "18px" }}
              />
            </Tabs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "30px",
                  fontSize: "30px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                All Chains
              </Typography>
            </Box>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container>
              {auct?.map((auc, idx) => (
                <Grid item xs={6} sx={{cursor: 'pointer'}} container onClick={()=>{history.push(`/auction/${auc.nft_id}`)}}>
                  <AuctionItem
                    id={idx + 1}
                    img={auc.img1_url}
                    title={auc.title}
                    price={auc.currentPrice}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container>
              <Grid item xs={6} container>
                <AuctionItem
                  id="1"
                  img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBMWFhIXGRgWFxUXFRYYFhUVFRYYFhgTFhYaHSggGBolGxcaITIhJSkrMS4uFyAzODMsNyguLisBCgoKDg0OGxAQGy0lICYyLS0vMC0wLS8vLS8tLSstLy0wLTAtLS0vKy0tLi0tLS0tLS0tLS0tLS0tLS4tLS0tL//AABEIALEBHAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EADwQAAEDAgQDBgQEAwgDAAAAAAEAAhEDIQQSMUEFUZETIjJhcYEGobHBI0LR8FJichQWMzSCsuHxFSRD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAQIDBgf/xAA3EQABAwIDBQYFAgYDAAAAAAABAAIRAyEEMUEFElFhcROBkaGx8BQiMtHhUsEGM0JykvEVFsL/2gAMAwEAAhEDEQA/ALDMeZ6pmPM9Vii1XzaSssx5nqmY8z1WKIklZZjzPVMx5nqsURJKyzHmeqZjzPVYoiSVlmPM9UzHmeqxREkrLMeZ6oCeZ6rFSsasErZskrJjStinSXtGmt2lSUd74VhRoyoWUVmKC3qdFSmkBqorqwbcmysqeEJsFWOoKF9FWTvlsgw7nCQOfyUVm1cOf6o6rtU2VWAy81SvpqBwKuqmCdMRo6D5LQxOFc3Ue/8AyrGniqbnbgcJziffvqFT18JUa3fgxlN/fvktLMeZ6rzMeZ6o8LFTAVXEkLLMeZ6pmPM9ViiLElZZjzPVMx5nqsURJKyzHmeqZjzPVYoiSVlmPM9UzHmeqxREkrLMeZ6pmPM9ViiJJWWY8z1TMeZ6rFESSssx5nqpKbjGp6qFS09EWzSZUSIiLRERERERERERERERERetWzRatdi3KAXN5Xeg2StygxWFGmtXDtVvQw5iVVYrE06N3mPP0lekweHc/wCkLBgCyqUs3hvtbZMNhoeM3ek6c7fqugpNgahvk0BVdHe2hTdJ3WzFhJ45kgDnmTwXo6dBlEgi5XK4igRaNeam4bTc0XAg3ne9va31V5iwXDQxIN/sq7GuEWVVjMN8NU3WmQRIJETcjn4qQTvBZy33sPnqq3HBt5vr1Wo7EmYumPrxScbf6yQN7QAZ9FyZvEi/v08lHqNAEKiqRLgNjlt9bKFT0uG1A2YAG8zPppp53XmJa1oBbpEG+YzeRp+5XqMFtUCWVnTz+68rtDZEkOw4HMfuNO7VQovA8c+n3XquaGIp127zCqPEYWph3btQfZERF2UdERERERERERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIiKShRLjlGp0Hn5eajRZgxKyYrLA0S4mPC1pc7nZVjSrrheNZlfTcQ0uAEjcC9/NcXAGoxhMAnxgEx3mJ4i2qtdkta6oS4TA4T71hS/DvEA6RlvcSOV/F0HVXj8W0WCreCMos7rTLrn2XtejLvLyXktu06dPGvbTNjcjgdR+/LLRezwZmkJVix4lpBi4+equqR/hFv4j9lz1PDu7p2Em+hj9lXFOr2glpM8tuq32MS1rxF7EC0nPImwsOROhspb4MKTEkXkkmNB+gVPiXTaPv7q3ZSeAZF/ay5jjGLNKm5/wCc91oAmHGw6a+ymVcGMU5jnNIJkQbHvOc6+yFxq1N0QPf44qh4lxktqFtNtMtaYkmPD4zrzsFo1OLPJBc2m4jKMuexcTMEB2wVVVrt/iaW/wAzYJa08wD4n+aywdHO4g5QRNw6+d3jMZthA+avv+NwVGnJpiwzgk2GdrknkuJe4nNXdb4me8QKbC0k3Zn8I3IO/IKlxXxB2bXfhvLsomCbEmzZjlfqqPHYgOJDhUDTzNzTp85AIzEDfX1WoA0d41CCO+e6RL3+BvdJ01j+pd27KwgEdkPfeuZMrrfhTFur4j/DIDCA455vHeEZb5SQPORzXaY7hGaMgAsbydZG2i5PhDv7NSAk5jqZJOtzJ1uT7ALp+F8TL2wbz+7rymPr9jiy/DANDfltrxPj6LnWo06zCypcKnxmHLHZT7HmFrqy4ziWkgSMwOgvFvL67qtV5s7FfEUQXfULH79+a8ftHCfD1oH0m4+3dMIiIpyr0REREREREREREUtPRRKWnoi2bmokREWqIiIiIiIiIiIi9BVli2ds0VWDv6VG+ZsH/wCrfzlViu8ZUFGmxlPxkTNtDcT6i/oimYUNIf2n0QJ4zNi3nmI1BK5/GPLWnmOXKFBhsLXeCQwgWubWIm3T5rqhiKj4dTc3JIDgGMJaTzdlkzt+oUuKoVXMOQguBgbkrzu2HsbVAzJHCwuefkvS7JYKdItaSRMgwBIgZQTPkdCAZVRw3A1xDz3fKZfN7EecK2o4olwLjcO9oy6KprcXOFYe2e3NEZbOvrePpr6KLhPEe0bneCDMlgBEHa2xIIKYXADsyarRfLQgevshW9ehim0hX3SGzGU52BgX3eflddg7EggNnu6n9OqxwlZ7amZ1X8IkNaxtM5rjQmSTJGwGy58YnO4teSKbW5nQHS6SQG2udPmFBgcVJz0m9mwOa1zdA4PLGB1hcguBkbsIUzC4NtEg054AeJn8xpbIrl29QEB/C/Ur6JXxLch8TbHvdm63n3mx1XAcfDaxa3tXB94aSJzPABlsCCLjRS43j73NcHtyARLjIIBIl99A0HN0XlfCOc002N/DnK7NuQcptu289VNe8zNOZbyAOXMcCsdte4XNY3hFduhDxyPePdHcaJB31NlRY3B1G2fScPy+EABz/G/tO8Yi19iOS+jcIeS0B7paHOaHkmXMY9zWvM6y0AzvqqL4wrzUJZMTaOXqrPeLc790ff33LWmXEGTK4inXYIh72sNyNPw2d0CRMFzvLVb/AAzAPfUa45XMBzuflaCXm7NgZA71/MK34fwoVwe0ZmJLRcQ5w2GfUwdpXZ0sOaTQxkGBBbz597S+sGbLlXxJZADSSfTiON9Myt2tL53TukZE5SctdPeapG5MmUzNhpOlgbeu3IqXh2IqOOWlTMQ5oe4lrbGBcXB1trosMd42mkIdI7pE5THiEG9lLwbiYo2LTBdJMauOpXlcbh6bW9rT/qvB5nlFv9cJgYV1Vrzh6pBLbEtmxGhsL8YyyzssMRwKrT77jmnVxkmNB5abW0UFVkEt1gxImD6KwxWNqmr2lJxa28793k4enNbeIqdmO1yhtV0xoYiAYGjed/kpWyQC9xE5CciJm3zW8IBE3PDhteiyqwfMBu3M/pNrC0kmAAYnQquxGE7IfiWedKe4H8x58hrzjfTXpcSZJkm5J1JXiu15V7muPyiB5954+A5IiIi0RERERERERS09FEpaeiLZuaiRERaoiIiIiIiIiIiKShGYZvDv5gXj9817iKxe4udqTPTl5FRIi33zu7ukz+3leOpW5wpzxVbk1NiDoRyPkurfWZTaHAktmJJ8J5ea5fgz8ryYNwYPuFPX4l2brDM0iHs/i5+nkdlGxGEp4hsPFxkdR0Vvs/GfDU7mxPWOca8xwyvCrKvDKTsQ57e9maWtLnGGVDo42MAO3gxY7ErzHYymx7WBxe+ctQtIc1rAbNzwO0e0yM0XBM6CNqtwvM5j8O7NSfYOP5eYcDqQFaUfg2mHT+TUAWJ9TsFjcNNm7Mxqc17XZu0GYtj27QBsItdr2kWg55XtANnTvbwW6OEh1Nj2vy5RLS2D3XQSDPiBygkcwLgrFmDc9wc+rIEkNY3IAdMxGZxJuY70XmJCta2FDKYY0QBoB9IVeKJBDhPmNLfdZY54c2m0GLE3k5359w4kqvcxo+nTLp3WVZxPh1w2m0BkAE66SO8Td1lrf2HKzs21amTZhf3fSRDsvlmiLaWVxiair8TVEKxpYOm2o+qJl3PK0QOXnzXEvNgoWvytAOUbANEDyACqeIY5+bI2W3AzX35QsOK1o7wcZEGJHUAqpxONqTm+g09Ouqj4zEFgNO4yyzLdb2Iy0uOSwBdX/wAOz2xDn+EEtaXCXO0EDeNeivsbig1jnVGiQPELHTLECxJByg7SvmTq8mSVvDidV7Qx7y5oMgG99NdSvM1atbtN5jyG5Qb2meneACNCFPoVW02bpbfOefvxXTcMxTXO74GaZBjQfp5c1fUMdRf3S3Wx5Tv81xdAmJGo+6veHN7FoqVPG69Nh5bvI5chv6a2zadLFtbUNiLW0/Go6rzzTiMHVNMGW/UXHhOZP6pseLss1t46j2DQ5tybNkRkJBJJE3MacteSr+1z0HA6sJI9Khv9Ap+Imo9tpc0HMdyDf3I16qra7XzseoP1AUulRZRYGMEAKsxmKc+qTfdII8Rn1BDcsoAyCIiLqqxERERERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIilw2XOM3hm/pN1EpcNVyva47FCtm/UJ4rosW2Zd+UCP+B++S5TE1JJXQHGtdTc0G8yPMEAfZczUKyp2KeHQQui+EwRncfC8ju7GN/W+vqux4cOa5/4cYKQYH2tIJHOb9Cuh/tBLQQPON1BpM7V5eXZE2i4AgdROYHgvV4JnY0GMjST1Nz5kqTFvCp8XWUuJxOuvuqXG4hXNMACy2e6VDi66qcRXWWJrqm4liSGOI1/YldHuDGlx0uuea0uKYhvaSZJESNvRR0scHnv2iI122nZVFSosqJsvO08W/tS8AAEyRx6629hbuEBXPZUjo4CCdvNZ4cAxH79VXUWqxbTiHC0/IhbVC19wwCM4nLLy5cVyIPFX/BBSaHVKhBymGUt3k6E/wAg/fnFjMQ91QveZcTJPtoPJZ8MpB3ee0RzFpP3UnFMPDhGhmPku+Fw1RgBEbp8SdCfQQoe1nb+Gn9JH2/cKz4XirC60eKUw2q4N0MW5SJI6qDAVcphMVOc5jJ5+1lJVBUqb1IDmsV4gRAoiIiIsIiIiIiIiIpaeiiUtPRFs3NRIiItUREREREREREREXjl6vHIVlYZjtrsteoVvU8pEE5XflO3oRy89vTTHijb5ojNqP4XN1Hrp7ELl2kP3CPfvwjhBUsYcmiajTMRbUT9jHIgzNiB3+EI7Jo2yj/aFrYut2TXFsRrHnp0UPDcTNGmZ2j3bY/RaXGiXNEaA3+ylYi1I1GiXAW4/wCtV65jwWg6QFhh8c97oMf9/ZaPE3gEib7jcLXw9Qte28Zhb3GketlXfEVVzclUOu4Frv6qZi/nBHTzVbhtoPptioCTN73A96KSKAfT7RpUeJrqqxjg4EFQtx5fIIv5bztHNalXEK6Y9lZki4P+lHghYYTAvqVG0xq4xOwG7vQC63+I8M7A02k3cyT/AFz3o8rwPRbfwsAX1Kh0Y35uvPRp68gV78TU3GpTptBcWU2yGie88k3idbc9rqirUBTrFlPICTPvhCmikDQ33ZkwFq4emrOjSgA2M7efoqhoew5XAg8iIVxwrvOAJgm19Ji3zW1Fu+7ONZ4RnxmyjObAV9hrj0H0Cj4zoz1P0avcJVixEGTIPkRAPK4UHGapJYN7nqQPsrl1Qne/Ta/E5+hufW8Ve0ABhnDp6hagddZzOqiykGDqpAopuV5d1rKQIgRYC1RERFhERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIi8K9XhQrKwJi68r4rNaLzfkRzjbXyUgcQZBg81a8Mp16oLqdTNUZrSJOVwjcz81HrSIIEx4+nr5qy2cztXGkHEEjgCLX4ybSIDSdQRC84NiS2hE3GYtHlYT8z1U1THgOLKlgdDsWn7hYV8DlGY0yyd2kua241EA5bchEDzVdiAKuZlQgWEFpFnbEbQTIIncaSo9XGmk10Eg59cwbHQN3f8epXpmYV9Kmxj4tw4KuxeLORrwO6x5E+jv+FtfEmGc/DuLP8A5uD/ADLSC0j6GP2dz4cwAdRbTMODmumdySXR9Vmyl3SyLAFjrknLpuYsFW743r6kx6KbQqNZTdTOuS4h9P8AANSn+Qi48QJNifeOoVjW4eypinvj8J2HdigNu+wQPZzwfZTcOwwAykSKhqsePUNn3soajjQoVQXZslCpTY+IzU6lankkHwuBNRpbtkhW7sY6vDaQgiGiODoHiCPDoozG7sg9Vv8AwlhYoMLheo7OeWUbkz/C0nbW2hBsKPatNaq4tyvcahDCS4MYQG5hAmBlmDutLB1alBtKgacvLabXuLiG02gBzu6LlxgjWJvFluU3GriezY8MDKcTAsJDnRO/hHqVXYmp2m9UkQ4z1g+lp5275lWo1zGtbkB5qTjGEpVAADLy/PG4ZeXehJAHP2VFjaBoOgA30zDXy6R1XQYXCPbWcG1O44TlF7EC0/uy1atPO9zH6ZW1W8yQHNLZ8yR8lpg6/ZOJcflgz32sON4jmohOikw1UEyQXG0mYExfa5m68xDJrDNAsDE+ETAueZBKhoOhskgMbJsdgSAY84st7hvDn1aL61T8NrjmLyJOQCGMaN+fnI3lWvxe84NGXWRbviZz1m0SDMbE4btqJAzzHUceGuZAGZWljagc8ub4bAHnAiVgFgwmFI1SjZeOe7eJcdVkEREC0RERFhERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIiIiLKxcFLgsY6k9tRgu0zcHTefIqMhYELC6U3uY4ObmF3+OqNIZXZdrokHkRp6rmcRwJtUl7i+mNnNLehGpEc1cfCOJD6Jou1YbDydJ+s/JWP8A4MGRNtuY8vMKqr4d7qki/LT7r6FSrfE0KdYXEXHPI+B8wqLg2BFNgYKocQIzRFw6WmJO1j7rfp8DcS57XNcSD3dLkc1ifhl4dPaADllmeqsKWELdCuQw7XCKjSO9SWUKTxIBHf8AlfO6eFezHOpPaW5S58HftABI5jW62uO8H7Rpbo4EOBOjgCDld5HKBP8AKOS7TimDFVt4zt8Lt/6SeRWjDXinNiQ6m71gub8xHutXgirvMsbR43879LqJWoljr65LlXYwPPaPsWMOcHWWk/qFlwb4TxtR4xJLaIMznnM5j7uAYNJsBJEZV0vC+E0y7tXtE2sRqWnuk+n1A5K8qMc7db4RrWMFtMuq7UMMXM3nKlZw/snudnaQWkDW0ghU/G8DSeQW1XCpDgxrQJPh18hAvaJXRYjgjnkEPA5gtmffZQN+FqxfnqVGQBlaGtIDWzMAfUytfh3NbDGHlr+VtVpU2CGtk8zbrEqr4b8OhzWU6rTlBDoDm96NGuA2WfxjjpeKDPAwCQN3OH0At1XUNosoU3POjQZO5hfOq1Uvc57tXXPqTKnYKh2YM/eFRbcrdhhm0Abuz6DTxgc4IWLQswFiAswpq8iUREWVqiIiIiIiIiIiIilp6KJS09EWzc1EiIi1RERERERERERERERERYkLJFhZWeExT6Tw+mYcPmN7bq8b8VPi/dPuftC54hYkLR1Nr81YYLaeIwk9kbcDce+hHNX/APeY7un0n7rNvxI1xgmOv0XNlqwLFz+GYdT4qyH8SYwGSGHlu/mV3lKq4iSqziIIe3J+d7R7gwflfqt7hD5wzHnU5vkS37LLBUw50n8neHrBb9yq2rSJ+X37hezJZiqDXtyIa4d9/QlbL7CyqsZxnsjDiQeSuqIlcJxgziHnzEe1h9FIo0g83NlD2xtB2Cog0wJJgTkLXP7Z68lcf3n5E9Vm34oP8U+5/RcyGrMNUr4dvPxXl/8AseMiPl/x/KsuKcZqVwGuswXyi8nnO6rwEAWQC7BoAgKkr4ipXealQyT76DoLIAvURbLiiIiLCIiIiIiIiIiIiKWnoolLT0RbNzUSIiLVERERERERERERERERERERF4QvUSEWBC8hSLyFhZldfwJv/psP9f8AuKy4Qe7UPmB9T91tcNp5cFTHLN9T+q0+FWpP83n6NVfXs/xX1DZrSMHSadGt9ArHh1yuG4k38Z/qfqu44Ld3uuO44yMTUH809f8AtdsKLSqP+Kf5bP7v2/CrgFkAvV6pS8XK8AXqIsrCIiIiIiIiIiIiIiIiIiIiKWnoolLT0RbNzWaIiLqiIiIiIiIiIiIiIiIiIiIiIiIiIiysHJdvS/yrPT9FXcO/wj/U77IirK2a+oYP+W3oPQLd4Nr7rm+Pf5mp7f7URSMN9KoP4l/ks/u/8uWiiIpS8eiIiIiIiIiIiIiIiIiIiIiIiIikZoiIstzX/9k="
                  title="Donate to save enviroment"
                  price="0.005 ETH"
                />
              </Grid>
              <Grid item xs={6} container>
                <AuctionItem
                  id="1"
                  img="data:image/jpeg;base64,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"
                  title="Donate to save enviroment"
                  price="0.005 ETH"
                />
              </Grid>
              <Grid item xs={6} container>
                <AuctionItem
                  id="1"
                  img="data:image/jpeg;base64,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"
                  title="Donate to save enviroment"
                  price="0.005 ETH"
                />
              </Grid>
              <Grid item xs={6} container>
                <AuctionItem
                  id="1"
                  img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBMWFhIXGRgWFxUXFRYYFhUVFRYYFhgTFhYaHSggGBolGxcaITIhJSkrMS4uFyAzODMsNyguLisBCgoKDg0OGxAQGy0lICYyLS0vMC0wLS8vLS8tLSstLy0wLTAtLS0vKy0tLi0tLS0tLS0tLS0tLS0tLS4tLS0tL//AABEIALEBHAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EADwQAAEDAgQDBgQEAwgDAAAAAAEAAhEDIQQSMUEFUZETIjJhcYEGobHBI0LR8FJichQWMzSCsuHxFSRD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAQIDBgf/xAA3EQABAwIDBQYFAgYDAAAAAAABAAIRAyEEMUEFElFhcROBkaGx8BQiMtHhUsEGM0JykvEVFsL/2gAMAwEAAhEDEQA/ALDMeZ6pmPM9Vii1XzaSssx5nqmY8z1WKIklZZjzPVMx5nqsURJKyzHmeqZjzPVYoiSVlmPM9UzHmeqxREkrLMeZ6oCeZ6rFSsasErZskrJjStinSXtGmt2lSUd74VhRoyoWUVmKC3qdFSmkBqorqwbcmysqeEJsFWOoKF9FWTvlsgw7nCQOfyUVm1cOf6o6rtU2VWAy81SvpqBwKuqmCdMRo6D5LQxOFc3Ue/8AyrGniqbnbgcJziffvqFT18JUa3fgxlN/fvktLMeZ6rzMeZ6o8LFTAVXEkLLMeZ6pmPM9ViiLElZZjzPVMx5nqsURJKyzHmeqZjzPVYoiSVlmPM9UzHmeqxREkrLMeZ6pmPM9ViiJJWWY8z1TMeZ6rFESSssx5nqpKbjGp6qFS09EWzSZUSIiLRERERERERERERERERetWzRatdi3KAXN5Xeg2StygxWFGmtXDtVvQw5iVVYrE06N3mPP0lekweHc/wCkLBgCyqUs3hvtbZMNhoeM3ek6c7fqugpNgahvk0BVdHe2hTdJ3WzFhJ45kgDnmTwXo6dBlEgi5XK4igRaNeam4bTc0XAg3ne9va31V5iwXDQxIN/sq7GuEWVVjMN8NU3WmQRIJETcjn4qQTvBZy33sPnqq3HBt5vr1Wo7EmYumPrxScbf6yQN7QAZ9FyZvEi/v08lHqNAEKiqRLgNjlt9bKFT0uG1A2YAG8zPppp53XmJa1oBbpEG+YzeRp+5XqMFtUCWVnTz+68rtDZEkOw4HMfuNO7VQovA8c+n3XquaGIp127zCqPEYWph3btQfZERF2UdERERERERERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIiKShRLjlGp0Hn5eajRZgxKyYrLA0S4mPC1pc7nZVjSrrheNZlfTcQ0uAEjcC9/NcXAGoxhMAnxgEx3mJ4i2qtdkta6oS4TA4T71hS/DvEA6RlvcSOV/F0HVXj8W0WCreCMos7rTLrn2XtejLvLyXktu06dPGvbTNjcjgdR+/LLRezwZmkJVix4lpBi4+equqR/hFv4j9lz1PDu7p2Em+hj9lXFOr2glpM8tuq32MS1rxF7EC0nPImwsOROhspb4MKTEkXkkmNB+gVPiXTaPv7q3ZSeAZF/ay5jjGLNKm5/wCc91oAmHGw6a+ymVcGMU5jnNIJkQbHvOc6+yFxq1N0QPf44qh4lxktqFtNtMtaYkmPD4zrzsFo1OLPJBc2m4jKMuexcTMEB2wVVVrt/iaW/wAzYJa08wD4n+aywdHO4g5QRNw6+d3jMZthA+avv+NwVGnJpiwzgk2GdrknkuJe4nNXdb4me8QKbC0k3Zn8I3IO/IKlxXxB2bXfhvLsomCbEmzZjlfqqPHYgOJDhUDTzNzTp85AIzEDfX1WoA0d41CCO+e6RL3+BvdJ01j+pd27KwgEdkPfeuZMrrfhTFur4j/DIDCA455vHeEZb5SQPORzXaY7hGaMgAsbydZG2i5PhDv7NSAk5jqZJOtzJ1uT7ALp+F8TL2wbz+7rymPr9jiy/DANDfltrxPj6LnWo06zCypcKnxmHLHZT7HmFrqy4ziWkgSMwOgvFvL67qtV5s7FfEUQXfULH79+a8ftHCfD1oH0m4+3dMIiIpyr0REREREREREREUtPRRKWnoi2bmokREWqIiIiIiIiIiIi9BVli2ds0VWDv6VG+ZsH/wCrfzlViu8ZUFGmxlPxkTNtDcT6i/oimYUNIf2n0QJ4zNi3nmI1BK5/GPLWnmOXKFBhsLXeCQwgWubWIm3T5rqhiKj4dTc3JIDgGMJaTzdlkzt+oUuKoVXMOQguBgbkrzu2HsbVAzJHCwuefkvS7JYKdItaSRMgwBIgZQTPkdCAZVRw3A1xDz3fKZfN7EecK2o4olwLjcO9oy6KprcXOFYe2e3NEZbOvrePpr6KLhPEe0bneCDMlgBEHa2xIIKYXADsyarRfLQgevshW9ehim0hX3SGzGU52BgX3eflddg7EggNnu6n9OqxwlZ7amZ1X8IkNaxtM5rjQmSTJGwGy58YnO4teSKbW5nQHS6SQG2udPmFBgcVJz0m9mwOa1zdA4PLGB1hcguBkbsIUzC4NtEg054AeJn8xpbIrl29QEB/C/Ur6JXxLch8TbHvdm63n3mx1XAcfDaxa3tXB94aSJzPABlsCCLjRS43j73NcHtyARLjIIBIl99A0HN0XlfCOc002N/DnK7NuQcptu289VNe8zNOZbyAOXMcCsdte4XNY3hFduhDxyPePdHcaJB31NlRY3B1G2fScPy+EABz/G/tO8Yi19iOS+jcIeS0B7paHOaHkmXMY9zWvM6y0AzvqqL4wrzUJZMTaOXqrPeLc790ff33LWmXEGTK4inXYIh72sNyNPw2d0CRMFzvLVb/AAzAPfUa45XMBzuflaCXm7NgZA71/MK34fwoVwe0ZmJLRcQ5w2GfUwdpXZ0sOaTQxkGBBbz597S+sGbLlXxJZADSSfTiON9Myt2tL53TukZE5SctdPeapG5MmUzNhpOlgbeu3IqXh2IqOOWlTMQ5oe4lrbGBcXB1trosMd42mkIdI7pE5THiEG9lLwbiYo2LTBdJMauOpXlcbh6bW9rT/qvB5nlFv9cJgYV1Vrzh6pBLbEtmxGhsL8YyyzssMRwKrT77jmnVxkmNB5abW0UFVkEt1gxImD6KwxWNqmr2lJxa28793k4enNbeIqdmO1yhtV0xoYiAYGjed/kpWyQC9xE5CciJm3zW8IBE3PDhteiyqwfMBu3M/pNrC0kmAAYnQquxGE7IfiWedKe4H8x58hrzjfTXpcSZJkm5J1JXiu15V7muPyiB5954+A5IiIi0RERERERERS09FEpaeiLZuaiRERaoiIiIiIiIiIiKShGYZvDv5gXj9817iKxe4udqTPTl5FRIi33zu7ukz+3leOpW5wpzxVbk1NiDoRyPkurfWZTaHAktmJJ8J5ea5fgz8ryYNwYPuFPX4l2brDM0iHs/i5+nkdlGxGEp4hsPFxkdR0Vvs/GfDU7mxPWOca8xwyvCrKvDKTsQ57e9maWtLnGGVDo42MAO3gxY7ErzHYymx7WBxe+ctQtIc1rAbNzwO0e0yM0XBM6CNqtwvM5j8O7NSfYOP5eYcDqQFaUfg2mHT+TUAWJ9TsFjcNNm7Mxqc17XZu0GYtj27QBsItdr2kWg55XtANnTvbwW6OEh1Nj2vy5RLS2D3XQSDPiBygkcwLgrFmDc9wc+rIEkNY3IAdMxGZxJuY70XmJCta2FDKYY0QBoB9IVeKJBDhPmNLfdZY54c2m0GLE3k5359w4kqvcxo+nTLp3WVZxPh1w2m0BkAE66SO8Td1lrf2HKzs21amTZhf3fSRDsvlmiLaWVxiair8TVEKxpYOm2o+qJl3PK0QOXnzXEvNgoWvytAOUbANEDyACqeIY5+bI2W3AzX35QsOK1o7wcZEGJHUAqpxONqTm+g09Ouqj4zEFgNO4yyzLdb2Iy0uOSwBdX/wAOz2xDn+EEtaXCXO0EDeNeivsbig1jnVGiQPELHTLECxJByg7SvmTq8mSVvDidV7Qx7y5oMgG99NdSvM1atbtN5jyG5Qb2meneACNCFPoVW02bpbfOefvxXTcMxTXO74GaZBjQfp5c1fUMdRf3S3Wx5Tv81xdAmJGo+6veHN7FoqVPG69Nh5bvI5chv6a2zadLFtbUNiLW0/Go6rzzTiMHVNMGW/UXHhOZP6pseLss1t46j2DQ5tybNkRkJBJJE3MacteSr+1z0HA6sJI9Khv9Ap+Imo9tpc0HMdyDf3I16qra7XzseoP1AUulRZRYGMEAKsxmKc+qTfdII8Rn1BDcsoAyCIiLqqxERERERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIilw2XOM3hm/pN1EpcNVyva47FCtm/UJ4rosW2Zd+UCP+B++S5TE1JJXQHGtdTc0G8yPMEAfZczUKyp2KeHQQui+EwRncfC8ju7GN/W+vqux4cOa5/4cYKQYH2tIJHOb9Cuh/tBLQQPON1BpM7V5eXZE2i4AgdROYHgvV4JnY0GMjST1Nz5kqTFvCp8XWUuJxOuvuqXG4hXNMACy2e6VDi66qcRXWWJrqm4liSGOI1/YldHuDGlx0uuea0uKYhvaSZJESNvRR0scHnv2iI122nZVFSosqJsvO08W/tS8AAEyRx6629hbuEBXPZUjo4CCdvNZ4cAxH79VXUWqxbTiHC0/IhbVC19wwCM4nLLy5cVyIPFX/BBSaHVKhBymGUt3k6E/wAg/fnFjMQ91QveZcTJPtoPJZ8MpB3ee0RzFpP3UnFMPDhGhmPku+Fw1RgBEbp8SdCfQQoe1nb+Gn9JH2/cKz4XirC60eKUw2q4N0MW5SJI6qDAVcphMVOc5jJ5+1lJVBUqb1IDmsV4gRAoiIiIsIiIiIiIiIpaeiiUtPRFs3NRIiItUREREREREREREXjl6vHIVlYZjtrsteoVvU8pEE5XflO3oRy89vTTHijb5ojNqP4XN1Hrp7ELl2kP3CPfvwjhBUsYcmiajTMRbUT9jHIgzNiB3+EI7Jo2yj/aFrYut2TXFsRrHnp0UPDcTNGmZ2j3bY/RaXGiXNEaA3+ylYi1I1GiXAW4/wCtV65jwWg6QFhh8c97oMf9/ZaPE3gEib7jcLXw9Qte28Zhb3GketlXfEVVzclUOu4Frv6qZi/nBHTzVbhtoPptioCTN73A96KSKAfT7RpUeJrqqxjg4EFQtx5fIIv5bztHNalXEK6Y9lZki4P+lHghYYTAvqVG0xq4xOwG7vQC63+I8M7A02k3cyT/AFz3o8rwPRbfwsAX1Kh0Y35uvPRp68gV78TU3GpTptBcWU2yGie88k3idbc9rqirUBTrFlPICTPvhCmikDQ33ZkwFq4emrOjSgA2M7efoqhoew5XAg8iIVxwrvOAJgm19Ji3zW1Fu+7ONZ4RnxmyjObAV9hrj0H0Cj4zoz1P0avcJVixEGTIPkRAPK4UHGapJYN7nqQPsrl1Qne/Ta/E5+hufW8Ve0ABhnDp6hagddZzOqiykGDqpAopuV5d1rKQIgRYC1RERFhERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIi8K9XhQrKwJi68r4rNaLzfkRzjbXyUgcQZBg81a8Mp16oLqdTNUZrSJOVwjcz81HrSIIEx4+nr5qy2cztXGkHEEjgCLX4ybSIDSdQRC84NiS2hE3GYtHlYT8z1U1THgOLKlgdDsWn7hYV8DlGY0yyd2kua241EA5bchEDzVdiAKuZlQgWEFpFnbEbQTIIncaSo9XGmk10Eg59cwbHQN3f8epXpmYV9Kmxj4tw4KuxeLORrwO6x5E+jv+FtfEmGc/DuLP8A5uD/ADLSC0j6GP2dz4cwAdRbTMODmumdySXR9Vmyl3SyLAFjrknLpuYsFW743r6kx6KbQqNZTdTOuS4h9P8AANSn+Qi48QJNifeOoVjW4eypinvj8J2HdigNu+wQPZzwfZTcOwwAykSKhqsePUNn3soajjQoVQXZslCpTY+IzU6lankkHwuBNRpbtkhW7sY6vDaQgiGiODoHiCPDoozG7sg9Vv8AwlhYoMLheo7OeWUbkz/C0nbW2hBsKPatNaq4tyvcahDCS4MYQG5hAmBlmDutLB1alBtKgacvLabXuLiG02gBzu6LlxgjWJvFluU3GriezY8MDKcTAsJDnRO/hHqVXYmp2m9UkQ4z1g+lp5275lWo1zGtbkB5qTjGEpVAADLy/PG4ZeXehJAHP2VFjaBoOgA30zDXy6R1XQYXCPbWcG1O44TlF7EC0/uy1atPO9zH6ZW1W8yQHNLZ8yR8lpg6/ZOJcflgz32sON4jmohOikw1UEyQXG0mYExfa5m68xDJrDNAsDE+ETAueZBKhoOhskgMbJsdgSAY84st7hvDn1aL61T8NrjmLyJOQCGMaN+fnI3lWvxe84NGXWRbviZz1m0SDMbE4btqJAzzHUceGuZAGZWljagc8ub4bAHnAiVgFgwmFI1SjZeOe7eJcdVkEREC0RERFhERERERERFLT0USlp6Itm5qJERFqiIiIiIiIiIiIiIiLKxcFLgsY6k9tRgu0zcHTefIqMhYELC6U3uY4ObmF3+OqNIZXZdrokHkRp6rmcRwJtUl7i+mNnNLehGpEc1cfCOJD6Jou1YbDydJ+s/JWP8A4MGRNtuY8vMKqr4d7qki/LT7r6FSrfE0KdYXEXHPI+B8wqLg2BFNgYKocQIzRFw6WmJO1j7rfp8DcS57XNcSD3dLkc1ifhl4dPaADllmeqsKWELdCuQw7XCKjSO9SWUKTxIBHf8AlfO6eFezHOpPaW5S58HftABI5jW62uO8H7Rpbo4EOBOjgCDld5HKBP8AKOS7TimDFVt4zt8Lt/6SeRWjDXinNiQ6m71gub8xHutXgirvMsbR43879LqJWoljr65LlXYwPPaPsWMOcHWWk/qFlwb4TxtR4xJLaIMznnM5j7uAYNJsBJEZV0vC+E0y7tXtE2sRqWnuk+n1A5K8qMc7db4RrWMFtMuq7UMMXM3nKlZw/snudnaQWkDW0ghU/G8DSeQW1XCpDgxrQJPh18hAvaJXRYjgjnkEPA5gtmffZQN+FqxfnqVGQBlaGtIDWzMAfUytfh3NbDGHlr+VtVpU2CGtk8zbrEqr4b8OhzWU6rTlBDoDm96NGuA2WfxjjpeKDPAwCQN3OH0At1XUNosoU3POjQZO5hfOq1Uvc57tXXPqTKnYKh2YM/eFRbcrdhhm0Abuz6DTxgc4IWLQswFiAswpq8iUREWVqiIiIiIiIiIiIilp6KJS09EWzc1EiIi1RERERERERERERERERYkLJFhZWeExT6Tw+mYcPmN7bq8b8VPi/dPuftC54hYkLR1Nr81YYLaeIwk9kbcDce+hHNX/APeY7un0n7rNvxI1xgmOv0XNlqwLFz+GYdT4qyH8SYwGSGHlu/mV3lKq4iSqziIIe3J+d7R7gwflfqt7hD5wzHnU5vkS37LLBUw50n8neHrBb9yq2rSJ+X37hezJZiqDXtyIa4d9/QlbL7CyqsZxnsjDiQeSuqIlcJxgziHnzEe1h9FIo0g83NlD2xtB2Cog0wJJgTkLXP7Z68lcf3n5E9Vm34oP8U+5/RcyGrMNUr4dvPxXl/8AseMiPl/x/KsuKcZqVwGuswXyi8nnO6rwEAWQC7BoAgKkr4ipXealQyT76DoLIAvURbLiiIiLCIiIiIiIiIiIiKWnoolLT0RbNzUSIiLVERERERERERERERERERERF4QvUSEWBC8hSLyFhZldfwJv/psP9f8AuKy4Qe7UPmB9T91tcNp5cFTHLN9T+q0+FWpP83n6NVfXs/xX1DZrSMHSadGt9ArHh1yuG4k38Z/qfqu44Ld3uuO44yMTUH809f8AtdsKLSqP+Kf5bP7v2/CrgFkAvV6pS8XK8AXqIsrCIiIiIiIiIiIiIiIiIiIiKWnoolLT0RbNzWaIiLqiIiIiIiIiIiIiIiIiIiIiIiIiIiysHJdvS/yrPT9FXcO/wj/U77IirK2a+oYP+W3oPQLd4Nr7rm+Pf5mp7f7URSMN9KoP4l/ks/u/8uWiiIpS8eiIiIiIiIiIiIiIiIiIiIiIiIikZoiIstzX/9k="
                  title="Donate to save enviroment"
                  price="0.005 ETH"
                />
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontFamily: "Poppins, sans-serif",
          display: "block",
          marginBottom: "30px",
          marginLeft: "50px",
        }}
        variant="h4"
      >
        Blogs
      </Typography>
      <Box sx={{ color: "#fff", paddingBottom: "30px", paddingTop: "20px" }}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          className="mySwiper"
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <SwiperSlide>
            <Card
              sx={{
                maxWidth: 460,
                marginLeft: "32px",
                color: "#fff",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={slider1}
                  alt="green iguana"
                  sx={{
                    width: "100%",
                    height: "300px ",
                    objectFit: "",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "#fff" }}
                    variant="h5"
                    component="div"
                  >
                    What are Blockchain gas fees?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                maxWidth: 460,
                marginLeft: "32px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={slider2}
                  alt="green iguana"
                  sx={{
                    width: "100%",
                    height: "300px ",
                    objectFit: "",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "#fff" }}
                    variant="h5"
                    component="div"
                  >
                    What are Blockchain gas fees?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                maxWidth: 460,
                marginLeft: "32px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={slider3}
                  alt="green iguana"
                  sx={{
                    width: "100%",
                    height: "300px ",
                    objectFit: "",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "#fff" }}
                    variant="h5"
                    component="div"
                  >
                    What are Blockchain gas fees?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontFamily: "Poppins, sans-serif",
          display: "block",
          marginBottom: "20px",
          marginTop: "30px",
          marginLeft: "50px",
        }}
        variant="h4"
      >
        Browse by category
      </Typography>
      <Box
        sx={{
          height: "110vh",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "80px",
        }}
      >
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginLeft: "50px",
            marginTop: "30px",
            marginRight: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={brow4}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Collectible
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginTop: "30px",
            marginRight: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={brow5}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Photography
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={brow6}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Utility
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginLeft: "50px",
            marginTop: "30px",
            marginRight: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={brow7}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Collectible
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginTop: "30px",
            marginRight: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={brow8}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Photography
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 460,
            maxHeigh: 100,
            marginLeft: "32px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={brow9}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "300px ",
                objectFit: "",
              }}
            />
            <CardContent>
              <Typography
                sx={{ color: "#fff", textAlign: "center" }}
                variant="h5"
                component="div"
              >
                Utility
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box>
        <div
          style={{
            height: "8vh",
            width: "100%",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          <Typography
            sx={{
              paddingLeft: "20px",
            }}
            variant="h6"
          >
            Game UIT Hackathon 2022
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "50px", height: "auto", marginRight: "16px" }}
              src={img1}
              alt="aaaa"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                textTransform: "uppercase",
              }}
            >
              GreenSavers
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Landing;

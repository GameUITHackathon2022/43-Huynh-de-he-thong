import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";





const Index = ({ id, title, img, price }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container color='white' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py:'10px'}}> 
    

      <Grid item xs={1}>
        <Typography variant="h6">{id}</Typography>
      </Grid>
      <Grid item xs={2}>
        <div>
          <img src={img} style={{width:'90px', height: '80px', borderRadius: '15px'}}/>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography fontSize="17px">{title}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{price}</Typography>
      </Grid>
    </Grid>
  );
};

export default Index;

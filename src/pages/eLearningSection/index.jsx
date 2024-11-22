import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Elearning from '../../assets/elearning.svg'
import Elearning2 from '../../assets/elearning2.svg'

const ElearningSection = () => {
  return (
    <Box
      sx={{
     
        width: "100%",
        maxWidth: "1440px",
    marginTop:4,        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Text Section */}
     
      <Box sx={{ flex: 1, marginRight:"auto" }}>
        <Box sx={{background: "#616161",width:"280px",height:"30px",marginLeft:"-37px"}}>     <Typography
          variant="h5"
          sx={{
            marginLeft:"200px",
            whiteSpace:"nowrap",
            fontWeight: "bold",
            display: "inline-block",
            padding: "5px 20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
 Regulatory Affairs
        </Typography></Box>
   
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            margin: "15px 0",
            padding:"20px",
            lineHeight: "1.6",
          }}
        >
     Regulatory affairs is a profession developed from the desire of governments to protect public health by controlling the safety and efficacy of products in areas including pharmaceuticals, veterinary medicines, medical devices, pesticides, agrochemicals, cosmetics and complementary medicines, and by the companies ...
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          Read More
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          position: "relative",
          justifyContent: "flex-end",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={Elearning}  // Replace with your image URL
          alt="E-Learning Main"
          sx={{
            borderRadius: "10px",
            width: "80%",
            height: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Floating Small Image */}
        <Box
          component="img"
          src={Elearning2} // Replace with your image URL
          alt="E-Learning Sub"
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-1%",
            borderRadius: "10%",
            width: "213px",
            height: "142px",
            border: "4px solid white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default ElearningSection;

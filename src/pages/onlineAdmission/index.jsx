import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Onlineadmission from '../../assets/onlineadmission.svg'
import Online2 from '../../assets/online2.svg'

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
          src={Onlineadmission}  // Replace with your image URL
          alt="E-Learning Main"
          sx={{
            marginRight:"23%",
            borderRadius: "10px",
            width: "60%",
            height: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Floating Small Image */}
        <Box
          component="img"
          src={Online2} // Replace with your image URL
          alt="E-Learning Sub"
          sx={{
            position: "absolute",
            top: "-10%",
            right: "-3%",
            borderRadius: "10%",
            width: "213px",
            height: "142px",
            border: "4px solid white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
      {/* Text Section */}

      <Box sx={{ flex: 1, marginRight:"auto" }}>
        <Box sx={{background: "#616161",width:"280px",height:"30px",marginLeft:"-47px"}}>     <Typography
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
      Online Admission
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
          Virtual learning, or e-learning, is an educational system that uses
          electronic technologies to provide access to curriculum outside the
          traditional classroom. It allows students to learn remotely, using
          digital tools and resources. This flexible approach supports both
          self-paced and interactive learning experiences.
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

   
    </Box>
  );
};

export default ElearningSection;

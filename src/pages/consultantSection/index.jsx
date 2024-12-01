import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Bg from "../../assets/consultantbg.png";

const ConsultationSection = () => {
  return (
    <Box
      sx={{
   
        width: "100%",
        height: "272px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${Bg})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Watch Video Section */}
      {/* <Button
        startIcon={<YouTubeIcon />}
        variant="outlined"
        sx={{
          position: "absolute",
          top: "10px",
          backgroundColor: "#fff",
          borderColor: "gray",
          "&:hover": { backgroundColor: "lightgray" },
        }}
      >
        Watch Video
      </Button> */}

      {/* Main Content */}
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          zIndex: 1,
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          padding: "40px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Schedule a Free Consultation
        </Typography>
        <Typography variant="h6" sx={{ margin: "10px 0" }}>
          NOW
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "#fff",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          Arrange a Meeting
        </Button>
        <Typography variant="body1" sx={{ marginTop: "15px" }}>
          Need help? <br />
          <a
            href="tel:+919767496322"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >

    {/* +919767496322 */}
          </a><br/>
          <a
            href=""
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >

{/* Pharmajoin9@gmail.com */}
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ConsultationSection;

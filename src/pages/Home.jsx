import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  Container,
} from "@mui/material"; 
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";


const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
          }}
        >
  <span style={{ color: "#1976d2" }}> Pharma Jobs</span>    Today
        </Typography>

        
        

        
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} sm={4}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="250"
                image={Banner1}
             
                alt="Team Collaboration"
              />
            </Card>
          </Grid>

          
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                p: 3,
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={Banner2}
                alt="Focused Businessman"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
              <Typography
                variant="body2"
                sx={{ color: "#666", mt: 1 }}
              >
            get your dream job Today!
              </Typography>
            </Box>
          </Grid>

          
          <Grid item xs={12} sm={4}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="250"
                image={Banner3}
                alt="Business Meeting"
              />
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#666",
            mb: 4,
          }}
        >
Pharmajoin.com is your go-to platform for job postings, specifically tailored for individuals with qualifications such as B Pharm, M Pharm, D Pharm, Pharm D, MSC, BSC, PHD, Biotechnology, Microbiology, Pharmaceutics, Biochemistry, and more. Our comprehensive job listings cover a wide range of positions in the Science and IT sectors.

        </Typography>


        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2} justifyContent="center">
            {[
             "Internships",
             "CDM",
             "Clinical Research",
             "Medical Writer",
             "Packing Jobs",
             "Pharmacovigilance",
             "Production",
             "QA",
             "QC",
             "Regulatory Affairs",
             "Research & Development",
             "Warehouse",
            ].map((service, index) => (
              <Grid item key={index}>
                <Button variant="outlined" size="small">
                  {service}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        
        {/* <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<i className="fab fa-youtube"></i>}
          >
            Watch Video
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/Footer';
import Aboutus from '../../assets/privacy.svg'

const AboutUs = () => {
  return (

    <>
       <Nav/>
    <Navbar/>

    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" ,boxShadow:"5px 10px 10px 10px #888888"}}>
    <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Welcome to Pharmajoin.in – Your Gateway to the Indian Pharmaceutical Industry
          </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
      
          <Typography variant="body1" paragraph>
         Post Your Job – Chemical and Pharma Industries

We are proud to present ourselves as one of India’s top emerging job platforms, specializing in connecting professionals in the Chemical and Pharmaceutical sectors with the best opportunities
          </Typography>
          <Typography variant="h6" gutterBottom>
About us?          </Typography>
          <Typography variant="body1" paragraph>
          We provide recruiters with free access to an extensive pool of highly qualified candidates. Our wide-reaching network includes:
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Services and Features
          </Typography>
          <Typography variant="body1" paragraph>
          Active WhatsApp group members
A growing base of LinkedIn followers
Engaged Telegram group members
How to Post a Job?
          </Typography>
          <Typography variant="body1" paragraph>
          Simply send your job description to Pharmajoin9@gmail.com, and our team, led by Hemant Tapkir, will ensure it reaches the right audience.
          Leverage our vast network to connect with top talent and find the perfect fit for your organization.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Aboutus} // Replace with your image URL
            alt="Pharmaceutical Industry"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </>
  );
};

export default AboutUs;

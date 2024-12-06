import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/Footer';
import Contact from '../../assets/contact.jpg';
import axios from "axios";
const ContactUsUI = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://pharma-backend-ashen.vercel.app/api/contactUs", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.company,
        message: formData.message,
      });
      console.log("Success:", response.data);
      alert("Message sent successfully!");
      
      // Reset the form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send the message. Please try again.");
    }
  };
  
  return (
    <>
    <Nav/>
    <Navbar/>
 
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1200,
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Section: Form */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            padding: 4,
            backgroundColor: "#f8fafc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#1d4ed8" }}
          >
            Contact Us
          </Typography>
          <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <TextField
        label="Name"
        name="name"
        required
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        required
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Company"
        name="company"
        variant="outlined"
        fullWidth
        value={formData.company}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        variant="outlined"
        fullWidth
        value={formData.phone}
        onChange={handleChange}
      />
      <TextField
        label="Message"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={formData.message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          borderRadius: "20px",
          padding: "10px 20px",
        }}
      >
        Submit
      </Button>
    </Box>
        </Grid>

        {/* Right Section: Illustration */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundColor: "#e0f2fe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Placeholder for Illustration */}
          <Box
            sx={{
              width: "80%",
              height: "80%",
              backgroundImage: `url(${Contact})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </>
  );
};

export default ContactUsUI;

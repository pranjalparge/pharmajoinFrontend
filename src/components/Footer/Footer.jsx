import React from 'react';
import { Box, Typography, Grid, Button, TextField, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (

    <Box
      sx={{
        backgroundColor: '#f5f5f5',
      marginTop:"15%",
        borderTop: '1px solid #ddd',
      }}
    >
        <a
        href="https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
        target="_blank"
        class="float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="57"
     
        />
      </a>
      <a
        href="https://t.me/pharmajoin"
        target="_blank"
        rel="noopener noreferrer"
        class="float3"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram"
          width="60"
      
        />
      </a>
      <a href="https://t.me/Pharma_bharat" target="_blank">
        {" "}
        <i class="fab fa-telegram"></i>
      </a>

      {/* <Typography
        variant="h6"
        textAlign="center"
        fontWeight="bold"
        mb={2}
      >
        Are You Ready to Work With Us?
      </Typography>
      <Box textAlign="center" mb={4}>
        <Button variant="contained" color="primary" size="large">
          Book a Meeting
        </Button>
      </Box> */}
      <Grid container spacing={4}>
        {/* Subscription Section */}
        {/* <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Enter your email Address
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Your Email"
              size="small"
              fullWidth
              sx={{ marginRight: 1 }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Grid> */}

        {/* Services Section */}
        {/* <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Our Service
          </Typography>
          <Link href="#" underline="none" color="textSecondary">
            Web Hosting
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Digital Marketing
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Web Design
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Domain Registration
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            SEO
          </Link>
        </Grid> */}

        {/* Company Section */}
        {/* <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Company
          </Typography>
          <Link href="#" underline="none" color="textSecondary">
            About Us
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Careers
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            FAQs
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Teams
          </Link>
          <br />
          <Link href="#" underline="none" color="textSecondary">
            Contact Us
          </Link>
        </Grid> */}

        {/* Contact Us Section */}
        {/* <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography>📍 USA, United States</Typography>
          <Typography>✉️ 99kideas@info.tech.us</Typography>
          <Box display="flex" mt={2}>
            <Link href="#" sx={{ marginRight: 2 }}>
            <FacebookIcon sx={{ color: "#1565C0", cursor: "pointer" }} />
            </Link>
            <Link href="#" sx={{ marginRight: 2 }}>
            <TwitterIcon sx={{ color: "#1565C0", cursor: "pointer" }} />
            </Link>
            <Link href="#">
            <LinkedInIcon sx={{ color: "#1565C0", cursor: "pointer" }} />
            </Link>
          </Box>
        </Grid> */}
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
        background: "#616161",

          borderTop: '1px solid #ddd',
          paddingTop: 2,
 
        }}
      >
        <Typography variant="body2" color="#fff"      >
        © 2024 http://pharmajoin.in/ • All rights reserved
        </Typography>
        <Box display="flex" justifyContent="center" mt={1} flexDirection={"column"}>
        <Link href="/postyourjob" underline="none" color="#fff"   sx={{ mx: 1 }}>
          Post Your Job
          </Link>
          <Link href="/privacypolicy" underline="none" color="#fff"   sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="/aboutUs" underline="none" color="#fff"   sx={{ mx: 1 }}>
     About Us
          </Link>
          <Link href="#" underline="none" color="#fff"   sx={{ mx: 1 }}>
        Disclaimer
          </Link>
          <Link href="#" underline="none" color="#fff"   sx={{ mx: 1 }}>
    Contact Us
          </Link>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

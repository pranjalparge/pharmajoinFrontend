// import React from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Container,
// } from "@mui/material";
// import Banner1 from "../assets/pharma1.png";
// import Banner2 from "../assets/banner2.png";
// import Banner3 from "../assets/banner3.png";

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f9f9f9",
//         py: 2,
//         textAlign: "center",
//       }}
//     >
//       <Container maxWidth="lg">

//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontWeight: "bold",
//             color: "#333",
//           }}
//         >
//   <span style={{ color: "#1976d2" }}> Pharma Jobs</span> Available
//         </Typography>

//         <Grid container spacing={4} alignItems="center">

//           <Grid item xs={12} sm={4}>
//             <Card elevation={3}>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={Banner1}

//                 alt="Team Collaboration"
//               />
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Box
//               sx={{
//                 textAlign: "center",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 p: 3,
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={Banner2}
//                 alt="Focused Businessman"
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 sx={{ mt: 2 }}
//               >
//                 Get Started
//               </Button>
//               <Typography
//                 variant="body2"
//                 sx={{ color: "#666", mt: 1 }}
//               >
//             get your dream job Today!
//               </Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Card elevation={3}>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={Banner3}
//                 alt="Business Meeting"
//               />
//             </Card>
//           </Grid>
//         </Grid>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             color: "#666",
//             mb: 4,
//           }}
//         >
// Pharmajoin.com is your go-to platform for job postings, specifically tailored for individuals with qualifications such as B Pharm, M Pharm, D Pharm, Pharm D, MSC, BSC, PHD, Biotechnology, Microbiology, Pharmaceutics, Biochemistry, and more. Our comprehensive job listings cover a wide range of positions in the Science and IT sectors.

//         </Typography>

//         {/* <Box sx={{ mt: 4 }}>
//           <Button
//             variant="contained"
//             color="secondary"
//             startIcon={<i className="fab fa-youtube"></i>}
//           >
//             Watch Video
//           </Button>
//         </Box> */}
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

import React from "react";
import Slider from "react-slick";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import Banner1 from "../assets/pharma1.png";
import Banner2 from "../assets/banner2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner3 from "../assets/banner3.png";
const carouselImages = [Banner1, Banner2, Banner3];

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Carousel Background */}
      <Slider {...sliderSettings}>
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "100vh",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.3)",
            }}
          />
        ))}
      </Slider>

      {/* Content Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Card elevation={3}></Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  textAlign: "center",
                  // border: "1px solid #ddd",
                  borderRadius: "8px",
                  // p: 2,
                  background: "transparent",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: {
                      xs: "1.5rem", // smaller font size for mobile
                      sm: "3.25rem", // default font size for larger screens
                    },
                    paddingTop: {
                      xs: "40px", // smaller font size for mobile
                    
                    },
                  }}
                >
                  <span style={{ color: "#1976d2" }}>Pharma Jobs</span>{" "}
                  Available
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#fff",
                    mb: 3,
                  }}
                >
                  Pharmajoin.com is your go-to platform for job postings,
                  specifically tailored for individuals with qualifications such
                  as B Pharm, M Pharm, D Pharm, Pharm D, MSC, BSC, PHD,
                  Biotechnology, Microbiology, Pharmaceutics, Biochemistry, and
                  more. Our comprehensive job listings cover a wide range of
                  positions in the Science and IT sectors.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                  href="/contactUs"
                >
                  Get Started
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Get your dream job today!
                </Typography>
                <Box sx={{ mt: 5 ,   paddingBottom: {
                      xs: "40px", // smaller font size for mobile
                    
                    }, }} >
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
                        <Button
                          href="/jobapply"
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#fff",
                            borderColor: "#fff", // To ensure the border matches the text color
                            "&:hover": {
                              backgroundColor: "#1976d2",
                              borderColor: "blue", // Optional: Change the border color on hover
                            },
                          }}
                        >
                          {service}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card elevation={3}>
                {/* <CardMedia
                component="img"
                height="250"
                image={Banner3}
                alt="Business Meeting"
              /> */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;

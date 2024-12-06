// import {useEffect} from 'react'
// import { useSelector } from 'react-redux'

// function Navbar() {
//     const item = useSelector(state => state.homeItems)
//     useEffect(()=>{
//         console.log(item)
//     },[])
//   return (
//     <div>
//       {item.NavItems.map((items)=>(
//         items.navItems
//       ))}
//     </div>
//   )
// }

// export default Navbar

import * as React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Contact from "../../assets/icon.png";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const pages = [ "Internships",
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
 ];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const item = useSelector((state) => state.homeItems);
  useEffect(() => {
    // console.log(item);
  }, []);

  return (
    <>
   
      <AppBar position="static" style={{ background: "#163db5" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#fff"
              >
                <MenuIcon />
              </IconButton>
           
              <Link href="/" underline="none">   
                <MenuItem>
                  <Typography sx={{ textAlign: 'center',color:"#fff" }}>Home</Typography>
                </MenuItem>
    
                </Link>
            </Box>
            <Link href="/" underline="none">   
              <HomeIcon sx={{ display: { xs: "none", md: "flex",color:"#fff" }, mr: 1 }}  /></Link>
       

            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
   <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1,color:"#000"}} />
            </Typography>
            <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'block' }}
              >
                {page}


              </Button>
            ))} */}
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography sx={{ textAlign: 'center',color:"#fff" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 1, display: "flex" }}>
              <img src={Contact} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  ml: 1,
                  display: { xs: "none", md: "flex" },
                  fontSize: "13px",
                  fontWeight: 700,

                  color: "#000",
                }}
              >
                Call us anytime +01234567890
              </Typography>
            </Box> */}
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Book a Meeting">
                <Button
                  sx={{
                    width: "173.99px",
                    borderRadius: "25px",
                    background: "#1565C0",
                    color: "#fff",
                  }}
                >
                  Book a Meeting
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;

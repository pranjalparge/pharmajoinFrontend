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
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

import Contact from "../../assets/icon.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
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

const pages = ["Products", "Pricing", "Blog"];
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
      <AppBar position="static" style={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <img src={Logo} href="/" className="logo" />

            <Box sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
              <Typography
                color="#000"
                sx={{
                  display: { xs: "none", sm: "block" }, // Hide on mobile view (xs), show on larger screens (sm and up)
                }}
              >
                Visit us on
              </Typography>
              <Tooltip title="Facebook">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  width="30"
                  height="30"
                  className="social"
                />
              </Tooltip>
              <Tooltip title="Telegram">
                <a
                  href="https://t.me/pharmajoin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                    alt="Telegram"
                    width="30"
                    height="30"
                    className="social"
                  />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/sachin-kedar-092977339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    width="30"
                    height="30"
                    className="social"
                  />
                </a>
              </Tooltip>
              <Tooltip title="Whatsup">
                <a
                  href="https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="30"
                    height="30"
                    className="social"
                  />
                </a>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;

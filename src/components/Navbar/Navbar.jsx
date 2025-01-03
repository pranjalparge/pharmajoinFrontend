

import * as React from "react";
import { useEffect,useState } from "react";

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Logo from "../../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";


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

function ResponsiveAppBar() {

  const [drawerOpen, setDrawerOpen] = useState(false);




  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
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
     

<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ color: '#fff' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleCloseNavMenu}>
        <Box sx={{ width: 250, }}p={3}>
        <img src={Logo} href="/" className="logo" />
        <List>
            <Link href="/" underline="none" color="inherit">
              <ListItem button onClick={handleCloseNavMenu}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link href="/aboutUs" underline="none" color="inherit">
              <ListItem button onClick={handleCloseNavMenu}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link href="/allJobs" underline="none" color="inherit">
              <ListItem button onClick={handleCloseNavMenu}>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="All Jobs" />
              </ListItem>
            </Link>
            <Link href="/contactUs" underline="none" color="inherit">
              <ListItem button onClick={handleCloseNavMenu}>
                <ListItemIcon>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
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

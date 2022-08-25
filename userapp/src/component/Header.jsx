// import React from "react";
// import { NavLink } from "react-router-dom";
// import Login from "../Buttons/Login";
// import Signup from "../Buttons/Signup";
// import CartBtn from "../Buttons/CartBtn";

// const Header = () => {
//   return (
//     <>
//         {/* <div style={{ backgroundColor: "blue" }}> */}
//         <nav className="navbar navbar-expand-lg bg-light">

//           <div className="container-fluid py-2">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//               >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//               >
//               <b>
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <NavLink className="nav-link" aria-current="page" to="/">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="product">
//                       Product
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
                    // <NavLink className="nav-link" to="about">
                    //   About
                    // </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="contact">
//                       Contact
//                     </NavLink>
//                   </li>
//                 </ul>
//               </b>
//               <div
//                 style={{
//                   textDecoration: "underline overline",
//                   marginLeft: "600px",
//                 }}
//               >
//                 <NavLink className="navbar-brand mx-auto fw-bold" to="/">
//                   E-com
//                 </NavLink>
//               </div>
              // <Login />
              // <Signup />
//               <CartBtn />
//             </div>
//           </div>

//         </nav>
//        {/* </div> */}
//     </>
//   );
// };

// export default Header;

import { NavLink } from "react-router-dom";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >
      <NavLink className="nav-link" to="about">
      Login
      </NavLink>
      </MenuItem>
      <MenuItem >
      <NavLink className="nav-link" to="contact">
      SignUp
      </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <div style={{
                  textDecoration: "underline overline",
                  marginLeft: "10px",
                }}>
              E-COM
              </div>
            </Typography>
            <Search style={{width: '700px', marginLeft: '80px'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }} 
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      


      {/* <div class="container-fluid mt-2">
        <div class="row row-cols-2 row-cols-sm-6 g-2 g-sm-3">
          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class=" text-center">
                    <h1>1</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>2</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>3</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>4</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>5</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>6</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}
    </div>
  );
}

// import { logDOM } from '@testing-library/react'
import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// IMPORT MUI
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import { Opacity } from "@mui/icons-material";

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Nativation2() {
  const [account, setAccount] = useState([]);
  const [user, setUser] = useState({});
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  // GET ADMIN ACCOUNT
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/account"
      );
      const responseJSON = await response.json();
      setAccount(responseJSON);
    };
    fetchData();
  }, []);

  // LOGIN WITH GOOGLE
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    console.log(decoded);
    setUser(decoded);
    setCheck(!check);
    localStorage.setItem("email", decoded.email);
    localStorage.setItem("name", decoded.name);
    localStorage.setItem("picture", decoded.picture);
  };
  const handleLogOut = (e) => {
    setUser({});
    setCheck(!check);
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("picture");
    navigate("/");
  };
  useLayoutEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "766192683093-aijpda08duh9nkkcp6q3pehvpbg3nj91.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { type: "icon", shape: "pill", size: "medium" } // customization attributes
    );
  }, [check]);

  //AUTHORIZE || PHÂN QUYỀN
  useEffect(() => {
    const handleAuthor = () => {
      const user = localStorage.getItem("email");
      account.map((item) => {
        if (item.email == user) {
          localStorage.setItem("isAdmin", true);
        }
      });
    };
    handleAuthor();
  }, [check]);
  // END LOGIN WITH GOOGLE

  //HANDLE AVATAR
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleButtonLogout = () => {
    handleLogOut();
    handleClose();
  };
  //END HANDLE AVATAR

  //HANDLE SCROLL
  const [scroll, setScroll] = useState(false);
  const header = document.getElementById("header");
  useLayoutEffect(() => {
    const scrollElement = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", scrollElement);
  }, [scroll]);
  //END HANDLE SCROLL

  //HANDLE APPBAR
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

  return (
    <AppBar
      position={scroll ? "fixed" : "static"}
      sx={{ backgroundColor: "#020307" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon
            sx={{
              display: { xs: "none", md: "flex" },
              color: "#ff2c1f",
              mr: 1,
            }}
          />
          <MyTypography
            variant="subtitle1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIE-NHK
          </MyTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Link to="/">
                  <MyTypography textAlign="center">Home</MyTypography>
                </Link>
              </MenuItem>
              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Link to="/about">
                  <MyTypography textAlign="center">About</MyTypography>
                </Link>
              </MenuItem>
              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Link to="/contact">
                  <MyTypography textAlign="center">Contact</MyTypography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <MovieIcon
            color="#ff2c1f"
            sx={{
              display: { xs: "flex", color: "#ff2c1f", md: "none" },
              mr: 1,
            }}
          />
          <MyTypography
            variant="subtitle1"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIE-NHK
          </MyTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
            <Link className="link" to="/">
              <MyButton
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </MyButton>
            </Link>
            <Link className="link" to="/about">
              <MyButton
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About
              </MyButton>
            </Link>
            <Link className="link" to="/contact">
              <MyButton
                key={3}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact
              </MyButton>
            </Link>
          </Box>

          {localStorage.getItem("email") ? (
            ""
          ) : (
            <li>
              <div id="buttonDiv"></div>
            </li>
          )}

          {localStorage.getItem("email") && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      src={localStorage.getItem("picture")}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                {localStorage.getItem("isAdmin") && (
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <DashboardCustomizeRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkDashboard" to="/admin">
                        Dashboard
                    </Link>
                  </MenuItem>
                )}
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleButtonLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const MyTypography = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  textDecoration: "none",
  listStyle: "none",
  scrollPaddingTop: "2rem",
  scrollBehavior: "smooth",
});

const MyButton = styled(Button)({
  fontFamily: "Poppins, sans-serif",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  textDecoration: "none",
  listStyle: "none",
  scrollPaddingTop: "2rem",
  scrollBehavior: "smooth",
  "&:hover":{
    backgroundColor: "#ff2c1f",
  }
});

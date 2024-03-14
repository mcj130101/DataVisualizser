import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/isAuthSlice";

function NavBar() {
  const isAuth = useSelector((state) => state.isAuth);
  const isLoggedIn = localStorage.length > 0 ? localStorage.getItem('isLoggedIn') : false
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const loginClickHandler = () => {
    handleCloseNavMenu();
    navigate("/login");
  };

  const logoutClickHandler = () => {
    handleCloseNavMenu();
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
    redirect("/")
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Data Visualizer
          </Typography>

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
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  navigate("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>

              {isAuth && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu;
                      navigate("/entry");
                    }}
                  >
                    <Typography textAlign="center">Add</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu;
                      navigate("/table");
                    }}
                  >
                    <Typography textAlign="center">Table</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu;
                      navigate("/charts");
                    }}
                  >
                    <Typography textAlign="center">Charts</Typography>
                  </MenuItem>
                </Menu>
              )}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  navigate("/login");
                }}
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Data Visualizer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu;
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            {(isAuth || isLoggedIn) && (
              <>
                <Button
                  onClick={() => {
                    handleCloseNavMenu;
                    navigate("/entry");
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Add
                </Button>
                <Button
                  onClick={() => {
                    handleCloseNavMenu;
                    navigate("/table");
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Table
                </Button>
                <Button
                  onClick={() => {
                    handleCloseNavMenu;
                    navigate("/charts");
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Charts
                </Button>
              </>
            )}
            <Button
              onClick={() => isAuth? logoutClickHandler() : loginClickHandler() }
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {isAuth ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

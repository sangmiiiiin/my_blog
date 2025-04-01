import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { checkAuth, logout } from '../redux/authSlice';
import axios from 'axios';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import HeaderDrawer from '../components/HeaderDrawer';

const pages = ['Guestbook', 'Home', 'Login'];
const afterLoginPages = ['Home', 'Create', 'Logout', 'Mypage'];
const settings = ['Register', 'Login'];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, /*user*/ loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth()); // 앱이 실행되면 로그인 상태 확인
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5700/auth/logout", {}, { withCredentials: true });
      dispatch(logout());
      alert("로그아웃 되었습니다.");
      console.log("로그아웃 성공");
      navigate("/main");
    } catch (error) {
      console.error("로그아웃 실패:", error.response?.data || error.message);
    }
  };

  if (loading) return <p>로딩중...</p>;

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

  const renderNavButton = (label, path, onClick) => (
    <Link key={label} to={path} style={{ textDecoration: 'none' }}>
      <Button onClick={onClick} sx={{ my: 2, color: 'black' }}>
        {label}
      </Button>
    </Link>
  );

  const renderButtons = (items, isAuthenticated) => {
    return items.map((item) => {
      if (item === "Logout") {
        return (
          <Button key={item} onClick={handleLogout} sx={{ my: 2, color: 'black' }}>
            {item}
          </Button>
        );
      } else if (item === "Mypage") {
        return (
          <Link to={"/mypage"}>
            <Button key={item} sx={{ my: 2, color: 'black' }}>
              {item}
            </Button>
          </Link>
        )
      }

      const routes = {
        "Create": "/create",
        "Home": "/",
        "Login": "/login"
      };

      return routes[item] ? renderNavButton(item, routes[item], handleCloseNavMenu) : (
        <Button key={item} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black' }}>
          {item}
        </Button>
      );
    });
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderDrawer />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Climbing Apparel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              flexGrow: 10,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0.1rem',
              color: 'black',
              textDecoration: 'none',
              marginRight: '5vw'
            }}
          >
            Climbing Apparel
          </Typography>

          <Box sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {isAuthenticated ? renderButtons(afterLoginPages, true) : renderButtons(pages, false)}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

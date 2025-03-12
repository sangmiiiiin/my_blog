import React from 'react';
import { Link } from 'react-router-dom';
// import { HeaderContainer, Logo, NavList, NavLink } from '../styles/HeaderStyles';  // 스타일 임포트

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import HeaderDrawer from '../components/HeaderDrawer';
import CreateButton from '../components/CreateButton';

const pages = ['Guestbook', 'Home', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
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
  return (
    // 죽은 코드
    // <HeaderContainer>
    //   <Logo>
    //     <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sangmin's Blog</Link>
    //   </Logo>
    //   <nav>
    //     <NavList>
    //       <li>
    //         <NavLink href="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink href="/guestbook">Guestbook</NavLink>
    //       </li>
    //       <li>
    //         <NavLink href="/about">About</NavLink>
    //       </li>
    //     </NavList>
    //   </nav>
    // </HeaderContainer>

    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sangmin's Blog
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
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 10,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sangmin's Blog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <CreateButton />
            {pages.map((page) => (
              page === "Login" ? (
                <Link key={page} to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'black' }}
                  >
                    {page}
                  </Button>
                </Link>
              ) : ((page === "Home" ? (
                <Link key={page} to="/" style={{ textDecoration: 'none ' }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'black' }}
                  >
                    {page}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'black' }}
                >
                  {page}
                </Button>
              )
              ))
            ))}
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
        <CreateButton />
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'black' }}
            >
              {page}
            </Button>
          ))}
        </Box> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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

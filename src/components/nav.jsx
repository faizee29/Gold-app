import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import headerlogo from '../assets/headerlogo.png';

const pages = ['HOME', 'ABOUT US', 'OUR PRODUCTS','COLLECTIONS','REVIEWS','CONTACT US'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" sx={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', boxShadow: 'none', height: { xs: 80, md: 120 }, justifyContent: 'center' }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 80, md: 120 }, px: { xs: 1, md: 4 } }}>
          {/* Hamburger menu for small screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flex: 1 }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white', mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontFamily: 'BaketFashion-DemoVersion-Regular, serif', color: '#D2B49C' }}>
                    {page.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* Center logo for mobile */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={headerlogo} alt="Logo" style={{ height: 'clamp(40px, 10vw, 60px)', width: 'auto' }} />
            </Box>
            {/* Right icons for mobile */}
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', ml: 1 }}>
              <Tooltip title="Search">
                <IconButton sx={{ color: 'white', p: 0.5 }}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cart">
                <IconButton sx={{ color: 'white', p: 0.5 }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile">
                <IconButton sx={{ color: 'white', p: 0.5 }}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          {/* Left menu items (md and up) */}
          <Box sx={{minWidth: 0, overflow: 'hidden', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gap: { xs: 0.5, md: 3, lg: 5 } }}>
            {[0,1,2,3].map((i) => (
              <Button
                key={pages[i]}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.6rem' },
                  fontWeight: 'normal',
                  letterSpacing: '0.01em',
                  px: { xs: 0.7, md: 1.2 },
                  textTransform: 'none',
                  background: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {pages[i].split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </Button>
            ))}
          </Box>
          {/* Center logo and brand (md and up only) */}
          <Box sx={{display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: { md: 9 } }}>
            <img src={headerlogo} alt="Logo" style={{ height: 'clamp(60px, 10vw, 90px)', width: 'auto', marginBottom: 0 }} />
            <Box sx={{
                boxShadow:'none',
                backdropFilter: 'blur(10px)',
                background: 'rgba(0,0,0,0.1)',
                px: 3.5,
                py: 1.2,
                mt: 0.3,
                display: 'inline-block',
                clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
            }}>
              <Typography
                sx={{
                  fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.7rem', lg: '1.7rem' },
                  color: '#D2B49C',
                  fontWeight: 'normal',
                  letterSpacing: '0.01em',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                }}
              >
                GoldFactory Jewelry
              </Typography>
            </Box>
          </Box>
          {/* Right menu items (md and up only) */}
          <Box sx={{minWidth: 0, overflow: 'hidden', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-start', gap: { xs: 0.5, md: 3, lg: 4 } }}>
            {[4,5].map((i) => (
              <Button
                key={pages[i]}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                  fontWeight: 'normal',
                  letterSpacing: '0.01em',
                  px: { xs: 0.7, md: 1.2 },
                  textTransform: 'none',
                  background: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {pages[i].split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </Button>
            ))}
          </Box>
          {/* Right icons (md and up only) */}
          <Box sx={{minWidth: 0, overflow: 'hidden', display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', ml: { xs: 0.5, md: 2 } }}>
            <Tooltip title="Search">
              <IconButton sx={{ color: 'white', p: { xs: 0.5, md: 1 } }}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton sx={{ color: 'white', p: { xs: 0.5, md: 1 } }}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile">
              <IconButton sx={{ color: 'white', p: { xs: 0.5, md: 1 } }}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

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
        <Toolbar disableGutters sx={{ minHeight: { xs: 80, md: 120 }, px: { xs: 1, md: 4 }, width: '100%' }}>
          {/* Left menu items */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gap: { xs: 2, md: 4, lg: 6 } }}>
            {[0,1,2,3].map((i) => (
              <Button
                key={pages[i]}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                  fontWeight: 'normal',
                  letterSpacing: '0.01em',
                  px: { xs: 1, md: 2 },
                  textTransform: 'none',
                  background: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': { background: 'none', color: '#D2B49C' },
                }}
              >
                {pages[i].split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </Button>
            ))}
          </Box>
          {/* Center logo and brand */}
          <Box sx={{ flex: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: { xs: 1, md: 4 }, mt: { xs: 3, md: 9 } }}>
            <img src={headerlogo} alt="Logo" style={{ height: 'clamp(70px, 12vw, 110px)', width: 'auto', marginBottom: 0 }} />
            <Box sx={{
                boxShadow:'none',
                backdropFilter: 'blur(10px)',
                background: 'rgba(0,0,0,0.1)',
                // borderRadius: 2,
                px: 5,
                py: 2, // increased vertical padding
                mt: 0.5,
                display: 'inline-block',
                clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)', // flipped trapezoid
            }}>
              <Typography
                sx={{
                  fontFamily: 'BaketFashion-DemoVersion-Regular, serif',
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '2.2rem', lg: '2.0rem' },
                  color: '#D2B49C',
                  fontWeight: 'normal',
                  letterSpacing: '0.01em',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  // textShadow: '0 2px 12px #0008',
                  whiteSpace: 'nowrap',
                }}
              >
                GoldFactory Jewelry
              </Typography>
            </Box>
          </Box>
          {/* Right menu items */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-start', gap: { xs: 2, md: 4, lg: 6 } }}>
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
                  px: { xs: 1, md: 2 },
                  textTransform: 'none',
                  background: 'none',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': { background: 'none', color: '#D2B49C' },
                }}
              >
                {pages[i].split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </Button>
            ))}
          </Box>
          {/* Right icons */}
          <Box sx={{ flex: 0, display: 'flex', gap: 2, alignItems: 'center', ml: { xs: 1, md: 4 } }}>
            <Tooltip title="Search">
              <IconButton sx={{ color: 'white' }}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton sx={{ color: 'white' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile">
              <IconButton sx={{ color: 'white' }}>
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

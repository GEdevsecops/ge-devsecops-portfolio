import { Box, Typography, Container, Stack, IconButton, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Button } from './Button'; 

export default function Navigation() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  /**
   * Scrolls back to the Hero section (top of the page).
   */
  const handleLogoClick = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if ID is missing: scroll to absolute top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Smoothly scrolls to the section with id="footer" or "connect".
   */
  const handleConnect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Observation Error: Could not find element with id "footer".');
    }
  };

  return (
    <Box 
      component="nav" 
      sx={{ 
        py: trigger ? 1.5 : 2.5, 
        borderBottom: '1px solid', 
        borderColor: trigger ? 'rgba(37, 99, 235, 0.2)' : 'rgba(255, 255, 255, 0.05)',
        bgcolor: trigger ? 'rgba(2, 6, 23, 0.95)' : 'rgba(2, 6, 23, 0.7)',
        backdropFilter: 'blur(16px)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1100,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* BRANDING - Now clickable to return Home/Hero */}
          <Typography 
            variant="h6" 
            onClick={handleLogoClick}
            sx={{ 
              fontWeight: 800, 
              color: 'white', 
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
                opacity: 0.9
              }
            }}
          >
            <Box component="span" sx={{ color: '#2563eb' }}>G</Box>abri-el <Box component="span" sx={{ color: '#2563eb' }}>E</Box>ne-ita.
          </Typography>

          {/* DESKTOP LINKS */}
          <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {['Projects', 'Engineering', 'Building'].map((item) => (
              <Box
                key={item}
                component="a"
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s',
                  '&:hover': { color: '#60a5fa', transform: 'translateY(-1px)' }
                }}
              >
                {item}
              </Box>
            ))}
            
            <Button 
              label="Connect"
              variant="contained" 
              onClick={handleConnect}
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.05)', 
                color: 'white',
                borderRadius: '50px', 
                px: 3,
                textTransform: 'none',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: '#2563eb',
                  borderColor: '#2563eb',
                  boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)'
                }
              }}
            />
          </Stack>

          {/* MOBILE MENU ICON */}
          <IconButton 
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
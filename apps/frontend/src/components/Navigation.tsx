import { Box, Typography, Button, Container, Stack } from '@mui/material';

export default function Navigation() {
  return (
    <Box 
      component="nav" 
      sx={{ 
        py: 2, // Adjusted padding for a sleeker look
        borderBottom: '1px solid', 
        borderColor: 'rgba(255, 255, 255, 0.05)',
        bgcolor: 'rgba(2, 6, 23, 0.8)',
        backdropFilter: 'blur(12px)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1100
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          sx={{ 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          {/* BRANDING / NAME */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 800, 
              color: 'white', 
              letterSpacing: '-0.02em',
              display: 'block' // Changed from { xs: 'none', sm: 'block' } to ensure it shows on mobile
            }}
          >
            <Box component="span" sx={{ color: '#2563eb' }}>G</Box>abri-el <Box component="span" sx={{ color: '#2563eb' }}>E</Box>ne-ita.
          </Typography>

          {/* NAV LINKS & CTA */}
          <Stack 
            direction="row" 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 4, 
              alignItems: 'center' 
            }}
          >
            {['Home', 'About', 'Solutions', 'Connect'].map((item) => (
              <Box
                key={item}
                component="a"
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#60a5fa' }
                }}
              >
                {item}
              </Box>
            ))}
            
            <Button 
              variant="contained" 
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
                  borderColor: '#2563eb'
                }
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
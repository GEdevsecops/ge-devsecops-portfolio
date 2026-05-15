import { Container, Box } from '@mui/material';
import ProfileCard from './ProfileCard';
import HeroBranding from './HeroBranding';
import { HeroBackground } from './HeroBackground'; 

const Hero = () => {
  return (
    <HeroBackground>
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: { xs: 8, md: 0 },
          minHeight: '80vh', // Ensures the background feels substantial
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', // center ensures the vertical midpoint of the Branding matches the midpoint of the Card
            // Changed to 'space-between' to push elements to opposite edges
            justifyContent: 'space-between',
            width: '100%',
            gap: { xs: 6, md: 4 } 
          }}
        >
          {/* LANE 1: THE BRANDING (Takes up more space) */}
          <Box sx={{ 
            flex: { xs: '1 1 auto', md: 1.4 }, // Increased weight to push right
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-start' // Ensure branding stays on the left
          }}>
            <HeroBranding />
          </Box>

          {/* LANE 2: THE PROFILE CARD (Pushed to the far right) */}
          <Box
            sx={{
              flex: { xs: '1 1 auto', md: 0.6 }, // Takes up less 'lane' space
              display: 'flex',
              // Force the card to the right edge on desktop
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              width: '100%',
              zIndex: 1
            }}
          >
            <Box sx={{ width: '100%', maxWidth: '420px' }}>
              <ProfileCard />
            </Box>
          </Box>
        </Box>
      </Container>
    </HeroBackground>
  );
};

export default Hero; 
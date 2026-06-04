import { Container, Box } from '@mui/material';
import ProfileCard from './ProfileCard';
import HeroBranding from './HeroBranding';
import { HeroBackground } from './HeroBackground'; 

const Hero = () => {
  return (
    <HeroBackground>
      <Container 
         id = "hero"
        maxWidth="xl" 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          px: { xs: 2, sm: 4, md: 6 } 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            // CHANGE: Center the content group so they "hug" each other
            justifyContent: 'center', 
            width: '100%',
            // CHANGE: Tightened gap to remove the "weird space"
            gap: { xs: 4, md: 8, lg: 12 }, 
            pb: { md: 10 }
          }}
        >
          {/* LANE 1: THE BRANDING */}
          <Box sx={{ 
            flex: { xs: '1 1 auto', md: '0 1 600px' }, // Cap the growth
            zIndex: 2,
            textAlign: 'left'
          }}>
            <HeroBranding />
          </Box>

          {/* LANE 2: THE PROFILE CARD */}
          <Box
            sx={{
              flex: { xs: '1 1 auto', md: '0 0 420px' }, // Fix the card width
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ProfileCard />
          </Box>
        </Box>
      </Container>
    </HeroBackground>
  );
};

export default Hero;
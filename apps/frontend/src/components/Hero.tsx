import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <Box 
      id="home"
      sx={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 1) 90%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* LEFT COLUMN: Text Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
                AGILE DEVSECOPS ENGINEER
              </Typography>
              
              <Typography variant="h1" sx={{ 
                fontSize: { xs: '3rem', md: '5rem' }, 
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}>
                Gabriel <Box component="span" sx={{ color: 'primary.main' }}>Ene-ita</Box>
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', maxWidth: '500px' }}>
                Building secure, automated, and high-performance digital experiences with a focus on full-lifecycle engineering.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px' }}>
                  View Projects
                </Button>
                <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: '8px' }}>
                  Contact Me
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT COLUMN: Profile Card Placement */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ 
              position: 'relative',
              '&::after': { // This adds a subtle glow behind your card
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(25, 118, 210, 0.15) 0%, transparent 70%)',
                zIndex: -1
              }
            }}>
              <ProfileCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
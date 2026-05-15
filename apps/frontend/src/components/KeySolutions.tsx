import { Grid, Typography, Box, Container } from '@mui/material';
import DashboardCard from './DashboardCard';
import solutionsData from '../data/solutions.json';

export default function KeySolutions() {
  return (
    <Container maxWidth="xl">
      <Box id="solutions" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 900, 
              color: 'white', 
              mb: 1,
              letterSpacing: '-0.02em' 
            }}
          >
            Key <Box component="span" sx={{ color: '#2563eb' }}>Solutions</Box>
          </Typography>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'rgba(255,255,255,0.4)', 
              fontWeight: 700, 
              letterSpacing: '0.2em' 
            }}
          >
            Scalable Platforms & Secure Architectures
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {solutionsData.map((s) => (
            <Grid key={s.id} item xs={12} md={4}>
              <DashboardCard 
                id={s.id.toString()}
                title={s.title}
                status={s.status} // Framed as "System Status" (e.g., Live, Beta)
                color={s.color}
                onView={() => console.log(`Viewing Architecture for ${s.title}`)} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
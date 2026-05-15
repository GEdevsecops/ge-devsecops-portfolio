// components/HeroBackground.tsx
import { Box } from '@mui/material';

export const HeroBackground = ({ children }: { children: React.ReactNode }) => (
  <Box
    id="home"
    component="section"
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center',
      bgcolor: '#020617',
      background: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, #020617 80%)',
      pt: { xs: 12, md: 0 },
      overflow: 'hidden',
      position: 'relative'
    }}
  >
    {children}
  </Box>
);
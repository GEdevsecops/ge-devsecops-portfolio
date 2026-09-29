import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const HeroBranding = () => {
  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: '700px' }}>
      {/* 1. Professional Label - The "Start" Anchor for Eye Scan */}
      <Typography
        sx={{
          color: 'rgba(255, 255, 255, 0.6)', 
          fontWeight: 800, 
          letterSpacing: '0.35em',
          fontSize: { xs: '0.75rem', md: '0.95rem' },
          display: 'flex',
          alignItems: 'center',
          textTransform: 'uppercase',
          mb: 0.5,
          '&::before': {
            content: '""', 
            width: '30px', 
            height: '2px', 
            bgcolor: '#2563eb', 
            mr: 2, 
            display: 'inline-block'
          }
        }}
      >
        Full-Stack DevSecOps Engineer
      </Typography>

      {/* 2. GEdevops LOGO - Tightened for GEdevops length */}
      <Box sx={{ position: 'relative' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 900, 
            fontSize: { xs: '3.2rem', sm: '4.2rem', md: '5.2rem' }, // Scaled down slightly for "ops" length
            lineHeight: 1,
            letterSpacing: '-0.05em', // Tighter kerning to keep the brand compact
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FFFFFF 30%, #60a5fa 70%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          GE<Box component="span" sx={{ color: '#2563eb', WebkitTextFillColor: '#2563eb' }}>devops</Box>
        </Typography>
      </Box>

      {/* 3. Mission Statement - Styled as a Technical Blockquote */}
      <Stack spacing={3}>
        <Typography variant="body1" sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          color: 'white',
          fontWeight: 500,
          lineHeight: 1.5,
          pl: 3, py: 1.5,
          maxWidth: '550px', // Prevents stretching past the ProfileCard
          background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.12) 0%, transparent 100%)',
          borderLeft: '4px solid #2563eb',
          fontStyle: 'italic',
          letterSpacing: '0.01em'
        }}>
          "I architect secure web platforms using a DevSecOps methodology."
        </Typography>
        
        <Typography variant="body1" sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '580px',
          lineHeight: 1.8,
          fontSize: '1rem',
          '& strong': { 
            color: '#60a5fa', // Brand blue for highlights
            fontWeight: 700, 
            fontFamily: 'monospace', 
            bgcolor: 'rgba(37, 99, 235, 0.15)', 
            border: '1px solid rgba(37, 99, 235, 0.3)',
            px: 0.8, 
            py: 0.2,
            borderRadius: '4px',
          }
        }}>
          Engineering scalable systems with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Turborepo</strong>, prioritizing security and automation throughout the development lifecycle.
        </Typography>
      </Stack>

      {/* 4. Action CTA */}
      <Box sx={{ pt: 1 }}>
        <Button
          component={motion.button}
          whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(37, 99, 235, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          variant="contained"
          size="large"
          sx={{ 
            px: 6, py: 2, 
            fontWeight: 800, 
            borderRadius: '12px', 
            textTransform: 'none', 
            fontSize: '1.1rem', 
            background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
            boxShadow: '0 15px 30px -10px rgba(37, 99, 235, 0.4)'
          }}
        >
          Explore Architecture
        </Button>
      </Box>
    </Stack>
  );
};

export default HeroBranding;
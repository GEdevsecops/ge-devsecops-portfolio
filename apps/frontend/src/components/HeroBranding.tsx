import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const HeroBranding = () => {
  return (
    <Stack spacing={4} sx={{ width: '100%' }}>
      {/* 1. Professional Label */}
      <Typography
        sx={{
          color: 'rgba(255, 255, 255, 0.6)', 
          fontWeight: 800, 
          letterSpacing: '0.35em',
          fontSize: { xs: '0.85rem', md: '1.05rem' },
          display: 'flex',
          alignItems: 'center',
          textTransform: 'uppercase',
          mb: 0.5,
          '&::before': {
            content: '""', 
            width: '25px', 
            height: '2px', 
            bgcolor: '#2563eb', 
            mr: 2, 
            display: 'inline-block'
          }
        }}
      >
        Full-Stack DevSecOps Engineer
      </Typography>

      {/* 2. GEdev LOGO */}
      <Box sx={{ position: 'relative' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 900, 
            fontSize: { xs: '3.8rem', md: '5.5rem' },
            lineHeight: 1,
            letterSpacing: '-0.04em',
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FFFFFF 20%, #60a5fa 60%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          GE<Box component="span" sx={{ color: '#2563eb', WebkitTextFillColor: '#2563eb' }}>dev</Box>
        </Typography>
      </Box>

      {/* 3. Mission Statement & Accessible Tech Stack */}
      <Stack spacing={3}>
        <Typography variant="body1" sx={{
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          color: 'white',
          fontWeight: 500,
          lineHeight: 1.6,
          pl: 3, py: 1.5,
          maxWidth: '600px',
          background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, transparent 100%)',
          borderLeft: '4px solid',
          borderColor: '#2563eb',
          fontStyle: 'italic'
        }}>
          "I architect secure web platforms using a DevSecOps methodology."
        </Typography>
        
        <Typography variant="body1" sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '620px',
          lineHeight: 1.8,
          fontSize: '1.05rem',
          '& strong': { 
            color: 'white', 
            fontWeight: 700, 
            fontFamily: 'monospace', 
            // Accessibility improvement for contrast
            bgcolor: 'rgba(37, 99, 235, 0.25)', 
            border: '1px solid rgba(37, 99, 235, 0.4)',
            px: 1, 
            py: 0.3,
            borderRadius: '4px',
            display: 'inline-block',
            mt: { xs: 0.5, md: 0 }
          }
        }}>
          Engineering scalable systems with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Turborepo</strong>, prioritizing security and automation throughout the development lifecycle.
        </Typography>
      </Stack>

      <Box sx={{ pt: 2 }}>
        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant="contained"
          size="large"
          sx={{ 
            px: 5, py: 2, 
            fontWeight: 800, 
            borderRadius: '12px', 
            textTransform: 'none', 
            fontSize: '1.1rem', 
            background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
            boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.3)'
          }}
        >
          Explore Architecture
        </Button>
      </Box>
    </Stack>
  );
};

export default HeroBranding;
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'; 
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { 
  GitHub, LinkedIn, Email, 
  Security, Speed, SettingsInputComponent 
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const footerSlides = [
  { id: 'infra', label: 'INFRASTRUCTURE', details: 'Multi-Region Cloud Architecture', icon: <SettingsInputComponent sx={{ fontSize: 16 }} /> },
  { id: 'status', label: 'SYSTEM STATUS', details: 'All Nodes Operational // v2.0.4', icon: <Speed sx={{ fontSize: 16 }} /> },
  { id: 'security', label: 'SECURITY PROTOCOL', details: 'AES-256 Encrypted Layer Active', icon: <Security sx={{ fontSize: 16 }} /> }
];

const socialLinks = [
  { id: 'github', Icon: GitHub, label: 'GitHub' },
  { id: 'linkedin', Icon: LinkedIn, label: 'LinkedIn' },
  { id: 'email', Icon: Email, label: 'Email' },
];

export default function FooterContainer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % footerSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box 
      id="footer" 
      component="footer" 
      sx={{ 
        py: 6, 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'linear-gradient(to top, rgba(37, 99, 235, 0.03), transparent)',
        mt: 'auto' 
      }}
    >
      <Container maxWidth="xl">
        <Grid 
          container 
          sx={{ 
            alignItems: 'center',
            justifyContent: 'space-between' 
          }}
        >
          {/* 1. SOCIALS (LEFT) */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Stack direction="row" spacing={1.5}>
              {socialLinks.map(({ id, Icon, label }) => (
                <IconButton 
                  key={id} 
                  aria-label={label}
                  size="small"
                  sx={{ 
                    color: 'rgba(255,255,255,0.4)', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { 
                      color: '#2563eb', 
                      borderColor: '#2563eb', 
                      bgcolor: 'rgba(37, 99, 235, 0.05)',
                      transform: 'translateY(-2px)'
                    } 
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* 2. CAROUSEL (MIDDLE) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={footerSlides[index].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', alignItems: 'center', mb: 0.5 }}>
                    <Box sx={{ color: '#2563eb', display: 'flex' }}>{footerSlides[index].icon}</Box>
                    <Typography variant="overline" sx={{ color: '#2563eb', fontWeight: 900, letterSpacing: '0.2em', fontSize: '0.65rem' }}>
                      {footerSlides[index].label}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                    {footerSlides[index].details}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Grid>

          {/* 3. LOGO & COPYRIGHT (RIGHT) */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ 
            textAlign: { xs: 'center', md: 'right' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-end' }
          }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: 'white', mb: 0.5 }}>
              GE<Box component="span" sx={{ color: '#2563eb' }}>devops</Box>
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', display: 'block' }}>
              © 2026 GABRIEL ENE-ITA // ARCHITECTING SECURE FUTURES
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
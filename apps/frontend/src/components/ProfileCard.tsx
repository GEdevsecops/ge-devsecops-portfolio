import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: { xs: '320px', md: '380px' }, 
        // CLEANED: ml: 'auto' and right offsets removed for central lane alignment
        zIndex: 2,
      }}
    >
      {/* 📷 MAIN PHOTO FRAME */}
      <Box 
        component={motion.div}
        whileHover={{ y: -15 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        sx={{ 
          width: '100%', 
          aspectRatio: '0.85/1', 
          bgcolor: '#020617',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(37, 99, 235, 0.3)',
          display: 'flex',
          flexDirection: 'column', 
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.9)',
          position: 'relative',
          cursor: 'pointer',
          '&:hover': {
            borderColor: '#60a5fa',
            boxShadow: '0 0 50px rgba(37, 99, 235, 0.35)'
          }
        }} 
      >
        {/* PHOTO AREA */}
        <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <Box
            component="img"
            src="/gedevfounder.jpg" 
            alt="Gabriel Ene-ita"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
              '&:hover': { transform: 'scale(1.12)' }
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500/020617/2563eb?text=GE";
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent)'
          }}/>
        </Box>

        {/* 🛡️ DOCKED METRICS PANEL */}
        <Box 
          sx={{ 
            bgcolor: 'rgba(15, 23, 42, 0.9)', 
            backdropFilter: 'blur(12px)',
            p: 2.5,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#2563eb', 
              fontWeight: 900, 
              display: 'block', 
              mb: 1.5, 
              lineHeight: 1,
              letterSpacing: 2.5,
              fontSize: '0.65rem',
              textAlign: 'center'
            }}
          >
            Engineering Metrics
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={1} 
            divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.08)' }} />}
            sx={{ justifyContent: 'space-between' }}
          >
            {[
              { icon: '🚀', val: '10+', label: 'Projects' },
              { icon: '🛡️', val: '100%', label: 'Secure' },
              { icon: '👥', val: '100+', label: 'Helped' }
            ].map((metric, i) => (
              <Box 
                key={i}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.2) }}
                sx={{ flex: 1, textAlign: 'center' }}
              >
                <Typography sx={{ fontSize: '1.4rem', mb: 0.5, filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.5))' }}>
                  {metric.icon}
                </Typography>
                <Typography variant="caption" sx={{ color: 'white', fontWeight: 800, display: 'block', lineHeight: 1.2, fontSize: '0.75rem' }}>
                  {metric.val}<br/>
                  <Box component="span" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{metric.label}</Box>
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Pulsing Background Glow */}
      <Box 
        component={motion.div}
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '100%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
          zIndex: -1,
          filter: 'blur(50px)'
        }} 
      />
    </Box>
  );
};

export default ProfileCard;
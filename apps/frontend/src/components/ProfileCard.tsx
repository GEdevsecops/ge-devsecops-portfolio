import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

const ENGINEERING_HIGHLIGHTS = [
  {
    icon: '🚀',
    value: 'Full Stack',
    label: 'Development',
  },
  {
    icon: '🛡️',
    value: 'CI/CD',
    label: 'Delivery',
  },
  {
    icon: '🧪',
    value: 'Jest',
    label: 'Testing',
  },
];

const ProfileCard = () => {
  const prefersReducedMotion = useReducedMotion();
  const [imageSrc, setImageSrc] = useState('/gedevfounder.jpg');
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (!imageFailed) {
      setImageFailed(true);
      setImageSrc('/profile-fallback.png');
      return;
    }

    // Keep the fallback from repeatedly triggering an error.
    setImageSrc('');
  };

  return (
    <Box
      component={motion.div}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, scale: 0.96, x: 20 }
      }
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: '320px', md: '380px' },
        mx: 'auto',
        zIndex: 2,
      }}
    >
      {/* MAIN PROFILE CARD */}
      <Box
        component={motion.div}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.3,
          ease: 'circOut',
        }}
        sx={{
          width: '100%',
          aspectRatio: '0.85 / 1',
          bgcolor: '#020617',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(37, 99, 235, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.9)',
          position: 'relative',
          transition:
            'border-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            borderColor: '#60a5fa',
            boxShadow: '0 0 35px rgba(37, 99, 235, 0.25)',
          },
        }}
      >
        {/* PHOTO AREA */}
        <Box
          sx={{
            flex: '1 1 auto',
            minHeight: 0,
            position: 'relative',
            overflow: 'hidden',
            bgcolor: '#0f172a',
          }}
        >
          {imageSrc ? (
            <Box
              component="img"
              src={imageSrc}
              alt="Portrait of Gabriel Ene-ita"
              onError={handleImageError}
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: prefersReducedMotion
                  ? 'none'
                  : 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
                ...(!prefersReducedMotion && {
                  '.MuiBox-root:hover &': {
                    transform: 'scale(1.06)',
                  },
                }),
              }}
            />
          ) : (
            <Box
              role="img"
              aria-label="Profile photo unavailable"
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'radial-gradient(circle at center, rgba(37, 99, 235, 0.2), #020617 70%)',
              }}
            >
              <Typography
                aria-hidden="true"
                sx={{
                  fontSize: '4rem',
                  fontWeight: 900,
                  letterSpacing: '-0.08em',
                  color: '#60a5fa',
                }}
              >
                GE
              </Typography>
            </Box>
          )}

          {/* PHOTO GRADIENT */}
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
              pointerEvents: 'none',
              background:
                'linear-gradient(to top, rgba(2, 6, 23, 0.8), transparent)',
            }}
          />
        </Box>

        {/* ENGINEERING HIGHLIGHTS */}
        <Box
          sx={{
            flexShrink: 0,
            bgcolor: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            p: { xs: 1.5, sm: 2.5 },
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#60a5fa',
              fontWeight: 900,
              display: 'block',
              mb: { xs: 1.5, sm: 2 },
              lineHeight: 1.3,
              letterSpacing: { xs: 1.8, sm: 2.5 },
              fontSize: '0.65rem',
              textAlign: 'center',
            }}
          >
            Engineering at a Glance
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 0.5, sm: 1 }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.12)',
                }}
              />
            }
            sx={{
              alignItems: 'stretch',
              justifyContent: 'space-between',
              minWidth: 0,
            }}
          >
            {ENGINEERING_HIGHLIGHTS.map((item) => (
              <Stack
                key={item.value}
                component={motion.div}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.35,
                  delay: prefersReducedMotion
                    ? 0
                    : ENGINEERING_HIGHLIGHTS.indexOf(item) * 0.12,
                }}
                spacing={0.5}
                sx={{
                  flex: '1 1 0',
                  minWidth: 0,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  textAlign: 'center',
                  py: 0.25,
                }}
              >
                <Typography
                  component="span"
                  aria-hidden="true"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.4rem' },
                    lineHeight: 1.3,
                    filter:
                      'drop-shadow(0 0 6px rgba(37, 99, 235, 0.35))',
                  }}
                >
                  {item.icon}
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: {
                      xs: '0.68rem',
                      sm: '0.75rem',
                    },
                    lineHeight: 1.25,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {item.value}
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    fontSize: {
                      xs: '0.62rem',
                      sm: '0.7rem',
                    },
                    lineHeight: 1.3,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* DECORATIVE BACKGROUND GLOW */}
      <Box
        component={motion.div}
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? { scale: 1, opacity: 0.25, rotate: 0 }
            : {
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 3, 0],
              }
        }
        transition={{
          duration: prefersReducedMotion ? 0 : 6,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '100%',
          height: '60%',
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)',
          zIndex: -1,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default ProfileCard;
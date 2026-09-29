import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const socialLinks = [
  {
    id: 'github',
    Icon: GitHub,
    label: 'GitHub',
    href: 'https://github.com/GEdevsecops/ge-devsecops-portfolio',
  },
  {
    id: 'linkedin',
    Icon: LinkedIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-e-966884339/',
  },
  {
    id: 'email',
    Icon: Email,
    label: 'Email',
    href: 'mailto:eneitagabriel@gmail.com',
  },
];

export default function FooterContainer() {
  return (
    <Box
      id="connect"
      component="footer"
      sx={{
        py: 8,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background:
          'linear-gradient(to top, rgba(37, 99, 235, 0.03), transparent)',
        mt: 'auto',
        scrollMarginTop: '80px',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 800,
            }}
          >
            LET'S CONNECT
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
            }}
          >
            Interested in my work or want to discuss an engineering
            opportunity? You can find me through the links below.
          </Typography>

          <Stack direction="row" spacing={1.5}>
            {socialLinks.map(({ id, Icon, label, href }) => (
              <IconButton
                key={id}
                component="a"
                href={href}
                target={id === 'email' ? undefined : '_blank'}
                rel={id === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={label}
                size="medium"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: '#2563eb',
                    borderColor: '#2563eb',
                    bgcolor: 'rgba(37, 99, 235, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Stack>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: 'white',
              pt: 3,
            }}
          >
            GE
            <Box component="span" sx={{ color: '#2563eb' }}>
              devops
            </Box>
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
            }}
          >
            © 2026 GABRIEL ENE-ITA
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Drawer,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Button } from './Button';

type NavSectionId = 'projects' | 'engineering' | 'building';
type SectionId = 'hero' | NavSectionId | 'connect';

const NAV_ITEMS: NavSectionId[] = ['projects', 'engineering', 'building'];
const OBSERVED_IDS: SectionId[] = ['hero', ...NAV_ITEMS, 'connect'];

// Type guard for navigation section IDs.
const isNavId = (id: string): id is NavSectionId =>
  (NAV_ITEMS as string[]).includes(id);

// Height fallback for the fixed navigation plus breathing room.
const NAV_OFFSET = 80;

// Allows the mobile drawer to finish closing before scrolling.
const DRAWER_CLOSE_DELAY_MS = 300;

const NAV_BACKGROUND = 'rgba(2, 6, 23, 0.85)';
const NAV_BACKGROUND_SCROLLED = 'rgba(2, 6, 23, 0.97)';
const NAV_BORDER = 'rgba(255, 255, 255, 0.08)';
const NAV_BORDER_SCROLLED = 'rgba(37, 99, 235, 0.25)';

export default function Navigation() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const [active, setActive] = useState<NavSectionId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Highlights the navigation link for the section in view.
  // Hero and Connect clear the highlight to avoid stale active links.
  useEffect(() => {
    const elements = OBSERVED_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(isNavId(id) ? id : null);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scrolls to a section without hiding its heading behind the fixed navbar.
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);

    if (!element) {
      console.error(
        `Navigation error: Could not find section "${id}".`
      );
      return;
    }

    const nav = document.querySelector(
      'nav[aria-label="Main navigation"]'
    );
    const navHeight =
      nav?.getBoundingClientRect().height ?? NAV_OFFSET;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navHeight -
      12;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  // Closes the mobile drawer before navigating to the selected section.
  const navigateTo = (id: SectionId) => {
    if (mobileOpen) {
      setMobileOpen(false);
      window.setTimeout(
        () => scrollToSection(id),
        DRAWER_CLOSE_DELAY_MS
      );
    } else {
      scrollToSection(id);
    }
  };

  const handleLogoClick = () => {
    setActive(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: NavSectionId
  ) => {
    event.preventDefault();
    navigateTo(id);
  };

  const handleConnect = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigateTo('connect');
  };

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        py: trigger ? 1 : 1.5,
        borderBottom: '1px solid',
        borderColor: trigger ? NAV_BORDER_SCROLLED : NAV_BORDER,
        bgcolor: trigger ? NAV_BACKGROUND_SCROLLED : NAV_BACKGROUND,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1100,
        transition:
          'background-color 0.3s ease, border-color 0.3s ease, padding 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* BRANDING */}
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              handleLogoClick();
            }}
            sx={{
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s, opacity 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
                opacity: 0.9,
              },
              '&:focus-visible': {
                outline: '2px solid #60a5fa',
                outlineOffset: '4px',
                borderRadius: '2px',
              },
            }}
          >
            <Box component="span" sx={{ color: '#2563eb' }}>
              G
            </Box>
            abri-el{' '}
            <Box component="span" sx={{ color: '#2563eb' }}>
              E
            </Box>
            ne-ita.
          </Typography>

          {/* DESKTOP LINKS */}
          <Stack
            direction="row"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {NAV_ITEMS.map((id) => {
              const isActive = active === id;

              return (
                <Box
                  key={id}
                  component="a"
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                    handleLinkClick(event, id)
                  }
                  sx={{
                    display: 'inline-block',
                    color: isActive
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    pb: 0.5,
                    borderBottom: '2px solid',
                    borderColor: isActive ? '#2563eb' : 'transparent',
                    transition:
                      'color 0.2s, border-color 0.2s, transform 0.2s',
                    '&:hover': {
                      color: '#60a5fa',
                      transform: 'translateY(-1px)',
                    },
                    '&:focus-visible': {
                      outline: '2px solid #60a5fa',
                      outlineOffset: '4px',
                      borderRadius: '2px',
                    },
                  }}
                >
                  {id}
                </Box>
              );
            })}

            <Button
              label="Connect"
              variant="contained"
              onClick={handleConnect}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                borderRadius: '50px',
                px: 3,
                textTransform: 'none',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: '#2563eb',
                  borderColor: '#2563eb',
                 boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)',
                },
              }}
            />
          </Stack>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
            }}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              bgcolor: 'rgba(2, 6, 23, 0.98)',
              color: 'white',
              p: 3,
            },
          },
        }}
      >
        <Stack sx={{ alignItems: 'flex-end', mb: 2 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: 'white' }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack sx={{ gap: 3 }}>
          {NAV_ITEMS.map((id) => (
            <Box
              key={id}
              component="a"
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                handleLinkClick(event, id)
              }
              sx={{
                color:
                  active === id
                    ? '#60a5fa'
                    : 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                '&:focus-visible': {
                  outline: '2px solid #60a5fa',
                  outlineOffset: '4px',
                },
              }}
            >
              {id}
            </Box>
          ))}

          <Button
            label="Connect"
            variant="contained"
            onClick={handleConnect}
            sx={{
              bgcolor: '#2563eb',
              color: 'white',
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 700,
            }}
          />
        </Stack>
      </Drawer>
    </Box>
  );
}

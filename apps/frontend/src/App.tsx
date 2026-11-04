import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Navigation from './components/Navigation';
import HeroSection from './components/Hero';
import Engineering from './pages/Engineering';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import FooterContainer from './containers/FooterContainer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
    },
    background: {
      default: '#020617',
      paper: '#0f172a',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Navigation />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: { xs: '80px', md: '100px' },
          }}
        >
          <HeroSection />
          <Engineering />
          <Projects />
          <Skills />
        </Box>

        <FooterContainer />
      </Box>
    </ThemeProvider>
  );}

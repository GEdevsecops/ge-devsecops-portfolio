import { Container, Typography, Grid, Box } from '@mui/material';

export default function Connect() {
  const connectionTypes = [
    { label: 'Talk to Me', sub: 'Schedule a call' },
    { label: 'Follow on Socials', sub: 'LinkedIn & GitHub' },
    { label: 'Give Feedback', sub: 'Usability & Architecture' },
    { label: 'Email Me', sub: 'Direct communication' }
  ];

  return (
    <Box 
      id="connect" 
      component="section" 
      sx={{ 
        py: 15, 
        scrollMarginTop: "80px",
        bgcolor: "transparent" 
      }}
    >
      <Container maxWidth="lg">
        {/* SONARQUBE FIX: Comments inside the return block MUST be wrapped in curly braces.
          This ensures the comment isn't rendered as literal text on your page.
        */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800, 
            color: "white", 
            mb: 6,
            letterSpacing: "-0.02em" 
          }}
        >
          CONNECT <Box component="span" sx={{ color: "#2563eb", fontFamily: 'monospace' }}>// NETWORK</Box>
        </Typography>
        
        <Grid container spacing={4}>
          {connectionTypes.map((type) => (
            <Grid key={type.label} size={{xs: 12, md: 6}}>
              <Box sx={{ 
                p: 6, 
                bgcolor: "rgba(2, 6, 23, 0.4)", 
                border: "1px solid rgba(255,255,255,0.05)", 
                borderRadius: 8, 
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { 
                  borderColor: "#2563eb",
                  bgcolor: "rgba(37, 99, 235, 0.08)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.3)"
                } 
              }}>
                <Typography variant="h5" sx={{ color: "white", fontWeight: 700 }}>
                  {type.label}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", mt: 1 }}>
                  {type.sub}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
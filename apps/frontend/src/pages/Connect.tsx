import { Container, Typography, Grid, Box } from '@mui/material';

export default function Connect() {
  const connectionTypes = ['Talk to Me', 'Follow on Socials', 'Give Feedback', 'Email Me'];

  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h2" className="text-white font-black mb-4">Let's Connect</Typography>
      
      <Grid container spacing={4}>
        {connectionTypes.map((type) => (
          <Grid key={type} size={{ xs: 12, md: 6 }}>
            <Box className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500 transition-colors cursor-pointer">
              <Typography variant="h5" className="text-white font-bold">{type}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Hero() {
  return (
    <Grid size={{ xs: 12, md: 7 }}>
  {/* The Big Bold Heading */}
  <Typography variant="h1" className="text-5xl md:text-7xl font-black mb-4 leading-[1.1] tracking-tighter">
    <span className="text-gradient">Build Better</span> <span className="text-white">Digital</span><br />
    <span className="text-white">Experiences</span>
  </Typography>

  {/* Refined Subheading */}
  <Typography variant="h6" className="text-slate-300 font-bold mb-6 max-w-md leading-snug">
    Simple, fast, and beautiful platforms that win and get real results.
  </Typography>

  {/* Description - Smaller and Grayer for contrast */}
  <Typography variant="body1" className="text-slate-500 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
    Websites and apps that are easy to use, look great, and work fast. Get more customers with ease. No stress, no confusion — just simple, reliable solutions.
  </Typography>

  {/* Buttons - Improved Placement */}
  <Box className="flex flex-wrap gap-4">
    <Button 
      variant="contained" 
      className="bg-white text-black hover:bg-slate-200 rounded-full px-10 py-4 normal-case font-black shadow-lg shadow-white/5"
    >
      Work with Me
    </Button>
    <Button 
      variant="outlined" 
      className="border-slate-700 text-white hover:bg-white/5 rounded-full px-10 py-4 normal-case font-bold"
    >
      Help Me Free
    </Button>
  </Box>
    </Grid>
  );
}

export default Hero;
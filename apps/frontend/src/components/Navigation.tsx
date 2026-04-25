import { Box, Typography, Button, Container, Avatar } from '@mui/material';

export default function Navigation() {
  return (
    <Box component="nav" className="py-6 border-b border-slate-800">
      <Container maxWidth="lg" className="flex justify-between items-center">
        <Box className="flex items-center gap-3">
          <Avatar className="bg-indigo-600 rounded-xl">GE</Avatar>
          <Typography variant="h6" className="font-bold text-white">Gabriel Ene-ita</Typography>
        </Box>
        <Box className="hidden md:flex gap-8 items-center text-slate-400">
          {['Home', 'About', 'Solutions', 'Connect'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <Button variant="contained" className="bg-slate-800 rounded-full px-6">Login</Button>
        </Box>
      </Container>
    </Box>
  );
}
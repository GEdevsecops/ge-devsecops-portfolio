import { Box, Typography } from '@mui/material';

const Badge = ({ text, position }: { text: string; position: string }) => (
  <Box className={`absolute ${position} bg-[#0F172A]/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-xl z-20`}>
    <Typography className="text-[10px] font-black text-slate-300 tracking-tighter uppercase">
      {text}
    </Typography>
  </Box>
);

export default function ProfileCard() {
  return (
    <Box className="relative w-fit mx-auto">
      {/* Floating Stats from your image */}
      <Badge text="100+ People Helped" position="-top-10 -left-10" />
      <Badge text="3+ Industries Worked In" position="-top-5 -right-10" />
      <Badge text="10+ Projects Delivered" position="-bottom-5 -left-16" />
      <Badge text="80% Clients Return" position="bottom-5 -right-16" />

      {/* Main Image Container */}
      <Box className="relative bg-slate-900 rounded-[2rem] p-4 border border-slate-800 shadow-2xl overflow-hidden">
        <Box className="bg-slate-950 rounded-[1.5rem] p-8 border border-dashed border-slate-800 text-center">
          <Box className="w-48 h-48 bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center overflow-hidden grayscale">
             {/* Replace with your image path */}
             <div className="text-4xl">👤</div> 
          </Box>
          <Typography variant="h5" className="font-black text-white tracking-tight">
            Gabriel Ene-ita
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
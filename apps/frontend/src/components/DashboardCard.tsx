import { Card, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DashboardCardProps {
  id: string;
  title: string;
  status: string;
  color: string;
  direction: string;
  onView: () => void;
}

export default function DashboardCard({ id, title, status, color, direction, onView }: DashboardCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/solutions/${id}`)}
      sx={{ 
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.02)', // Glass effect
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          transform: 'translateY(-10px)',
          borderColor: '#2563eb', // Blue brand color
          boxShadow: '0 20px 40px -20px rgba(37, 99, 235, 0.5)',
          '& .glow': { opacity: 1 }
        }
      }}
    >
      <CardContent sx={{ p: 5 }}>
        {/* Visual Indicator */}
        <Box 
          className="glow"
          sx={{ 
            position: 'absolute', top: -1, left: -1, right: -1, bottom: -1,
            borderRadius: '20px', border: '2px solid #2563eb',
            opacity: 0, transition: 'opacity 0.4s', zIndex: 0, pointerEvents: 'none'
          }} 
        />

        <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: color }} />
             <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 800, letterSpacing: '0.1em' }}>
               {status}
             </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'white', mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {direction}
            </Typography>
          </Box>

          <Button 
            sx={{ 
              color: '#2563eb', justifyContent: 'flex-start', p: 0, 
              fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em',
              '&:hover': { bgcolor: 'transparent', color: 'white' }
            }}
          >
            VIEW ARCHITECTURE →
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
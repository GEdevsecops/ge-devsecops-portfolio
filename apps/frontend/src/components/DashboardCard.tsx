import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DashboardCardProps {
  id: string;
  title: string;
  status: string;
  color: string;
  onView: () => void;
}

type ReadonlyDashboardCardProps = Readonly<DashboardCardProps>;

export default function DashboardCard({ id, title, status, color, onView }: ReadonlyDashboardCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-full bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all cursor-pointer group"
      onClick={() => navigate(`/solutions/${id}`)} // Redirect logic
    >
      <CardContent className="p-8">
        <Box className="w-12 h-12 rounded-full mb-6" style={{ backgroundColor: color }} />
        <Typography variant="h5" className="font-bold text-white mb-2 group-hover:text-indigo-400">
          {title}
        </Typography>
        <Typography variant="body2" className="text-slate-400 mb-6">
          {status}
        </Typography>
        <Button 
          className="text-indigo-400 p-0 normal-case font-bold hover:bg-transparent"
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
        >
          View Solution →
        </Button>
      </CardContent>
    </Card>
  );
}
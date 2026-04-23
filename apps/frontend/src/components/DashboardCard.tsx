import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function DashboardCard({ title, status, color, onView }: any) {
  return (
    <Card className="h-full border-t-4 shadow-sm" style={{ borderTopColor: color }}>
      <CardContent className="flex flex-col h-full">
        <Box className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="font-bold text-slate-800">{title}</Typography>
        </Box>
        <Typography variant="body2" className="text-slate-500 flex-grow mb-4">
          Status: {status}
        </Typography>
        <Button 
          variant="contained" 
          onClick={onView}
          className="bg-slate-900 hover:bg-black normal-case shadow-none"
        >
          View Solution
        </Button>
      </CardContent>
    </Card>
  );
}
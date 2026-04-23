import React from 'react';
import { Modal, Box, Typography, Button, Divider } from '@mui/material';

export default function DetailModal({ isOpen, handleClose, data }: any) {
  return (
    <Modal open={isOpen} onClose={handleClose} className="flex items-center justify-center">
      <Box className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm outline-none">
        {data && (
          <>
            <Typography variant="h5" className="font-bold mb-1">{data.title}</Typography>
            <Divider className="my-4" />
            <Typography variant="body1" className="text-slate-600 mb-6">
              Details for the {data.title} solution will be rendered here.
            </Typography>
            <Button fullWidth variant="outlined" onClick={handleClose} className="border-slate-800 text-slate-800">
              Close
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
}
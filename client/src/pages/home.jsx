import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Paper elevation={6} className="p-6 rounded-lg text-center shadow-lg">
        <Typography variant="h2" component="h1" className="text-white mb-4">
          Welcome to Our Movie Database!
        </Typography>
        <Typography variant="h5" component="p" className="text-white mb-4">
          Discover your favorite movies, add new ones, and manage your collection effortlessly.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: 'red', fontFamily: 'monospace', margin:'4px' }} className="mt-4">
          Get Started
        </Button>
      </Paper>
      <Typography variant="h6" component="p" className="mt-6 text-white">
        Explore the latest movies and share your thoughts with others!
      </Typography>
    </Box>
  );
};

export default Home;

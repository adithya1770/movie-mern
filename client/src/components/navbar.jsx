import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <Box display="flex" justifyContent="flex-start" padding={2}>
            <Link to="/" style={{ textDecoration: 'none', marginRight: '16px' }}>
                <Button variant="contained">Home</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', marginRight: '16px' }}>
                <Button variant="contained">Login</Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="contained">Sign Up</Button>
            </Link>
        </Box>
    );
};

export default Navbar;

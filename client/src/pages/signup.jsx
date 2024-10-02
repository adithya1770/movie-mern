import React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Signup = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');

    const signUp = async () => {
        try {
            const sendData = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: user, password: pass }),
            });
            setMsg('success!');
        } catch {
            setMsg('bad req.');
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Sign Up
            </Typography>
            <TextField
                variant="outlined"
                label="Username"
                fullWidth
                margin="normal"
                onChange={(e) => setUser(e.target.value)}
            />
            <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                onChange={(e) => setPass(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                onClick={signUp}
            >
                Submit
            </Button>
            <Typography variant="body1" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
                {msg}
            </Typography>
        </Container>
    );
};

export default Signup;

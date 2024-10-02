import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography, Container } from '@mui/material';
import './login.css'

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const logIn = async () => {
        try {
            const sendData = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: user, password: pass }),
            });
            const data = await sendData.json();
            setMsg(data.msg);
            setToken(data.token);
            console.log(data.token);
            navigate('/main');
        } catch {
            setMsg('bad req.');
        }
    };

    return (
        <Container style={{ marginTop: '60px', backgroundColor:'white', width:'60%', height:'325px', borderRadius: '10px'}}>
            <Typography variant="h4" component="h1" gutterBottom style={{paddingTop: '30px'}}>
                Log In
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    id="username"
                    label="Username"
                    variant="filled"
                    type="text"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setUser(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="filled"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPass(e.target.value)}
                />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth 
                    onClick={logIn}
                >
                    Submit
                </Button>
            </Box>
            <Typography variant="body1" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
                {msg}
            </Typography>
        </Container>
    );
};

export default Login;

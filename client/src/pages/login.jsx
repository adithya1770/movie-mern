import React from 'react'
import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);
    const logIn = async () => {
        try{
          const sendData = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({username: user, password: pass})
          })
          const data = await sendData.json();
          setMsg(data.msg);
          setToken(data.token);
          console.log(data.token)
          navigate('/main');
        }
        catch{
          setMsg('bad req.');
        }
      }
  return (
    <div>
      <h1>Log IN</h1>
      <input type="text" name='username' className='border-2 border-black' onChange={(e) => {setUser(e.target.value)}}/> <br />
      <input type="password" name='password' className='border-2 border-black' onChange={(e) => {setPass(e.target.value)}} /> <br />
      <button onClick={logIn}>Submit</button>
      <p>{msg}</p>
    </div>
  )
}

export default Login

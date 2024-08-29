import React from 'react'
import { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');
    const signUp = async () => {
        try{
          const sendData = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({username: user, password: pass})
          })
          setMsg('success!')
        }
        catch{
          setMsg('bad req.');
        }
      }
  return (
    <div>
      <h1>Sign UP</h1>
      <input type="text" name='username' className='border-2 border-black' onChange={(e) => {setUser(e.target.value)}}/> <br />
      <input type="password" name='password' className='border-2 border-black' onChange={(e) => {setPass(e.target.value)}} /> <br />
      <button onClick={signUp}>Submit</button>
      <p>{msg}</p>
    </div>
  )
}

export default Signup

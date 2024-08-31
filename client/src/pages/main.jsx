import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext';
import Content from './api-render/content';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { token, setToken } = useContext(AuthContext);
  const [isTrue, setTrue] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(token){
      setTrue(true);
    }
    else{
      setTrue(false);
    }
  }, [token])
  const handleLogout = () => {
    setToken(null);
    setTrue(false);
    // the above is redundant but i like it hehe...
    navigate('/')
  };
  return (
    <div>
      {isTrue?<Content/>:<h1>error</h1>}
      {isTrue && <button className='ml-2' onClick={handleLogout}>Log Out</button>}
    </div>
  )
}

export default Main

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/main';
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import { AuthProvider } from './AuthContext'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

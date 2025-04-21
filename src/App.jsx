// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';  // Import the AuthContext

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Orders from './components/Orders/Orders';
import Checkout from './pages/Checkout';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <LoginPage />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

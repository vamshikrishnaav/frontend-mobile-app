import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Order from './pages/Order';
import LoginPage from './pages/Login.jsx'; 
import './App.css';

export default function App() {
  const [cart, setCart] = useState({});
  const [userDetails, setUserDetails] = useState(null);

  const updateCart = (id, delta) => {
    setCart(prev => {
      const updated = { ...prev };
      updated[id] = (updated[id] || 0) + delta;
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUserDetails={setUserDetails} />} />
        <Route path="/" element={<HomePage cart={cart} updateCart={updateCart} />} />
        <Route
          path="/order"
          element={
            userDetails ? (
              <Order cart={cart} updateCart={updateCart} userDetails={userDetails} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

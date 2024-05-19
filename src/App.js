import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { } from 'react';
import SigninPage from './pages/signInPage/signInPage'
import SignUpPage from './pages/signUpPage/signUpPage';
import ProfilePage from './pages/profile/profilePage';
import OnBoardingPage from './pages/onBoarding/onBoarding';
import ProtectedRoute from './ProtectedRoute';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<OnBoardingPage />} />
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

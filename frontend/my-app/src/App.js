import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import GetInvolved from './pages/GetInvolved';
import VotingEligibility from './pages/VotingEligibility';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/get_involved" element={<GetInvolved />} />
        <Route path="/voting_eligibility" element={<VotingEligibility />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
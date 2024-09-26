import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import GetInvolved from './pages/GetInvolved';
=======
import Home from './pages/Home'; // Import Home page
import AboutUs from './pages/AboutUs'; // Example of another page
import VotingEligibility from './pages/VotingEligibility';
>>>>>>> 6b667b210d8897c8d2c00ca1c23fc136f00aa93a

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
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import GetInvolved from './pages/GetInvolved';
import VotingEligibility from './pages/VotingEligibility';
import RegisterToVote from './pages/RegisterToVote';
import AbsenteeBallot from './pages/AbsenteeBallot';
import PollWorker from './pages/PollWorker';
import FindAPlaceToVote from './pages/FindAPlaceToVote';
import ReportAnIssue from './pages/ReportAnIssue';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/get_involved" element={<GetInvolved />} />
        <Route path="/voting_eligibility" element={<VotingEligibility />} />
        <Route path="/register_to_vote" element={<RegisterToVote />} />
        <Route path="/absentee_ballot" element={<AbsenteeBallot />} />
        <Route path="/poll_worker" element={<PollWorker />} />
        <Route path="/find_a_place_to_vote" element={<FindAPlaceToVote />} />
        <Route path="/report_an_issue" element={<ReportAnIssue />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
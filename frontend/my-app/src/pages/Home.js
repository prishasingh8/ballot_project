// src/App.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="palette-2-design-variation">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-text">BETTER</span>
          <span className="logo-text">BALLOT</span>
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about_us">About Us</a>
          <a href="/get_involved">Get Involved</a>
        </nav>
        <a href="/candidate_profiles" className="link">www.betterballot.com</a>
        <link rel="icon" href="%PUBLIC_URL%/bb_icon.ico" />
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Frame Container */}
        <div className="frame">
          <div className="main-container">
            <div className="ballot-buddy">BETTER BALLOT</div>
            <div className="description">Type in your Address and see your Smart Ballot</div>
            <div className="input-field-wrapper">
              <div className="input-field-container">
                <input
                  name="search_input"
                  id="search_input"
                  type="text"
                  className="input-field"
                  placeholder="Address"
                  autoComplete="on"
                />
                <button className="search-button">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Headings */}
        <div className="heading-container">
          <div className="heading">BEFORE THE POLLS</div>
          <div className="subheading">Some Resources To Help You Get to the Polls</div>
        </div>

        {/* Cards */}
        <div className="cards">
          <a href="/voting_eligibility" className="card voting-eligibility">
            <span className="card-title">Voting Eligibility</span>
          </a>
          <a href="/register_to_vote" className="card register-to-vote">
            <span className="card-title">Register to Vote</span>
          </a>
          <a href="/absentee_ballot" className="card request-an-absentee-ballot">
            <span className="card-title">Request an Absentee Ballot</span>
          </a>
        </div>

        <div className="cards">
          <a href="/poll_worker" className="card become-a-poll-worker">
            <span className="card-title">Become a Poll Worker</span>
          </a>
          <a href="/find_a_place_to_vote" className="card find-a-place-to-vote">
            <span className="card-title">Find a Place to Vote</span>
          </a>
          <a href="/report_an_issue" className="card report-an-issue">
            <span className="card-title">Report an Issue</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <div className="navigation-footer">
        <div className="divider"></div>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Better Ballot. All rights reserved.</p>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about_us">About Us</a></li>
              <li><a href="/get_involved">Get Involved</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

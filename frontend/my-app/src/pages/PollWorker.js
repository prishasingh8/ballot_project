import React from "react";
import './cards.css';

function PollWorker() {
  return (
    <div className="palette-2-design-variation">
      {/* Navigation */}
      <header className="header">
        <div className="logo">
          <span className="logo-text">BALLOT</span>
          <span className="logo-text">BUDDY</span>
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about_us">About Us</a>
          <a href="/get_involved">Get Involved</a>
        </nav>
        <a href="#" className="link">www.ballotbuddy.com</a>
      </header>

      <div className="title_header">Become a Poll Worker</div>

      {/* Footer */}
      <div className="navigation-footer">
        <div className="divider"></div>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Ballot Buddy. All rights reserved.</p>
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

export default PollWorker;

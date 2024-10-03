import React from 'react';
import './GetInvolved.css';

function GetInvolved() {
  return (
    <div className="palette-2-design-variation">
      {/* Navigation */}
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
        <a href="#" className="link">www.betterballot.com</a>
      </header>

      {/* Get Involved Section */}
      <div className="get-involved">Get Involved</div>

      <div className="description-container">
        <div className="description">
          While we do realize the tremendous effort of the individuals and organizations who support our mission, 
          we know that there is always more work to be done. Every bit of help, whether it’s your time, resources, 
          or spreading the word, significantly contributes to making a difference. Here’s how you can continue 
          to support and amplify our efforts:
        </div>
      </div>

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

export default GetInvolved;
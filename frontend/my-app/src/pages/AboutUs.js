import React from 'react';
import './AboutUs.css'; // Make sure this points to your CSS file

function AboutUs() {
  return (
    <div className="palette-2-design-variation">
      {/* Header */}
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

      {/* About Us Section */}
      <div className="about-us-container">
        <div className="about-us">About Us</div>
      </div>
      <main className="main-content">
        <div className="container">
          <div className="container-1">
            <div className="the-ballot-buddy-team-what-we-stand-for">
              The Ballot Buddy Team + What We Stand For
            </div>
            <div className="paragraph-container">
              <div className="paragraph">
                Ballot Buddy is a platform that stems from the idea that all those that are able and willing to have a voice should be able to do so without inconvenience...
                {/* Content continues as in your original code */}
              </div>
            </div>
            
            {/* Input Form */}
            <div className="input-box-container">
              <div className="container-4">
                <div className="first-name">
                  <span className="label">First Name</span>
                </div>
                <div className="last-name">
                  <span className="label-1">Last Name</span>
                </div>
              </div>
              <div className="message">
                <span className="label-3">Message</span>
              </div>
            </div>
            <div className="container-3">
              <div className="email">
                <span className="label-2">Email</span>
              </div>
              <div className="button">
                <button className="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default AboutUs;
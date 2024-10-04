import React from 'react';
import './cards.css';

function RegisterToVote() {
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
                <a href="/candidate_profiles" className="link">www.betterballot.com</a>
            </header>

      <div className="title_header">Register To Vote</div>

      <div className="description-container">
        <div className="description">
          While there are many platforms that you can find on the internet to help you in registering to vote, we made our own to allow you to have quick access to an all-in-one tool to register to vote.
          Please Note that our platform currently only supports first-time voter registration.
        </div>
      </div>

      <form action="/url" method="GET">
        <p className="form-descriptions">Name</p>
        <div className="input-container">
          <input type="text" name="first_name" placeholder="First Name*" required />
          <input type="text" name="last_name" placeholder="Last Name*" required />
          <input type="text" name="middle_name" placeholder="Middle Name" />
        </div>

        <p className="form-descriptions">Date of Birth</p>
        <div className="input-container">
          <input type="text" name="month" placeholder="Month" required />
          <input type="text" name="day" placeholder="Day" required />
          <input type="text" name="year" placeholder="Year" required />
        </div>

        <p className="form-descriptions">Address</p>
        <div className="input-container">
          <div className="row">
            <input type="text" name="address_1" placeholder="Address 1" required />
            <input type="text" name="address_2" placeholder="Address 2: Apt, Suite, Building, Floor, etc." />
            <input type="text" name="city_town" placeholder="City/Town" required />
          </div>
          <div className="row">
            <input type="text" name="zip_code" placeholder="Zip Code" required />
            <input type="text" name="county" placeholder="County" required />
            <input type="text" name="state" placeholder="State" required />
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="navigation-footer">
        <div className="divider"></div>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Ballot Buddy. All rights reserved.</p>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Get Involved</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RegisterToVote;

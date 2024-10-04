import React from "react";
import './cards.css';

function AbsenteeBallot() {
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

      <div className="main_title_header"><span>Request an Absentee Ballot</span></div>

      <div className="description-container">
        <div className="description">
          In the case you can’t make it to your local polling center - vote from wherever you are.
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

        <p className="form-descriptions">Old Address</p>
        <div className="input-container">
          <div className="row">
            <input type="text" name="old_address_1" placeholder="Address 1" required />
            <input type="text" name="old_address_2" placeholder="Address 2: Apt, Suite, Building, Floor, etc." />
            <input type="text" name="old_city_town" placeholder="City/Town" required />
          </div>
          <div className="row">
            <input type="text" name="old_zip_code" placeholder="Zip Code" required />
            <input type="text" name="old_county" placeholder="County" required />
            <input type="text" name="old_state" placeholder="State" required />
          </div>
        </div>

        <p className="form-descriptions">New Address</p>
        <div className="input-container">
          <div className="row">
            <input type="text" name="new_address_1" placeholder="Address 1" required />
            <input type="text" name="new_address_2" placeholder="Address 2: Apt, Suite, Building, Floor, etc." />
            <input type="text" name="new_city_town" placeholder="City/Town" required />
          </div>
          <div className="row">
            <input type="text" name="new_zip_code" placeholder="Zip Code" required />
            <input type="text" name="new_county" placeholder="County" required />
            <input type="text" name="new_state" placeholder="State" required />
          </div>
        </div>
        <div className="submit-button-container">
          <input className="submit_button" type="submit" value="Submit" />
        </div>
      </form>

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

export default AbsenteeBallot;

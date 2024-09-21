import React from "react";
import './cards.css';

function VotingEligibility() {
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
                <a href="/candidate_profiles" className="link">www.ballotbuddy.com</a>
            </header>

            <div className="title_header">Voter Eligibility Quiz</div>

            <div className="quiz-container">
                <div className="question-box">
                    <p className="question">Are you a U.S. Citizen?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>

                <div className="question-box">
                    <p className="question">Are you over the age of 18 by the date of the election you are voting in?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>

                <div className="question-box">
                    <p className="question">Are you registered to vote in your state?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>

                <div className="question-box">
                    <p className="question">Do you live in a U.S. territory (Puerto Rico, Guam, American Samoa, Northern Mariana Islands, U.S. Virgin Islands, Minor Outlying Islands)?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>

                <div className="question-box">
                    <p className="question">Do you have a mental disability?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>

                <div className="question-box">
                    <p className="question">Are you a convicted felon?</p>
                    <div className="button-container">
                        <button className="yes-button">Yes</button>
                        <button className="no-button">No</button>
                    </div>
                </div>
            </div>

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

export default VotingEligibility;
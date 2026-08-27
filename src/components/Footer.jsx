import React from "react";
import voidhacksLogo from "../assets/voidhacks-logo.png";
import svvvlogo from "../assets/svvv-logo.png";
import ipcLogo from "../assets/ipc-logo.png";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* TOP CTA */}
      <div className="footer-cta">
        <div>
          <span className="footer-eyebrow">
            READY TO ENTER THE VOID?
          </span>

          <h2>
            Build. Defend. <span>Break.</span>
          </h2>

          <p>
            36 hours of cybersecurity, innovation, collaboration,
            and real-world problem solving.
          </p>
        </div>

        <a href="#register" className="footer-cta-button">
          Register Now
          <span>↗</span>
        </a>
      </div>


      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="/" className="footer-logo">
            <div className="footer-logo-mark">
              <img src={voidhacksLogo} alt="VOID HACKS() 8.0" />
              
            </div>

            <div>
              <strong>VOIDHACKS</strong>
              <small>CYBERSECURITY HACKATHON</small>
            </div>
          </a>

          <p>
            A cybersecurity-focused hackathon where technology,
            innovation, and digital defense come together to solve
            real-world challenges.
          </p>

          <div className="footer-status">
            <span></span>
            SYSTEM ONLINE
          </div>

        </div>


        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#timeline">Timeline</a>
          <a href="#prizes">Prizes</a>
          <a href="#faq">FAQ</a>
        </div>


        {/* EVENT */}
        <div className="footer-column">
          <h3>Event</h3>

          <a href="#register">Register</a>
          <a href="#location">Venue</a>
          <a href="#contact">Contact</a>
          <a href="#updates">Get Updates</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <p>
            Have a question about VOID HACKS?
          </p>

          <a href="mailto:contact@voidhacks.in">
            <span className="contact-icon">✉</span>
            Voidhacks@svvv.edu.in
          </a>
        </div>

      </div>


      {/* COLLABORATION */}
      <div className="footer-collaboration">

        <div className="collaboration-label">
          <span></span>
          IN COLLABORATION WITH
        </div>

        <div className="collaboration-logos">

          <div className="partner">
            <div className="partner-mark">
              <img src={svvvlogo} alt="VOID HACKS() 8.0" />
            </div>

            <div>
              <strong>Shri Vaishnav Vidyapeeth Vishwavidyalya</strong>
              <small>Indore, Madhya Pradesh</small>
            </div>
          </div>

          <div className="partner-divider">
            ×
          </div>

          <div className="partner">
            <div className="partner-mark police">
              <img src={ipcLogo} alt="VOID HACKS() 8.0" />
            </div>

            <div>
              <strong>INDORE POLICE COMMISSIONERATE</strong>
              <small>Indore, Madhya Pradesh</small>
            </div>
          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <span>
          © 2026 VOID HACKS(). All rights reserved.
        </span>

        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

        <div className="footer-security">
          <span>◇</span>
          BUILT FOR DIGITAL DEFENSE
        </div>

      </div>

    </footer>
  );
};

export default Footer;
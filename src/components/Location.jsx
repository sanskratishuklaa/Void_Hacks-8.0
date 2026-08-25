import React from "react";

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-container">

        {/* LEFT CONTENT */}
        <div className="location-content">

          <div className="location-label">
            FIND THE ARENA
          </div>

          <h2 className="location-title">
            Your mission
            <br />
            <span>starts here.</span>
          </h2>

          <p className="location-description">
            VOID HACKS() 8.0 — ABHEDYA takes place at
            Shri Vaishnav Vidyapeeth Vishwavidyalaya,
            Indore. Get your team ready and check in
            for 36 hours of building, defending and
            breaking boundaries.
          </p>

          {/* VENUE CARD */}
          <div className="venue-card">

            <div className="venue-icon">
              <span>⌖</span>
            </div>

            <div className="venue-content">

              <span className="venue-label">
                EVENT VENUE
              </span>

              <h3>
                Shri Vaishnav Vidyapeeth Vishwavidyalaya
              </h3>

              <p>
                Indore–Ujjain Road, Indore – 453111,
                Madhya Pradesh, India
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="location-actions">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shri+Vaishnav+Vidyapeeth+Vishwavidyalaya+Indore"
              target="_blank"
              rel="noopener noreferrer"
              className="location-primary-btn"
            >
              Get Directions
              <span>↗</span>
            </a>

            <a
              href="https://www.svvv.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="location-secondary-btn"
            >
              SVVV Website
              <span>↗</span>
            </a>

          </div>

        </div>

        {/* RIGHT MAP */}
        <div className="location-map">

          <div className="map-top-label">
            <span className="map-dot"></span>
            SVVV // INDORE
          </div>

          <div className="map-corners"></div>

          <iframe
            title="Shri Vaishnav Vidyapeeth Vishwavidyalaya Location"
            src="https://www.google.com/maps?q=Shri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya%20Indore&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-overlay"></div>

        </div>

      </div>
    </section>
  );
};

export default Location;
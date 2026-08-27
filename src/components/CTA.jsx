import {
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function CTA() {
  return (
    <section className="cta" id="register">

      {/* Background */}
      <div className="cta-grid" />
      <div className="cta-glow" />

      <div className="container">

        <div className="cta-card">

          {/* Decorative corners */}

          <div className="cta-corner cta-corner-top-left" />
          <div className="cta-corner cta-corner-top-right" />
          <div className="cta-corner cta-corner-bottom-left" />
          <div className="cta-corner cta-corner-bottom-right" />

          {/* Small label */}

          <div className="cta-label">
            <span className="cta-pulse" />
            SYSTEM READY
          </div>

          {/* Heading */}

          <h2>
            READY TO ENTER
            <br />
            THE
            <span className="gradient-text">
              {"  "}DIGITAL BATTLEFIELD?
            </span>
          </h2>

          <p>
            Build. Break. Defend. Innovate.
            <br />
            Your next challenge starts here.
          </p>

          {/* Actions */}

          <div className="cta-actions">

            <a
              href="#register"
              className="cta-primary"
            >
              Register Now
              <ArrowRight size={18} />
            </a>

            <a
            href="https://www.instagram.com/voidhacks8.0?igsi=MXAyNTRiNXAwOWg3MA%3D%3D"
            className="nav-update-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Update
          </a>


          </div>

          {/* Security indicators */}

          <div className="cta-security">

            <div className="cta-security-item">
              <ShieldCheck size={15} />
              <span>
                SECURE
              </span>
            </div>

            <div className="cta-security-divider" />

            <div className="cta-security-item">
              <LockKeyhole size={15} />
              <span>
                PROTECTED
              </span>
            </div>

            <div className="cta-security-divider" />

            <div className="cta-security-item">
              <Terminal size={15} />
              <span>
                READY_TO_BUILD
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;
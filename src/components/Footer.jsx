import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "FAQ", href: "#faq" },
];

const eventLinks = [
  { name: "Register", href: "#register" },
  { name: "Get Updates", href: "#updates" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="footer" id="contact">

      {/* Background grid */}
      <div className="footer-grid" />

      <div className="container">

        {/* =====================================
            MAIN FOOTER
        ====================================== */}

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              <div className="footer-logo-mark">
                V
              </div>

              <div>
                <span className="footer-logo-name">
                  VOID<span>HACK</span>
                </span>

                <small>
                  CYBERSECURITY HACKATHON
                </small>
              </div>
            </a>

            <p>
              A cybersecurity-focused hackathon where
              technology, innovation, and digital defense
              come together to solve real-world challenges.
            </p>

            <div className="footer-security-status">
              <span className="footer-status-dot" />
              SYSTEM ONLINE
            </div>

          </div>

          {/* Navigation */}
          <div className="footer-column">

            <h3>
              Navigation
            </h3>

            <nav aria-label="Footer navigation">
              {navigationLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </nav>

          </div>

          {/* Event */}
          <div className="footer-column">

            <h3>
              Event
            </h3>

            <nav aria-label="Event links">
              {eventLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </nav>

          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>
              Contact
            </h3>

            <p>
              Have a question about VOID HACK?
            </p>

            <a
              href="mailto:[OFFICIAL EMAIL]"
              className="footer-email"
            >
              <Mail size={15} />
              [OFFICIAL EMAIL]
            </a>

            <span className="footer-placeholder-note">
              Official contact details to be updated.
            </span>

          </div>

        </div>

        {/* =====================================
            COLLABORATION
        ====================================== */}

        <div className="footer-collaboration">

          <div className="footer-collab-label">
            <span />
            IN COLLABORATION WITH
          </div>

          <div className="footer-collab-brands">

            {/* VOID HACK */}
            <div className="footer-organization">

              <div className="footer-org-logo footer-org-logo-void">
                V
              </div>

              <div>
                <strong>
                  VOID HACK
                </strong>

                <span>
                  CYBERSECURITY HACKATHON
                </span>
              </div>

            </div>

            <div className="footer-collab-symbol">
              ×
            </div>

            {/* Police */}
            <div className="footer-organization">

              <div className="footer-org-logo footer-org-logo-police">
                IP
              </div>

              <div>
                <strong>
                  INDORE POLICE
                </strong>

                <span>
                  COMMISSIONERATE
                </span>
              </div>

            </div>

          </div>

          <p className="footer-logo-note">
            Official organization logos will be added
            when supplied by the project organizers.
          </p>

        </div>

        {/* =====================================
            BOTTOM FOOTER
        ====================================== */}

        <div className="footer-bottom">

          <p>
            © 2026 VOID HACK. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

          <div className="footer-built">

            <ShieldCheck size={13} />

            <span>
              BUILT FOR DIGITAL DEFENSE
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
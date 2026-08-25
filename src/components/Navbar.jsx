import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "FAQ", href: "#faq" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="brand-mark">
            V
          </div>

          <div className="brand-text">
            <span className="brand-name">
              VOID<span>HACKS( ) 8.0</span>
            </span>

            <span className="brand-subtitle">
              CYBERSECURITY HACKATHON
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <a
            href="#updates"
            className="nav-update-btn"
          >
            Get Update
          </a>

          <a
            href="#register"
            className="nav-register-btn"
          >
            Register Now

            <ArrowUpRight
              size={16}
              strokeWidth={2}
            />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <div className="mobile-actions">

            <a
              href="#updates"
              className="nav-update-btn mobile-action"
              onClick={closeMenu}
            >
              Get Update
            </a>

            <a
              href="#register"
              className="nav-register-btn mobile-action"
              onClick={closeMenu}
            >
              Register Now

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
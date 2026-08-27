import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  IndianRupee,
  Target,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "36 Hours",
    label: "Non-stop Defense",
  },
  {
    icon: Building2,
    value: "OFFLINE",
    label: "SVVV, Indore",
  },
  {
    icon: Target,
    value: "1 Track",
    label: "Cybersecurity",
  },
  {
    icon: IndianRupee,
    value: "1Lakh+",
    label: "Total Prize Pool",
  },
];

const PARTICLE_COUNT = 110;

function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from(
      { length: PARTICLE_COUNT },
      (_, index) => ({
        id: index,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        opacity: Math.random() * 0.7 + 0.2,
        color:
          Math.random() > 0.65
            ? "#22d3ee"
            : Math.random() > 0.45
              ? "#8b5cf6"
              : "#67e8f9",
      }),
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <section className="hero" id="home">
      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="hero-background">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-particles">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                background: particle.color,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* =====================================
          HERO CONTENT
      ====================================== */}

      <div className="container hero-container">
        {/* Event Badge */}

        <div className="hero-badge">
          <span className="hero-badge-dot" />

          <span>VERSION 8.O</span>

          <span className="hero-badge-divider">•</span>

          <span>OCTOBER 1–3, 2026</span>
        </div>

        {/* =====================================
            MAIN BRAND
        ====================================== */}

        <div className="hero-brand">
          <h1 className="hero-title">
            <span className="hero-title-white">Void</span>
            <span className="hero-title-blue">Hacks</span>
            <span className="hero-title-brackets">( )</span>
          </h1>

          <div className="hero-edition">
            A B H E D Y A — THE IMPENETRABLE EDITION
          </div>
        </div>

        {/* =====================================
            DESCRIPTION
        ====================================== */}

        <p className="hero-description">
          A 36-hour national-level cybersecurity hackathon organized by SVVV and
          SVIIT, Indore — the eighth edition, built in collaboration with the
          <strong> INDORE POLICE.</strong>
        </p>

        {/* =====================================
            CENTER ORB
        ====================================== */}

        <div className="hero-orb">
          <div className="hero-orb-ring hero-orb-ring-one" />
          <div className="hero-orb-ring hero-orb-ring-two" />

          <div className="hero-orb-core" />
        </div>

        {/* =====================================
            STATS
        ====================================== */}

        <div className="hero-stats">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="hero-stat" key={stat.label}>
                <div className="hero-stat-icon">
                  <Icon size={18} />
                </div>

                <div className="hero-stat-content">
                  <div className="hero-stat-value">{stat.value}</div>

                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================
            CTA
        ====================================== */}

        <div className="hero-actions">
          <a href="#tracks" className="hero-primary-button">
            Explore Tracks
            <ArrowRight size={17} />
          </a>

          <a href="#timeline" className="hero-secondary-button">
            View Timeline
          </a>
        </div>
      </div>

      {/* =====================================
          BOTTOM FADE
      ====================================== */}

      <div className="hero-bottom-fade" />
    </section>
  );
}

export default Hero;

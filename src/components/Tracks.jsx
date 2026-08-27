import {
  ArrowUpRight,
  BrainCircuit,
  Bug,
  Fingerprint,
  GlobeLock,
  Radar,
  Shield,
} from "lucide-react";

const tracks = [
  {
    number: "01",
    title: "Cyber Defense",
    description:
      "Design systems that detect, prevent, and respond to evolving cyber threats.",
    challenge:
      "Threat Detection & Defense",
    icon: Shield,
  },
  {
    number: "02",
    title: "Digital Forensics",
    description:
      "Investigate digital evidence, uncover attack patterns, and understand cyber incidents.",
    challenge:
      "Digital Investigation",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Ethical Hacking",
    description:
      "Identify vulnerabilities and think like an attacker to build stronger security.",
    challenge:
      "Vulnerability Discovery",
    icon: Bug,
  },
  {
    number: "04",
    title: "AI for Cybersecurity",
    description:
      "Use artificial intelligence to detect anomalies, identify threats, and strengthen defense.",
    challenge:
      "AI-Powered Security",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Secure Applications",
    description:
      "Build resilient software with security integrated into every layer of development.",
    challenge:
      "Application Security",
    icon: GlobeLock,
  },
  {
    number: "06",
    title: "Cybercrime & Digital Safety",
    description:
      "Create technology-driven solutions that contribute to safer digital ecosystems.",
    challenge:
      "Digital Safety & Law Enforcement",
    icon: Radar,
  },
];

function Tracks() {
  return (
    <section className="tracks section" id="tracks">
      <div className="container">

        {/* Section Header */}
        <div className="section-header tracks-header">

          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            ONE TRACK - CYBERSECURITY
          </div>

          <h2 className="section-title">
            Six ways to
            <span className="gradient-text">
              {" "}defend the future.
            </span>
          </h2>

          <p className="section-description">
            Integrated cybersecurity domains designed to challenge
    your technical thinking, strengthen your defensive skills,
    and solve real-world digital security problems.
          </p>

        </div>

        {/* Tracks Grid */}
        <div className="tracks-grid">

          {tracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                className="track-card"
                key={track.number}
              >
                {/* Top */}
                <div className="track-card-top">

                  <span className="track-number">
                    /{track.number}
                  </span>

                  <div className="track-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="track-card-content">

                  <h3>
                    {track.title}
                  </h3>

                  <p>
                    {track.description}
                  </p>

                </div>

                {/* Challenge */}
                <div className="track-challenge">

                  <span>
                    CHALLENGE THEME
                  </span>

                  <strong>
                    {track.challenge}
                  </strong>

                </div>

                {/* Hover line */}
                <div className="track-hover-line" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Tracks;
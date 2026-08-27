import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  University,
} from "lucide-react";

const organizations = [
  {
    short: "SVVV",
    name: "Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV)",
    description:
      "Indore, Madhya Pradesh — organizing VOID HACKS() since its first edition.",
    icon: University,
  },
  {
    short: "SVIIT",
    name: "Shri Vaishnav Institute of Information Technology (SVIIT)",
    description:
      "Host Institution — VOID HACKS( )8.O",
    icon: Building2,
  },
  {
    short: "IPC",
    name: "Indore Police Commissionerate",
    description:
      "Official collaboration partner for VOID HACKS()8.O — ABHEDYA, contributing to cybersecurity and digital-safety challenges.",
    icon: ShieldCheck,
  },
];

function About() {
  return (
    <section className="about" id="about">

      {/* Background atmosphere */}
      <div className="about-background">
        <div className="about-background-grid" />
        <div className="about-background-glow" />
      </div>

      <div className="container">

        <div className="about-layout">

          {/* ==================================================
              LEFT — CONTENT
          ================================================== */}

          <div className="about-content">

            <div className="about-kicker">
              <span className="about-kicker-dot" />
              BRIEFING
            </div>

            <h2 className="about-title">
              Why{" "}
              <span>
                ABHEDYA
              </span>
              ?
            </h2>

            <div className="about-copy">

              <p>
                <strong>VOID HACKS 8.O( )</strong> is a
                cybersecurity-focused hackathon built around
                innovation, problem-solving, and digital
                defense.
              </p>

              <p>
                The eighth edition marks a deliberate shift
                toward real-world cybersecurity challenges,
                bringing together developers, security
                enthusiasts, researchers, and innovators.
              </p>

              <p>
                Working alongside the{" "}
                <strong>
                  Indore Police Commissionerate
                </strong>
                , participants will explore challenges
                connected to cybercrime, digital forensics,
                cyber defense, and digital safety.
              </p>

              <p className="about-definition">
                <span>Abhedya (अभेद्य)</span> —{" "}
                <em>
                  that which cannot be broken through.
                </em>
                <br />
                The name represents the core idea:
                <strong>
                  build something that holds.
                </strong>
              </p>

            </div>

            <a
              href="#tracks"
              className="about-link"
            >
              Explore the challenges
              <ArrowUpRight size={15} />
            </a>

          </div>

          {/* ==================================================
              RIGHT — ORGANIZATION CARD
          ================================================== */}

          <div className="about-organization-card">

            <div className="about-card-header">

              <span className="about-card-line" />

              <span>
                ORGANIZED BY &amp; IN COLLABORATION WITH
              </span>

            </div>

            <div className="organization-list">

              {organizations.map((organization, index) => {
                const Icon = organization.icon;

                return (
                  <div
                    className="organization-item"
                    key={organization.short}
                  >

                    <div className="organization-logo">

                      <span>
                        {organization.short}
                      </span>

                    </div>

                    <div className="organization-content">

                      <div className="organization-title-row">

                        <h3>
                          {organization.name}
                        </h3>

                        <Icon
                          size={14}
                          className="organization-icon"
                        />

                      </div>

                      <p>
                        {organization.description}
                      </p>

                    </div>

                    {index <
                      organizations.length - 1 && (
                      <div className="organization-divider" />
                    )}

                  </div>
                );
              })}

            </div>

            <div className="about-card-footer">

              <span className="status-dot" />

              <span>
                CYBERSECURITY × INNOVATION × DIGITAL DEFENSE
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
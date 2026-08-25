import {
  Award,
  BriefcaseBusiness,
  Lightbulb,
  Network,
  Rocket,
  Gift,
  Users,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Build Real Solutions",
    description:
      "Solve practical cybersecurity problems and turn your ideas into working technology.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Learn From Experts",
    description:
      "Gain insights from cybersecurity professionals, developers, researchers, and mentors.",
    icon: Users,
  },
  {
    number: "03",
    title: "Network",
    description:
      "Connect with builders, students, researchers, technology enthusiasts, and industry professionals.",
    icon: Network,
  },
  {
    number: "04",
    title: "Participation Certificate",
    description:
      "Get officially recognized for your participation and add value to your resume.",
    icon: Award,
  },
  {
    number: "05",
    title: "Swags and Goodies",
    description:
      "Get exclusive hackathon swag, goodies, and memorable rewards for your participation.",
    icon: Gift,
  },
  {
    number: "06",
    title: "Make an Impact",
    description:
      "Build solutions that contribute toward safer and more resilient digital ecosystems.",
    icon: Rocket,
  },
];

function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">

        {/* Header */}
        <div className="benefits-header">

          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              WHY PARTICIPATE
            </div>

            <h2 className="section-title">
              More than a
              <span className="gradient-text">
                {" "}hackathon.
              </span>
            </h2>
          </div>

          <p className="section-description">
            VOID HACK is an opportunity to learn, build, collaborate,
            compete, and create technology that can make a meaningful
            difference.
          </p>

        </div>

        {/* Benefits */}
        <div className="benefits-grid">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="benefit-card"
                key={benefit.number}
              >
                <div className="benefit-number">
                  /{benefit.number}
                </div>

                <div className="benefit-icon">
                  <Icon
                    size={21}
                    strokeWidth={1.6}
                  />
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

                <div className="benefit-line" />
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Benefits;
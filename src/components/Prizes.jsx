import {
  Award,
  Crown,
  Medal,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const prizes = [
  {
    position: "01",
    title: "Winner",
    amount: "50k",
    description:
      "For the team that delivers the strongest combination of innovation, security, impact, and execution.",
    icon: Trophy,
    featured: true,
  },
  {
    position: "02",
    title: "Runner Up",
    amount: "30k",
    description:
      "Recognizing an outstanding solution with strong technical depth and real-world potential.",
    icon: Medal,
    featured: false,
  },
  {
    position: "03",
    title: "Second Runner Up",
    amount: "20k",
    description:
      "Celebrating an impressive project that demonstrates creativity and technical excellence.",
    icon: Award,
    featured: false,
  },
];

const additionalRewards = [
  {
    icon: Star,
    title: "Special Awards",
    description:
      "Additional recognition for exceptional ideas, technical innovation, and standout contributions.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Recognition of participation and achievement at VOID HACK.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Opportunities to learn from experienced professionals and technology experts.",
  },
  {
    icon: Crown,
    title: "Career Opportunities",
    description:
      "Potential exposure to internships, networking, and future career opportunities.",
  },
];

function Prizes() {
  return (
    <section className="prizes section" id="prizes">
      <div className="container">

        {/* Header */}
        <div className="section-header prizes-header">

          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            REWARDS & RECOGNITION
          </div>

          <h2 className="section-title">
            Build something
            <span className="gradient-text">
              {" "}worth winning.
            </span>
          </h2>

          <p className="section-description">
            Great ideas deserve recognition. Compete for prizes,
            opportunities, mentorship, and the chance to showcase
            your cybersecurity skills.
          </p>

        </div>

        {/* Main prizes */}
        <div className="prizes-grid">

          {prizes.map((prize) => {
            const Icon = prize.icon;

            return (
              <article
                className={`prize-card ${
                  prize.featured
                    ? "prize-card-featured"
                    : ""
                }`}
                key={prize.position}
              >

                <div className="prize-card-glow" />

                <div className="prize-top">

                  <span className="prize-position">
                    {prize.position}
                  </span>

                  <div className="prize-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                <div className="prize-content">

                  <span className="prize-label">
                    {prize.title}
                  </span>

                  <div className="prize-amount">
                    {prize.amount}
                  </div>

                  <p>
                    {prize.description}
                  </p>

                </div>

                <div className="prize-footer">
                  <span>
                    PRIZE DETAILS
                  </span>

                  <span className="prize-status">
                    TO BE ANNOUNCED
                  </span>
                </div>

              </article>
            );
          })}

        </div>

        {/* Additional rewards */}

        <div className="additional-rewards">

          {additionalRewards.map((reward) => {
            const Icon = reward.icon;

            return (
              <div
                className="reward-item"
                key={reward.title}
              >
                <div className="reward-icon">
                  <Icon size={18} />
                </div>

                <div>
                  <h3>
                    {reward.title}
                  </h3>

                  <p>
                    {reward.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Prizes;
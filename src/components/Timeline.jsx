import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = {
  day1: {
    label: "Day 1 · Oct 1",
    events: [
      {
        time: "17:30",
        title: "Registration & Check-in",
        description:
          "Team verification, kits, and campus access.",
      },
      {
        time: "18:00",
        title: "Inauguration",
        description:
          "Opening ceremony with SVVV leadership and Indore Police Commissionerate officials.",
      },
      {
        time: "19:30",
        title: "Track Briefing",
        description:
          "Problem statements released; mentor introductions.",
      },
      {
        time: "20:00",
        title: "Hacking Begins",
        description:
          "The 36-hour clock starts.",
      },
      {
        time: "21:00",
        title: "Mentor Session Round1",
        description:
          "Evaluation Round",
      },
    ],
  },

  day2: {
    label: "Day 2 · Oct 2",
    events: [
      {
        time: "02:00",
        title: "Mentor Round 2",
        description:
          "Progress checks with faculty and Commissionerate mentors.",
      },
      {
        time: "09:00",
        title: "Mentor Round 3",
        description:
          "Progress checks with faculty and Commissionerate mentors.",
      },
      {
        time: "14:00",
        title: "Mid-Hack Checkpoint",
        description:
          "Teams submit a progress snapshot; feedback loop opens.",
      },
      {
        time: "15:00",
        title: "Mentor Round 4",
        description:
          "Progress checks with faculty and Commissionerate mentors.",
      },
      {
        time: "20:00",
        title: "Mentor Round 5",
        description:
          "Progress checks with faculty and Commissionerate mentors.",
      },
      {
        time: "24:00",
        title: "Midnight Build Push",
        description:
          "Snacks, music, and the last major sprint window.",
      },
    ],
  },

  day3: {
    label: "Day 3 · Oct 3",
    events: [
      {
        time: "03:00",
        title: "Mentor Round 6",
        description:
            "Decalaration of Finalist Teams"
      },
      {
        time: "10:30",
        title: "Team Presentations",
        description:
          "All teams present to the judging panel.",
      },
      {
        time: "14:00",
        title: "Grand Finale Demos",
        description:
          "Shortlisted teams present to the full jury, including Commissionerate representatives.",
      },
      {
        time: "15:00",
        title: "Closing & Prize Ceremony",
        description:
          "Winners announced. ABHEDYA closes.",
      },
    ],
  },
};

function Timeline() {
  const [activeDay, setActiveDay] = useState("day1");

  const currentDay = timelineData[activeDay];

  return (
    <section
      id="timeline"
      className="timeline-section"
    >
      <div className="timeline-container">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="timeline-header">

          <span className="timeline-kicker">
            EVENT TIMELINE
          </span>

          <h2 className="timeline-title">
            36 hours, three days,
            <br />
            <span>zero downtime.</span>
          </h2>

          <p className="timeline-subtitle">
            1–3 October 2026, on campus at
            SVVV, Indore.
          </p>

        </div>


        {/* ================================
            DAY TABS
        ================================= */}

        <div className="timeline-tabs">

          {Object.entries(timelineData).map(
            ([dayKey, day]) => (
              <button
                key={dayKey}
                type="button"
                className={`timeline-tab ${
                  activeDay === dayKey
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveDay(dayKey)
                }
              >
                {day.label}
              </button>
            )
          )}

        </div>


        {/* ================================
            EVENTS
        ================================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeDay}
            className="timeline-events"

            initial={{
              opacity: 0,
              y: 12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -8,
            }}

            transition={{
              duration: 0.3,
            }}
          >

            {currentDay.events.map(
              (event, index) => (

                <motion.div
                  key={
                    event.time +
                    event.title
                  }

                  className="timeline-event"

                  initial={{
                    opacity: 0,
                    y: 12,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                >

                  {/* TIME */}

                  <div className="timeline-time">
                    {event.time}
                  </div>


                  {/* CONTENT */}

                  <div className="timeline-event-content">

                    <h3>
                      {event.title}
                    </h3>

                    <p>
                      {event.description}
                    </p>

                  </div>


                  {/* EVENT NUMBER */}

                  <div className="timeline-event-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                </motion.div>

              )
            )}

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}

export default Timeline;
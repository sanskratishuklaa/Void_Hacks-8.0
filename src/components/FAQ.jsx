import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqItems = [
  {
    question: "Who can participate?",
    answer:
      "Students, developers, cybersecurity enthusiasts, designers, researchers, and innovators interested in solving technology and cybersecurity challenges can participate. Official eligibility criteria will be announced by the organizers.",
  },
  {
    question: "What is the maximum team size?",
    answer:
      "TEAM SIZE — 4 members",
  },
  {
    question: "Is prior cybersecurity experience required?",
    answer:
      "Advanced cybersecurity experience is not necessarily required. Participants should choose challenges appropriate to their skills and follow the official eligibility and challenge guidelines.",
  },

  {
    question: "Is there a registration fee?",
    answer:
      "No — registration is free. Selected teams will need to arrange their own travel to SVVV, Indore; accommodation and meals are provided on campus.",
  },
  {
    question: "What should participants bring?",
    answer:
      "Participants should bring the equipment and development resources required for their project. Detailed event requirements will be shared by the organizers before the hackathon.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes, Ceritificates will provide to all participant",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(
      openIndex === index ? -1 : index
    );
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">

        <div className="faq-layout">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div className="faq-intro">

            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              FREQUENTLY ASKED
            </div>

            <h2 className="section-title">
              Questions?
              <br />
              <span className="gradient-text">
                We have answers.
              </span>
            </h2>

            <p className="section-description">
              Everything you need to know before entering
              the VOID HACK battlefield.
            </p>

            <div className="faq-help-card">

              <div className="faq-help-icon">
                <HelpCircle size={25} />
              </div>

              <div>
                <strong>
                  STILL HAVE QUESTIONS?
                </strong>

                <strong>
                  Contact the organizing team.
                </strong>

                <small>
                  [OFFICIAL EMAIL]
                </small>
              </div>

            </div>

          </div>

          {/* =====================================
              FAQ ACCORDION
          ====================================== */}

          <div className="faq-list">

            {faqItems.map((item, index) => {
              const isOpen =
                openIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen
                      ? "faq-item-open"
                      : ""
                  }`}
                  key={item.question}
                >

                  <button
                    className="faq-question"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span className="faq-question-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {item.question}
                    </span>

                    <span className="faq-chevron">
                      <ChevronDown size={18} />
                    </span>

                  </button>

                  <div
                    className={`faq-answer ${
                      isOpen
                        ? "faq-answer-open"
                        : ""
                    }`}
                  >
                    <p>
                      {item.answer}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
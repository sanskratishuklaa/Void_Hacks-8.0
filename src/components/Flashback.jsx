
import vh7_2 from "../assets/flashback/vh7-2.jpg";
import vh7_3 from "../assets/flashback/vh7-3.jpg";
import vh7_6 from "../assets/flashback/vh7-6.jpg";


const flashbackImages = [
  
  {
    image: vh7_2,
    title: "Teams in Action",
  },
  {
    image: vh7_3,
    title: "Void-hacks Builder",
  },
   {
    image: vh7_6,
    title: "Indore Police X SVVV",
  },
];

function Flashback() {
  return (
    <section className="flashback" id="flashback">

      <div className="flashback-header">

        <div>
          <div className="flashback-eyebrow">
            <span></span>
            FLASHBACK · VOID HACKS() 7.0
          </div>

          <h2>
            <span>Glimpses</span>
          </h2>
        </div>

        <p>
          A look back at VOID HACKS() 7.0 —
          the people, ideas, and moments that
          shaped what came next.
        </p>

      </div>


      <div className="flashback-grid">

        {flashbackImages.map((item, index) => (
          <article
            className={`flashback-card flashback-card-${index + 1}`}
            key={item.title}
          >

            <div className="flashback-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="flashback-overlay"></div>

            <div className="flashback-number">
              0{index + 1}
            </div>

            <div className="flashback-title">
              {item.title}
            </div>

          </article>
        ))}

      </div>


      <div className="flashback-footer">

        <span>
          VOID HACKS() 7.0
        </span>

        <span>
          A chapter worth remembering.
        </span>

      </div>

    </section>
  );
}

export default Flashback;
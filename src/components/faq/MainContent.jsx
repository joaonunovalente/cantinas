import SectionHeaderTitle from "../common/SectionHeaderTitle";
import faqData from "../../data/faqData";

function MainContent() {
  const { title, description, faqs } = faqData[0];

  return (
    <section>
      <SectionHeaderTitle title={title} />

      <div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="mb-0">{description}</p>

            <div className="accordion pt-5" id="faqAccordion">
              {faqs.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {item.answer.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
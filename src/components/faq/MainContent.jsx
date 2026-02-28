import SectionHeaderTitle from "../common/SectionHeaderTitle";
import faqData from "../../data/faqData";

function MainContent() {
  const { title, description, faqs } = faqData[0];

  function renderInline(part, key) {
    if (typeof part === "string") return part;

    switch (part.type) {
      case "text":
        return part.value;

      case "bold":
        return <strong key={key}>{part.value}</strong>;

      case "italic":
        return <em key={key}>{part.value}</em>;

      case "link":
        return (
          <a
            key={key}
            href={part.href}
            target={part.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              part.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="fw-semibold"
          >
            {part.label}
          </a>
        );

      case "code":
        return (
          <code key={key}>
            <a href={part.href} target="_blank" rel="noopener noreferrer">
              {part.value}
            </a>
          </code>
        );

      default:
        return null;
    }
  }

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
                      {item.answer.map((block, i) => {
                        if (block.type === "paragraph") {
                          return (
                            <p key={i}>
                              {Array.isArray(block.content)
                                ? block.content.map(renderInline)
                                : block.content}
                            </p>
                          );
                        }

                        if (block.type === "list") {
                          return (
                            <ul key={i}>
                              {block.items.map((li, j) => (
                                <li key={j}>{li}</li>
                              ))}
                            </ul>
                          );
                        }

                        return null;
                      })}
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

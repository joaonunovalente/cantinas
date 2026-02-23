import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

function ArticleContentCodeExample() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) return;

    if (!codeRef.current.dataset.highlighted) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <>
      <h4 className="heading-level-4">Code Block Example:</h4>
      <p>
        You can get more info at{" "}
        <a
          className="text-link"
          href="https://highlightjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://highlightjs.org/
        </a>
        . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim.{" "}
      </p>

      <pre>
        <code ref={codeRef} className="language-javascript">
          {`function initHighlight(block, cls) {
  if (cls?.includes('no-highlight')) {
    return block;
  }

  for (let i = 0; i < 3; i += 1) {
    console.log('highlight', i);
  }

  return block;
}`}
        </code>
      </pre>
    </>
  );
}

export default ArticleContentCodeExample;

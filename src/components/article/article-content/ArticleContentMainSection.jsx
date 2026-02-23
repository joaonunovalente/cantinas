import featureFigureComponents from "../../../assets/images/features/feature-figure-components.png";


function ArticleContentMainSection() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, ligula non congue placerat,
        felis nibh dapibus risus, id sollicitudin quam libero ac libero. Ut massa massa, varius vitae volutpat in,
        sodales et mi. Mauris sed tempor turpis. Nullam sodales dapibus lacus non tempor <a className="article-link" href="#">link example</a>.
        Integer aliquet quam sed ipsum imperdiet vehicula.
      </p>

      <div className="theme-callout theme-callout-info">
        <strong>This is an info callout.</strong> Example text to show it in action. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean mollis, sem sit amet tempus interdum, ex ex egestas dui, at aliquam urna metus eu lectus.
      </div>

      <h2 className="heading-level-2">1. Sub Heading Lorem Ipsum</h2>
      <p>
        Vestibulum id ex ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Donec vel leo augue. Integer non mauris consectetur, euismod orci sed, porttitor odio.
      </p>

      <div className="figure-holder single-col-max mx-auto py-5">
        <figure className="figure mb-5">
          <img className="img-fluid p-1 p-lg-5" src={featureFigureComponents} alt="Feature components" />
          <figcaption className="figure-caption text-center">A caption for the above image.</figcaption>
        </figure>
      </div>

      <h3 className="heading-level-3">How To Install Lorem Ipsum</h3>
      <p>Praesent lacinia, ipsum in vehicula congue, sem erat rutrum est, non porta elit ante ac justo.</p>
      <h3 className="heading-level-3">How To Use Lorem Ipsum</h3>
      <p>Pellentesque scelerisque sed nulla nec lacinia. Donec ultrices ipsum metus, ac interdum libero interdum ac.</p>

      <div className="video-holder single-col-max mx-auto py-5">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/O_9u1P5YjVc?si=SgiNSuVZ4dqn003J"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ArticleContentMainSection;

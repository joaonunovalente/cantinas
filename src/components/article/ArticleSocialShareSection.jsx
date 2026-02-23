function ArticleSocialShareSection() {
  return (
    <section className="social-share-section py-5">
      <div className="section-inner d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5">
        <div className="intro mb-3 mb-lg-0">Like what you see? Share this article.</div>
        <ul className="social-list list-unstyled mb-0">
          <li className="list-inline-item"><a className="text-link" href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li className="list-inline-item"><a className="text-link" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li className="list-inline-item"><a className="text-link" href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li className="list-inline-item"><a className="text-link" href="#"><i className="fa-solid fa-link"></i></a></li>
        </ul>
      </div>
    </section>
  );
}

export default ArticleSocialShareSection;

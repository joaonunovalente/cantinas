import authorProfile from "../../../assets/images/help/author-profile.png";

function ArticleContentHeader() {
  return (
    <header className="article-header mb-5">
      <h1 className="heading-level-1 text-center mb-2">Help Article Lorem Ipsum Dolor</h1>
      <div className="article-meta mx-auto d-flex justify-content-center align-items-center">
        <img className="meta-profile-image me-3" src={authorProfile} alt="Author profile" />
        <div className="meta-info-wrapper">
          <div className="meta-author">Written By: Momentum Team</div>
          <div className="meta-time">Last updated: 24th June</div>
        </div>
      </div>
    </header>
  );
}

export default ArticleContentHeader;

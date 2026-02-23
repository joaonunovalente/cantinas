import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function ArticleRatingSection() {
  return (
    <section className="article-rating-section pt-5">
      <div className="section-inner d-flex flex-column flex-lg-row align-items-center p-3 rounded">
        <div className="intro mb-3 mb-lg-0 me-3">Was this article helpful?</div>
        <div className="ratings">
          <button className="rate rate-up" type="button" aria-label="Rate helpful">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="rate rate-down" type="button" aria-label="Rate not helpful">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ArticleRatingSection;
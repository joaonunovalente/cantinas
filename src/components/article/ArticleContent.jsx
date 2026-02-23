import ArticleContentExamplesSection from './article-content/ArticleContentExamplesSection';
import ArticleContentHeader from './article-content/ArticleContentHeader';
import ArticleContentMainSection from './article-content/ArticleContentMainSection';

function ArticleContent() {
  return (
    <article className="help-article mb-5">
      <ArticleContentHeader />
      <ArticleContentMainSection />
      <ArticleContentExamplesSection />
    </article>
  );
}

export default ArticleContent;

import ArticleContentTableExample from './examples-section/ArticleContentTableExample';
import ArticleContentCodeExample from './examples-section/ArticleContentCodeExample';
import ArticleContentAlertsExample from './examples-section/ArticleContentAlertsExample';
import ArticleContentOrderedListExample from './examples-section/ArticleContentOrderedListExample';

function ArticleContentExamplesSection() {
  return (
    <>
      <h2 className="heading-level-2">2. Components Examples</h2>
      <ArticleContentAlertsExample />
      <ArticleContentOrderedListExample />
      <ArticleContentTableExample />
      <ArticleContentCodeExample />
    </>
  );
}

export default ArticleContentExamplesSection;

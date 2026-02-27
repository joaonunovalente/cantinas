import Article from "../components/common/Article";

import Hero from "../components/article/Hero";
import MainContent from "../components/faq/MainContent";

function FaqPage() {
  return (
    <Article hero={<Hero />}>
      <MainContent />
    </Article>
  );
}

export default FaqPage;
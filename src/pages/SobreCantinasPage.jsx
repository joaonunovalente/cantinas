import Article from "../components/common/Article";

import Hero from "../components/article/Hero";
import MainContent from "../components/sobre/MainContent";

function SobreCantinasPage() {
  return (
    <Article hero={<Hero />}>
      <MainContent />
    </Article>
  );
}

export default SobreCantinasPage;
import Article from "../components/common/Article";

import Hero from "../components/sobre/Hero";
import MainContent from "../components/sobre/MainContent";

function SobreCantinasPage() {
  return (
    <Article hero={<Hero />}>
      <MainContent />
    </Article>
  );
}

export default SobreCantinasPage;

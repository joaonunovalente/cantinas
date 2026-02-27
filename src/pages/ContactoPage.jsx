import Article from "../components/common/Article";

import Hero from "../components/contacto/Hero";
import MainContent from "../components/contacto/MainContent";

function ContactoPage() {
  return (
    <Article hero={<Hero />}>
      <MainContent />
    </Article>
  );
}

export default ContactoPage;

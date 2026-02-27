import PageLayout from "../layouts/PageLayout";

import Hero from "../components/faq/Hero";
import MainContent from "../components/faq/MainContent";

function FaqPage() {
  return (
    <PageLayout hero={<Hero />}>
      <MainContent />
    </PageLayout>
  );
}

export default FaqPage;

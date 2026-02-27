import PageLayout from "../layouts/PageLayout";

import Hero from "../components/sobre/Hero";
import MainContent from "../components/sobre/MainContent";

function SobreCantinasPage() {
  return (
    <PageLayout hero={<Hero />}>
      <MainContent />
    </PageLayout>
  );
}

export default SobreCantinasPage;

import PageLayout from "../layouts/PageLayout";

import Hero from "../components/sobre-cantinas/Hero";
import CategoriesSection from "../components/sobre-cantinas/CategoriesSection";
import PopularArticles from "../components/sobre-cantinas/PopularArticles";
import CtaSection from "../components/sobre-cantinas/CtaSection";

import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

function SobreCantinasPage() {
  return (
    <PageLayout hero={<Hero />}>
      <PopularArticles articles={popularArticles} />
      <CategoriesSection categoriesList={categories} />
      <CtaSection />
    </PageLayout>
  );
}

export default SobreCantinasPage;

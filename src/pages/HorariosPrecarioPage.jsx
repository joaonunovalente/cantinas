import PageLayout from "../layouts/PageLayout";

import Hero from "../components/horarios-precario/Hero";
import CategoriesSection from "../components/horarios-precario/CategoriesSection";
import PopularArticles from "../components/horarios-precario/PopularArticles";
import CtaSection from "../components/horarios-precario/CtaSection";

import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

function HomePage() {
  return (
    <PageLayout hero={<Hero />}>
      <PopularArticles articles={popularArticles} />
      <CategoriesSection categoriesList={categories} />
      <CtaSection />
    </PageLayout>
  );
}

export default HomePage;

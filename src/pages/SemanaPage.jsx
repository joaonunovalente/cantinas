import PageLayout from "../layouts/PageLayout";

import Hero from "../components/semana/Hero";
import CategoriesSection from "../components/semana/CategoriesSection";
import PopularArticles from "../components/semana/PopularArticles";
import CtaSection from "../components/semana/CtaSection";

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

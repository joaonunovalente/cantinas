import PageLayout from "../layouts/PageLayout";

import HeroHomePage from "../components/home/Hero";
import CategoriesSection from "../components/home/CategoriesSection";
import PopularArticles from "../components/home/PopularArticles";
import CtaSection from "../components/home/CtaSection";

import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

function HomePage() {
  return (
    <PageLayout hero={<HeroHomePage />}>
      <PopularArticles articles={popularArticles} />
      <CategoriesSection categoriesList={categories} />
      <CtaSection />
    </PageLayout>
  );
}

export default HomePage;

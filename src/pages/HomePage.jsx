import CategoriesSection from "../components/home/CategoriesSection";
import CtaSection from "../components/home/CtaSection";
import PopularArticles from "../components/home/PopularArticles";
import PageLayout from "../layouts/PageLayout";
import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

import HeroHomePage from "../components/home/HeroHomePage"

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

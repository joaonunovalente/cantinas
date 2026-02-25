import PageLayout from "../layouts/PageLayout";

import Hero from "../components/faq/Hero";
import CategoriesSection from "../components/faq/CategoriesSection";
import PopularArticles from "../components/faq/PopularArticles";
import CtaSection from "../components/faq/CtaSection";

import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

function FaqPage() {
  return (
    <PageLayout hero={<Hero />}>
      <PopularArticles articles={popularArticles} />
      <CategoriesSection categoriesList={categories} />
      <CtaSection />
    </PageLayout>
  );
}

export default FaqPage;

import PageLayout from "../layouts/PageLayout";

import Hero from "../components/contacto/Hero";
import CategoriesSection from "../components/contacto/CategoriesSection";
import PopularArticles from "../components/contacto/PopularArticles";
import CtaSection from "../components/contacto/CtaSection";

import categories from "../data/categories";
import popularArticles from "../data/popularArticles";

function ContactoPage() {
  return (
    <PageLayout hero={<Hero />}>
      <PopularArticles articles={popularArticles} />
      <CategoriesSection categoriesList={categories} />
      <CtaSection />
    </PageLayout>
  );
}

export default ContactoPage;

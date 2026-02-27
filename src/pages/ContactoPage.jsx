import PageLayout from "../layouts/PageLayout";

import Hero from "../components/contacto/Hero";
import MainContent from "../components/contacto/MainContent";

function ContactoPage() {
  return (
    <PageLayout hero={<Hero />}>
      <MainContent />
    </PageLayout>
  );
}

export default ContactoPage;

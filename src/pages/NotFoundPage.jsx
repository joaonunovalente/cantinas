import Hero from "../components/not-found/Hero";
import MainContent from "../components/not-found/MainContent";
import PageLayout from "../layouts/PageLayout";

function NotFoundPage() {
  return (
    <PageLayout hero={<Hero />}>
      <MainContent />
    </PageLayout>
  );
}

export default NotFoundPage;
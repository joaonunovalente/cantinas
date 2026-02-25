import HeroNotFoundPage from "../components/not-found/HeroNotFoundPage";
import MainContent from "../components/not-found/MainContent";
import PageLayout from "../layouts/PageLayout";

function NotFoundPage() {
  return (
    <PageLayout hero={<HeroNotFoundPage />}>
      <MainContent />
    </PageLayout>
  );
}

export default NotFoundPage;
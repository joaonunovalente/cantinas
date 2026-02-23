import PageLayout from "../layouts/PageLayout";

function NotFoundPage() {
  return (
    <PageLayout
      heroTitle="Page not found"
      heroDescription="The page you are looking for does not exist."
    >
      <section className="help-featured-section theme-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title mb-5">Page not found</h2>
            <p>Ops... The page you are looking for does not exist.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;

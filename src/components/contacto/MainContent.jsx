import SectionHeaderTitle from "../common/SectionHeaderTitle"

function MainContent() {
  return (
    <main className="container">
      <section className="theme-section">
        <SectionHeaderTitle title={"Formulário de Contacto"} />
        <div className="container">
          <div className="row g-4 align-items-stretch mt-3">
            <p>Content</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
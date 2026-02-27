import SectionHeaderTitle from "../common/SectionHeaderTitle";

function MainContent() {
  return (
    <section>
      <SectionHeaderTitle title="Contacto" />

      <div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="mb-5">
              Caso queiras entrar em contacto com o <strong>Cantinas.pt</strong>
              , podes fazê-lo através do formulário.
            </p>

            <div className="card p-4 shadow-sm rounded-3 text-center">
              <h4 className="mt-4 mb-4 contact-title">Envia a tua mensagem</h4>

              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="a8d39281-0c9c-45ba-82e3-0b5a5ff4fdf6"
                />

                <div className="mb-3 text-start">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Mensagem</label>
                  <textarea
                    name="mensagem"
                    rows="4"
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Enviar
                  </button>
                </div>
              </form>

              <p className="mt-4 mb-3">
                Ou envia um email para
                <br />
                <a href="mailto:contacto@cantinas.pt" className="fw-semibold">
                  contacto@cantinas.pt
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;

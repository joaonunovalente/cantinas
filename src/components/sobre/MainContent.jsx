import SectionHeaderTitle from "../common/SectionHeaderTitle";

function MainContent() {
  return (
    <main className="container">
      <section className="theme-section container">
        <SectionHeaderTitle title="Sobre o Cantinas.pt" />

        <div className="row justify-content-center mb-0">
          <div className="col-lg-8">

            <p>
              O <strong>Cantinas.pt</strong> é um sítio simples e rápido
              para consultar toda a informação essencial sobre as
              cantinas da Universidade de Aveiro.
            </p>

            <p>
              Inclui informação sobre as ementas das cantinas de
              Santiago, Crasto, Grelhados, ESTGA e Restaurante
              Universitário.
            </p>

            <p>
              Apresenta os horários de almoço e jantar de cada cantina,
              bem como os valores das refeições, de forma clara.
            </p>

            <br />

            <p>
              O <strong>Cantinas.pt</strong> apenas facilita o acesso às
              ementas disponibilizadas pela Universidade de Aveiro.
              <strong> Não tem qualquer afiliação</strong> com a
              universidade.
            </p>

            <p>
              Para entrares em contacto com os Serviços de Ação Social
              (SAS), responsáveis pelas Unidades Alimentares, utiliza os
              contactos oficiais:
            </p>

            <address>
              <ul>
                <li>234 370 348</li>
                <li>sas@ua.pt</li>
                <li>
                  <a
                    href="https://www.ua.pt/pt/sas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ua.pt/sas
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
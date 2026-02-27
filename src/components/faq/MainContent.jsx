import SectionHeaderTitle from "../common/SectionHeaderTitle";

function MainContent() {
  return (
    <main className="container">
      <section className="theme-section container">
        <SectionHeaderTitle title="Perguntas Frequentes" />

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <p className="mb-0">
              Encontra aqui as respostas às dúvidas mais comuns sobre o{" "}
              <strong>Cantinas.pt</strong>.
            </p>

            <div className="accordion pt-5" id="faqAccordion">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    O Cantinas.pt é um website oficial da Universidade de Aveiro?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Não. O <strong>Cantinas.pt</strong> é um projeto independente que
                    apenas facilita o acesso à informação pública das ementas.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    De onde vem a informação das ementas?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    A informação é obtida a partir de{" "}
                    <a
                      href="http://api.web.ua.pt/en/services/universidade_de_aveiro/ementas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      fontes oficiais públicas
                    </a>{" "}
                    da Universidade de Aveiro.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    Os horários e o preçário estão atualizados?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      O objetivo é manter a informação atualizada, mas é possível que haja algum desfasamento.
                    </p>
                    Nesse caso, preenche o formulário ou envia um email para{" "}
                    <a href="mailto:contacto@cantinas.pt" className="fw-semibold">
                      contacto@cantinas.pt
                    </a>{" "}
                    para que se possa corrigir.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq10"
                  >
                    Qual é o motivo de as ementas terem erros ortográficos?
                  </button>
                </h2>
                <div
                  id="faq10"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Isso é algo completamente alheio ao <strong>Cantinas.pt</strong>. As
                      ementas são obtidas diretamente dos dados fornecidos pela Universidade
                      de Aveiro.
                    </p>
                    Não é da responsabilidade do <strong>Cantinas.pt</strong> educar terceiros a acentuar devidamente o vasto léxico que compõe a língua portuguesa.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq11"
                  >
                    Vai existir uma versão em inglês?
                  </button>
                </h2>
                <div
                  id="faq11"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Não está prevista uma versão em inglês, uma vez que as ementas não são disponibilizadas nesse idioma.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Posso sugerir melhorias ou reportar erros?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Sim, preenche o formulário ou envia um email para{" "}
                    <a href="mailto:contacto@cantinas.pt" className="fw-semibold">
                      contacto@cantinas.pt
                    </a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    Porque é que as ementas não estão a carregar?
                  </button>
                </h2>
                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Existem três motivos possíveis:</p>
                    <ul>
                      <li>Os serviços gerais da universidade estão indisponíveis.</li>
                      <li>O serviço das ementas está indisponível.</li>
                      <li>As ementas, simplesmente, não estão a carregar.</li>
                    </ul>
                    <p>
                      Nos dois primeiros casos não há nada que se possa fazer, senão esperar.
                    </p>
                    Se achares que é o terceiro motivo, preenche o formulário ou envia
                    um email para{" "}
                    <a href="mailto:contacto@cantinas.pt" className="fw-semibold">
                      contacto@cantinas.pt
                    </a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq15"
                  >
                    Por vezes, as ementas ficam "A carregar a ementa..." durante imenso tempo.
                  </button>
                </h2>
                <div
                  id="faq15"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Quando a duração ultrapassa 5 segundos, os dados estão a ser obtidos <i>quase</i> diretamente da API da universidade.
                    </p>
                    <p>
                      Explicando melhor: a API da universidade demora cerca de 5 segundos a responder a um pedido de ementas. Para reduzir esse tempo, o <strong>Cantinas.pt</strong> guarda as ementas do dia. Assim, os utilizadores não precisam de esperar tanto tempo.
                    </p>
                    Ocasionalmente, a API do <strong>Cantinas.pt</strong> não consegue satisfazer os pedidos apenas com os dados guardados. Nesses casos, é necessário comunicar novamente com a API da universidade.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq13"
                  >
                    Enviei uma mensagem através do formulário e não obtive resposta...
                  </button>
                </h2>
                <div
                  id="faq13"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>É possivel que seja um dos seguinte motivos:</p>
                    <ul>
                      <li>
                        Não escreveste bem o teu email quando preencheste o formulário. E, consequentemente, não foi possível fazer-te chegar a resposta.
                      </li>
                      <li>
                        Falta de tempo. Não precisas de enviar uma nova mensagem, se for este o caso.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    É possível saber a ementa de um dia específico?
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Sim, embora possa ser algo mais técnico.</p>
                    <p>
                      Usando a ligação{" "}
                      <code>
                        <a
                          href="https://api.cantinas.pt/?date=yyyy-mm-dd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          api.cantinas.pt/?date=yyyy-mm-dd
                        </a>
                      </code>{" "}
                      é possível obter um ficheiro{" "}
                      <a
                        href="https://www.json.org/json-pt.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        JSON
                      </a>.
                    </p>
                    <p>Este ficheiro tem mais informações para além das ementas.</p>
                    <p>
                      Nomeadamente, os alergénios presentes (ex: glúten, ovos, soja, leite, aipo, mostarda, sulfitos).
                    </p>
                    Boa sorte!
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    Qual foi a inspiração para criar o Cantinas.pt?
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Existe um projeto do{" "}
                      <a href="https://glua.ua.pt/" target="_blank" rel="noopener noreferrer">
                        GLUA
                      </a>{" "}
                      (Grupo de Linux da Universidade de Aveiro) no{" "}
                      <a
                        href="https://github.com/GLUA-UA/meals-ua"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      , que faz precisamente o que o <strong>Cantinas.pt</strong> se propõe a fazer, mas focado apenas no sistema operativo{" "}
                      <a href="https://www.zorinos.com/" target="_blank" rel="noopener noreferrer">
                        Linux
                      </a>.
                    </p>
                    <p>Então, porque não criar uma opção mais acessível para todos?</p>
                    <i>
                      O Homem quer, o Homem sonha, o <strong>Cantinas.pt</strong> nasce!
                    </i>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq9"
                  >
                    Como posso apoiar o projeto?
                  </button>
                </h2>
                <div
                  id="faq9"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      A melhor forma passa por partilhares com os teus colegas e amigos este projeto.
                    </p>
                    Se tiveres conhecimentos técnicos e queiras ajudar em algum assunto, podes sempre entrar em contacto através do formulário ou enviar um email para{" "}
                    <a href="mailto:contacto@cantinas.pt" className="fw-semibold">
                      contacto@cantinas.pt
                    </a>.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    Existe algum Easter Egg?
                  </button>
                </h2>
                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <a href="https://caninas.pt" target="_blank" rel="noopener noreferrer">
                      Sim
                    </a>.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
import SectionHeaderTitle from "../common/SectionHeaderTitle";


function MainContent() {
  return (
    <section>
      <SectionHeaderTitle title="Carta de Despedida" />

      <div className="row justify-content-center">
        <div className="col-lg-10">
            <p >Ora viva!</p>
          <p>
            Obrigado por visitares o <strong>Cantinas.pt</strong> no seu último ato público.
          </p>



          <p>
            O <strong>Cantinas.pt</strong> gostaria de partilhar uma mensagem final com a comunidade
            que usou este projeto para consultar ementas, horários e informações
            úteis das unidades alimentares da Universidade de Aveiro.
          </p>

        <h4 className="mt-5 mb-5">Desde o início</h4>

          <p>
            O objetivo foi simples: tornar o acesso à informação das ementas mais
            rápido, claro e acessível para estudantes, docentes e quem mais quisesse usá-lo.
          </p>

          <p>
            Acontece que manter o projeto, quando não parece ser do interesse da
            universidade que ele exista, não é viável. É possível! Aliás, a
            última versão funcional do <strong>Cantinas.pt</strong> pode ser
            encontrada em <a href="https://demo.cantinas.pt/">demo.cantinas.pt</a>.
          </p>
          <p>Mas não é viável.</p>

        <h4 className="mt-5 mb-5">Fazer o Cantinas.pt</h4>


          <p>Foi verdadeiramente incrível.</p>
          <p >Vale a pena recordar como tudo começou.</p>
          <p>- - -</p>
          <p>
            O <strong>Cantinas.pt</strong> obteve a sua inspiração num projeto do GLUA (Grupo de Linux da Universidade de Aveiro) no GitHub, que faz precisamente o que o <strong>Cantinas.pt</strong> se propõe a fazer, mas focado apenas no sistema operativo Linux.



          </p>
          <p>
            Então, porque não criar uma opção mais acessível para todos?

          </p>
          <p>
            <i>O Homem quer, o Homem sonha, o <strong>Cantinas.pt</strong> nasce!</i>
          </p>

         <p>- - -</p>

          <p>
            Caso ainda não tenhas tido a oportunidade de ler as <a href="https://cantinas.pt/perguntas-frequentes">Perguntas Frequentes</a>, fica aqui o conselho para que o faças.
            Até porque, quem sabe, poderás encontrar um <i>easter egg</i> muito mal escondido.
          </p>

          <h4 className="mt-5 mb-5">Alguns números</h4>
          <p>
            Para mostrar o alcance do <strong>Cantinas.pt</strong>: no primeiro
            dia em que ficou estéril de ementas para mostrar, o
            <strong> Cantinas.pt</strong> obteve quase 1.000 visitas.
          </p>

          <p className="my-4"><i>“E não é muitos... e não são poucos... Não é? Bastantes!!”</i></p>

          <p>Pois bem, tal facto mostra a relevância que o <strong>Cantinas.pt</strong> teve para a comunidade que o descobriu e usou.</p>


          <h4 className="mt-5 mb-5">Para memória futura</h4>

          <p className="mb-5">Ficará o imponente cartaz do <strong>Cantinas.pt</strong> afixado no Departamento de Matemática.</p>

          <figure className="mx-auto mb-4">
            <img
              src="/A0.jpg"
              alt="Cartaz do Cantinas.pt em tamanho A0"
              className="img-fluid rounded shadow-sm"
              loading="lazy"
            />
          </figure>

          <p className="mt-5">O cartaz tem o tamanho A0 (com uma área de 1 m²), que quer dizer que é o dobro de um A1. Que por sua vez é o dobro de um A2; que por sua vez é o dobro de um A3; que por sua vez é o dobro de uma folha A4.</p>

          <p className="mb-5">Mas o <strong>Cantinas.pt</strong> também esteve - e nalguns casos ainda está - presente em mais espaços da universidade. Eis outros exemplos.</p>

          <div
            id="cartazesSecundariosCarousel"
            className="carousel slide mx-auto mb-5 pb-4"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#cartazesSecundariosCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Cartaz A1"
              ></button>
              <button
                type="button"
                data-bs-target="#cartazesSecundariosCarousel"
                data-bs-slide-to="1"
                aria-label="Cartaz A2"
              ></button>
              <button
                type="button"
                data-bs-target="#cartazesSecundariosCarousel"
                data-bs-slide-to="2"
                aria-label="Cartaz A3"
              ></button>
            </div>

            <div className="carousel-inner rounded shadow-sm">
              <div className="carousel-item active">
                <img
                  src="/A1.jpg"
                  alt="Cartaz do Cantinas.pt em tamanho A1"
                  className="d-block w-100"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/A2.jpg"
                  alt="Cartaz do Cantinas.pt em tamanho A2"
                  className="d-block w-100"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/A3.jpg"
                  alt="Cartaz do Cantinas.pt em tamanho A3"
                  className="d-block w-100"
                  loading="lazy"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#cartazesSecundariosCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#cartazesSecundariosCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Seguinte</span>
            </button>
          </div>

          <h4 className="mt-5 mb-5">No final</h4>

          <p>
            Fica um agradecimento especial a todos os que visitaram, deram
            feedback e ajudaram a melhorar o <strong>Cantinas.pt</strong> ao longo do tempo.
          </p>


          <p className="mb-0 pt-4">
            Um bem haja a todos,
            <br />
            <strong>Cantinas.pt</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
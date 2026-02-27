const faqData = [
  {
    title: "Perguntas Frequentes",
    description:
      "Encontra aqui as respostas às dúvidas mais comuns sobre o Cantinas.pt.",
    faqs: [
      {
        id: "faq1",
        question:
          "O Cantinas.pt é um website oficial da Universidade de Aveiro?",
        answer: [
          "Não. O Cantinas.pt é um projeto independente que apenas facilita o acesso à informação pública das ementas.",
        ],
      },
      {
        id: "faq2",
        question: "De onde vem a informação das ementas?",
        answer: [
          "A informação é obtida a partir de fontes oficiais públicas da Universidade de Aveiro.",
          "Link: http://api.web.ua.pt/en/services/universidade_de_aveiro/ementas",
        ],
      },
      {
        id: "faq3",
        question: "Os horários e o preçário estão atualizados?",
        answer: [
          "O objetivo é manter a informação atualizada, mas é possível que haja algum desfasamento.",
          "Nesse caso, preenche o formulário ou envia um email para contacto@cantinas.pt para que se possa corrigir.",
        ],
      },
      {
        id: "faq4",
        question: "Qual é o motivo de as ementas terem erros ortográficos?",
        answer: [
          "Isso é algo completamente alheio ao Cantinas.pt. As ementas são obtidas diretamente dos dados fornecidos pela Universidade de Aveiro.",
          "Não é da responsabilidade do Cantinas.pt educar terceiros a acentuar devidamente o vasto léxico que compõe a língua portuguesa.",
        ],
      },
      {
        id: "faq5",
        question: "Vai existir uma versão em inglês?",
        answer: [
          "Não está prevista uma versão em inglês, uma vez que as ementas não são disponibilizadas nesse idioma.",
        ],
      },
      {
        id: "faq6",
        question: "Posso sugerir melhorias ou reportar erros?",
        answer: [
          "Sim, preenche o formulário ou envia um email para contacto@cantinas.pt.",
        ],
      },
      {
        id: "faq7",
        question: "Porque é que as ementas não estão a carregar?",
        answer: [
          "Existem três motivos possíveis:",
          "1. Os serviços gerais da universidade estão indisponíveis.",
          "2. O serviço das ementas está indisponível.",
          "3. As ementas, simplesmente, não estão a carregar.",
          "Nos dois primeiros casos não há nada que se possa fazer, senão esperar.",
          "Se achares que é o terceiro motivo, preenche o formulário ou envia um email para contacto@cantinas.pt.",
        ],
      },
      {
        id: "faq8",
        question:
          'Por vezes, as ementas ficam "A carregar a ementa..." durante imenso tempo.',
        answer: [
          "Quando a duração ultrapassa 5 segundos, os dados estão a ser obtidos quase diretamente da API da universidade.",
          "A API da universidade demora cerca de 5 segundos a responder a um pedido de ementas.",
          "Para reduzir esse tempo, o Cantinas.pt guarda as ementas do dia. Assim, os utilizadores não precisam de esperar tanto tempo.",
          "Ocasionalmente, a API do Cantinas.pt não consegue satisfazer os pedidos apenas com os dados guardados. Nesses casos, é necessário comunicar novamente com a API da universidade.",
        ],
      },
      {
        id: "faq9",
        question:
          "Enviei uma mensagem através do formulário e não obtive resposta...",
        answer: [
          "É possível que seja um dos seguintes motivos:",
          "1. Não escreveste bem o teu email quando preencheste o formulário e não foi possível fazer-te chegar a resposta.",
          "2. Falta de tempo. Não precisas de enviar uma nova mensagem, se for este o caso.",
        ],
      },
      {
        id: "faq10",
        question: "É possível saber a ementa de um dia específico?",
        answer: [
          "Sim, embora possa ser algo mais técnico.",
          "Usando a ligação https://api.cantinas.pt/?date=yyyy-mm-dd é possível obter um ficheiro JSON.",
          "Este ficheiro tem mais informações para além das ementas, nomeadamente os alergénios presentes (ex: glúten, ovos, soja, leite, aipo, mostarda, sulfitos).",
          "Boa sorte!",
        ],
      },
      {
        id: "faq11",
        question: "Qual foi a inspiração para criar o Cantinas.pt?",
        answer: [
          "Existe um projeto do GLUA (Grupo de Linux da Universidade de Aveiro) no GitHub que faz precisamente o que o Cantinas.pt se propõe a fazer, mas focado apenas no sistema operativo Linux.",
          "Então, porque não criar uma opção mais acessível para todos?",
          "O Homem quer, o Homem sonha, o Cantinas.pt nasce!",
        ],
      },
      {
        id: "faq12",
        question: "Como posso apoiar o projeto?",
        answer: [
          "A melhor forma passa por partilhares com os teus colegas e amigos este projeto.",
          "Se tiveres conhecimentos técnicos e queiras ajudar em algum assunto, podes sempre entrar em contacto através do formulário ou enviar um email para contacto@cantinas.pt.",
        ],
      },
      {
        id: "faq13",
        question: "Existe algum Easter Egg?",
        answer: ["Sim: https://caninas.pt"],
      },
    ],
  },
];

export default faqData;

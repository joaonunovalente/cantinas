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
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Não. O " },
              { type: "bold", value: "Cantinas.pt" },
              {
                type: "text",
                value:
                  " é um projeto independente que apenas facilita o acesso à informação pública das ementas.",
              },
            ],
          },
        ],
      },
      {
        id: "faq2",
        question: "De onde vem a informação das ementas?",
        answer: [
          {
            type: "paragraph",
            content: [
              { type: "text", value: "A informação é obtida a partir de " },
              {
                type: "link",
                href: "http://api.web.ua.pt/en/services/universidade_de_aveiro/ementas",
                label: "fontes oficiais públicas",
              },
              { type: "text", value: " da Universidade de Aveiro." },
            ],
          },
        ],
      },
      {
        id: "faq3",
        question: "Os horários e o preçário estão atualizados?",
        answer: [
          {
            type: "paragraph",
            content:
              "O objetivo é manter a informação atualizada, mas é possível que haja algum desfasamento.",
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Nesse caso, preenche o formulário ou envia um email para " },
              {
                type: "link",
                href: "mailto:contacto@cantinas.pt",
                label: "contacto@cantinas.pt",
              },
              { type: "text", value: " para que se possa corrigir." },
            ],
          },
        ],
      },
      {
        id: "faq4",
        question:
          "Qual é o motivo de as ementas terem erros ortográficos?",
        answer: [
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Isso é algo completamente alheio ao " },
              { type: "bold", value: "Cantinas.pt" },
              {
                type: "text",
                value:
                  ". As ementas são obtidas diretamente dos dados fornecidos pela Universidade de Aveiro.",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Não é da responsabilidade do " },
              { type: "bold", value: "Cantinas.pt" },
              {
                type: "text",
                value:
                  " educar terceiros a acentuar devidamente o vasto léxico que compõe a língua portuguesa.",
              },
            ],
          },
        ],
      },
      {
        id: "faq5",
        question: "Vai existir uma versão em inglês?",
        answer: [
          {
            type: "paragraph",
            content:
              "Não está prevista uma versão em inglês, uma vez que as ementas não são disponibilizadas nesse idioma.",
          },
        ],
      },
      {
        id: "faq6",
        question: "Posso sugerir melhorias ou reportar erros?",
        answer: [
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Sim, preenche o formulário ou envia um email para " },
              {
                type: "link",
                href: "mailto:contacto@cantinas.pt",
                label: "contacto@cantinas.pt",
              },
              { type: "text", value: "." },
            ],
          },
        ],
      },
      {
        id: "faq7",
        question: "Porque é que as ementas não estão a carregar?",
        answer: [
          { type: "paragraph", content: "Existem três motivos possíveis:" },
          {
            type: "list",
            items: [
              "Os serviços gerais da universidade estão indisponíveis.",
              "O serviço das ementas está indisponível.",
              "As ementas, simplesmente, não estão a carregar.",
            ],
          },
          {
            type: "paragraph",
            content:
              "Nos dois primeiros casos não há nada que se possa fazer, senão esperar.",
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Se achares que é o terceiro motivo, preenche o formulário ou envia um email para " },
              {
                type: "link",
                href: "mailto:contacto@cantinas.pt",
                label: "contacto@cantinas.pt",
              },
              { type: "text", value: "." },
            ],
          },
        ],
      },
      {
        id: "faq8",
        question:
          'Por vezes, as ementas ficam "A carregar a ementa..." durante imenso tempo.',
        answer: [
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Quando a duração ultrapassa 5 segundos, os dados estão a ser obtidos " },
              { type: "italic", value: "quase" },
              { type: "text", value: " diretamente da API da universidade." },
            ],
          },
          {
            type: "paragraph",
            content:
              "A API da universidade demora cerca de 5 segundos a responder a um pedido de ementas.",
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Para reduzir esse tempo, o " },
              { type: "bold", value: "Cantinas.pt" },
              {
                type: "text",
                value:
                  " guarda as ementas do dia. Assim, os utilizadores não precisam de esperar tanto tempo.",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Ocasionalmente, a API do " },
              { type: "bold", value: "Cantinas.pt" },
              {
                type: "text",
                value:
                  " não consegue satisfazer os pedidos apenas com os dados guardados. Nesses casos, é necessário comunicar novamente com a API da universidade.",
              },
            ],
          },
        ],
      },
      {
        id: "faq9",
        question:
          "Enviei uma mensagem através do formulário e não obtive resposta...",
        answer: [
          { type: "paragraph", content: "É possível que seja um dos seguintes motivos:" },
          {
            type: "list",
            items: [
              "Não escreveste bem o teu email quando preencheste o formulário e não foi possível fazer-te chegar a resposta.",
              "Falta de tempo. Não precisas de enviar uma nova mensagem, se for este o caso.",
            ],
          },
        ],
      },
      {
        id: "faq10",
        question:
          "É possível saber a ementa de um dia específico?",
        answer: [
          {
            type: "paragraph",
            content: "Sim, embora possa ser algo mais técnico.",
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Usando a ligação " },
              {
                type: "code",
                value: "api.cantinas.pt/?date=yyyy-mm-dd",
                href: "https://api.cantinas.pt/?date=yyyy-mm-dd",
              },
              { type: "text", value: " é possível obter um ficheiro " },
              {
                type: "link",
                href: "https://www.json.org/json-pt.html",
                label: "JSON",
              },
              { type: "text", value: "." },
            ],
          },
          {
            type: "paragraph",
            content:
              "Este ficheiro tem mais informações para além das ementas, nomeadamente os alergénios presentes (ex: glúten, ovos, soja, leite, aipo, mostarda, sulfitos).",
          },
          {
            type: "paragraph",
            content: "Boa sorte!",
          },
        ],
      },
      {
        id: "faq11",
        question:
          "Qual foi a inspiração para criar o Cantinas.pt?",
        answer: [
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Existe um projeto do " },
              {
                type: "link",
                href: "https://glua.ua.pt/",
                label: "GLUA",
              },
              { type: "text", value: " (Grupo de Linux da Universidade de Aveiro) no " },
              {
                type: "link",
                href: "https://github.com/GLUA-UA/meals-ua",
                label: "GitHub",
              },
              {
                type: "text",
                value:
                  ", que faz precisamente o que o Cantinas.pt se propõe a fazer, mas focado apenas no sistema operativo ",
              },
              {
                type: "link",
                href: "https://www.zorinos.com/",
                label: "Linux",
              },
              { type: "text", value: "." },
            ],
          },
          {
            type: "paragraph",
            content:
              "Então, porque não criar uma opção mais acessível para todos?",
          },
          {
            type: "paragraph",
            content: [
              { type: "italic", value: "O Homem quer, o Homem sonha, o " },
              { type: "bold", value: "Cantinas.pt" },
              { type: "italic", value: " nasce!" },
            ],
          },
        ],
      },
      {
        id: "faq12",
        question: "Como posso apoiar o projeto?",
        answer: [
          {
            type: "paragraph",
            content:
              "A melhor forma passa por partilhares com os teus colegas e amigos este projeto.",
          },
          {
            type: "paragraph",
            content: [
              { type: "text", value: "Se tiveres conhecimentos técnicos e queiras ajudar em algum assunto, podes sempre entrar em contacto através do formulário ou enviar um email para " },
              {
                type: "link",
                href: "mailto:contacto@cantinas.pt",
                label: "contacto@cantinas.pt",
              },
              { type: "text", value: "." },
            ],
          },
        ],
      },
      {
        id: "faq13",
        question: "Existe algum Easter Egg?",
        answer: [
          {
            type: "paragraph",
            content: [
              {
                type: "link",
                href: "https://caninas.pt",
                label: "Sim",
              },
              { type: "text", value: "." },
            ],
          },
        ],
      },
    ],
  },
];

export default faqData;
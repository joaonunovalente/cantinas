const precario = [
  {
    id: "cantina-santiago",
    nome: "Cantina de Santiago",
    precos: [
      { id: "santiago-1", tipo: "Estudantes", normal: "2,80\u00A0€", opcao: "3,80\u00A0€" },
      { id: "santiago-2", tipo: "Docentes, funcionários e investigadores", normal: "4,90\u00A0€", opcao: "5,90\u00A0€" },
      { id: "santiago-3", tipo: "Estudante de outras instituições", normal: "3,20\u00A0€", opcao: "4,20\u00A0€" },
      { id: "santiago-4", tipo: "Visitantes (devidamente autorizados)", normal: "6,10\u00A0€", opcao: "7,10\u00A0€" },
    ],
    observacoes: [
      { id: "obs1", ref: "a", texto: "A refeição consiste em sopa, prato, fruta, pão e acompanhamentos à discrição." },
    ],
  },
  {
    id: "cantina-crasto",
    nome: "Cantina do Crasto",
    precos: [
      { id: "crasto-1", tipo: "Estudantes", normal: "2,80\u00A0€", opcao: "3,80\u00A0€" },
      { id: "crasto-2", tipo: "Docentes, funcionários e investigadores", normal: "4,90\u00A0€", opcao: "5,90\u00A0€" },
      { id: "crasto-3", tipo: "Estudante de outras instituições", normal: "3,20\u00A0€", opcao: "4,20\u00A0€" },
      { id: "crasto-4", tipo: "Visitantes (devidamente autorizados)", normal: "6,10\u00A0€", opcao: "7,10\u00A0€" },
    ],
    observacoes: [
      { id: "obs1", ref: "a", texto: "A refeição consiste em sopa, prato, fruta, pão e acompanhamentos à discrição." },
      { id: "obs2", ref: "b", texto: "Refeição simples: prato e pão com acompanhamentos à discrição por 2,20\u00A0€." },
    ],
  },
  {
    id: "tresde",
    nome: "TrêsDê",
    precos: [
      { id: "tresde-1", tipo: "Hambúrgueres ou Pizza", preco1: "4,70\u00A0€", preco2: "6,10\u00A0€", referencia: "a" },
      { id: "tresde-2", tipo: "Pasta", preco1: "4,10\u00A0€", preco2: "6,10\u00A0€", referencia: "b" },
      { id: "tresde-3", tipo: "Fruta assada/laminada", preco1: "0,90\u00A0€", preco2: "1,00\u00A0€" },
      { id: "tresde-4", tipo: "Fruta da época", preco1: "0,55\u00A0€", preco2: "0,60\u00A0€" },
      { id: "tresde-5", tipo: "Sobremesas diversas", preco1: "1,10\u00A0€", preco2: "1,30\u00A0€" },
      { id: "tresde-6", tipo: "Cerveja 0,33L", preco1: "1,00\u00A0€", preco2: "1,30\u00A0€" },
      { id: "tresde-7", tipo: "Refrigerante lata", preco1: "0,95\u00A0€", preco2: "1,20\u00A0€" },
      { id: "tresde-8", tipo: "Acompanhamentos diversos", preco1: "Buffet", preco2: "Buffet" },
    ],
    observacoes: [
      { id: "obs1", ref: "i", texto: "Preço para estudantes, docentes e funcionários da UA." },
      { id: "obs2", ref: "ii", texto: "Preço para o público em geral." },
      { id: "obs3", ref: "a", texto: "Hambúrgeres: consiste em 2 unidades de vitela, frango ou misto." },
      { id: "obs4", ref: "b", texto: "Pasta: consiste em 5 ingredientes à escolha, para além da base (massa e molho)." },
    ],
  },
  {
    id: "campi-grelhados",
    nome: "Campi Grelhados",
    precos: [
      { id: "campi-1", tipo: "Prato (carne, peixe ou vegetariano)", preco1: "4,70\u00A0€", preco2: "6,10\u00A0€" },
      { id: "campi-2", tipo: "Sopa", preco1: "0,60\u00A0€", preco2: "0,70\u00A0€" },
      { id: "campi-3", tipo: "Pão", preco1: "0,20\u00A0€", preco2: "0,25\u00A0€" },
      { id: "campi-4", tipo: "Fruta assada/laminada", preco1: "0,90\u00A0€", preco2: "1,00\u00A0€" },
      { id: "campi-5", tipo: "Fruta da época", preco1: "0,55\u00A0€", preco2: "0,60\u00A0€" },
      { id: "campi-6", tipo: "Sobremesas diversas", preco1: "1,10\u00A0€", preco2: "1,30\u00A0€" },
      { id: "campi-7", tipo: "Cerveja 0,33L", preco1: "1,00\u00A0€", preco2: "1,30\u00A0€" },
      { id: "campi-8", tipo: "Refrigerante lata", preco1: "0,95\u00A0€", preco2: "1,20\u00A0€" },
      { id: "campi-9", tipo: "Acompanhamentos diversos", preco1: "Buffet", preco2: "Buffet" },
    ],
    observacoes: [
      { id: "obs1", ref: "i", texto: "Preço para estudantes, docentes e funcionários da UA." },
      { id: "obs2", ref: "ii", texto: "Preço para o público em geral." },
    ],
  },
  {
    id: "restaurante-vegetariano",
    nome: "Restaurante Vegetariano",
    precos: [
      { id: "vegetariano-1", tipo: "Refeição Vegetariana", descricao: "Buffet tudo incluído", preco: "6,60\u00A0€" },
    ],
    observacoes: [],
  },
  {
    id: "cantina-estga",
    nome: "Cantina da ESTGA",
    precos: [
      { id: "estga-1", tipo: "Estudantes", normal: "2,80\u00A0€", opcao: "3,80\u00A0€" },
      { id: "estga-2", tipo: "Docentes, funcionários e investigadores", normal: "4,90\u00A0€", opcao: "5,90\u00A0€" },
      { id: "estga-3", tipo: "Estudante de outras instituições", normal: "3,20\u00A0€", opcao: "4,20\u00A0€" },
      { id: "estga-4", tipo: "Visitantes (devidamente autorizados)", normal: "6,10\u00A0€", opcao: "7,10\u00A0€" },
    ],
    observacoes: [
      { id: "obs1", ref: "a", texto: "A refeição consiste em sopa, prato, fruta, pão e acompanhamentos à discrição." },
    ],
  },
  {
    id: "restaurante-universitario",
    nome: "Restaurante Universitário",
    precos: [
      { id: "universitario-1", tipo: "Refeição Completa", descricao: "Entradas + Prato + Bebida + Café", preco: "9,00\u00A0€" },
    ],
    observacoes: [],
  },
];

export default precario;
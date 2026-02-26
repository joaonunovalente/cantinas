const ementas = [
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "RESTAURANTE CARNE",
    Refeitorios: ["Restaurante Universitário"],
    Componentes: [
      {
        Nome: "CABRITO ASSADO ",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "RESTAURANTE PEIXE",
    Refeitorios: ["Restaurante Universitário"],
    Componentes: [
      {
        Nome: "LOMBOS DE PERCA COM AMÊNDOA",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "GRELHADOS CARNE",
    Refeitorios: ["Grelhados"],
    Componentes: [
      {
        Nome: "COELHO GRELHADO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "ENTRECOSTO DE PORCO GRELHADO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "GRELHADOS PEIXE",
    Refeitorios: ["Grelhados"],
    Componentes: [
      {
        Nome: "ROBALO GRELHADO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "CAVALA GRELHADA",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO CARNE",
    Refeitorios: ["Crasto"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "BIFE DE FRANGO COM MASSA ESPIRAL E COUVE FLOR",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO PEIXE",
    Refeitorios: ["Crasto"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "SALMÃO GRELHADO COM MOLHO LARANJA E ARROZ",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO VEGETARIANO",
    Refeitorios: ["Crasto"],
    Componentes: [
      {
        Nome: "HAMBURGUER VEGETARIANO COM BATATA FRITA",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Amendoins", Categoria: 5, Valor: "Contém" },
          { Descricao: "Soja", Categoria: 6, Valor: "Contém" },
          { Descricao: "Aipo", Categoria: 9, Valor: "Contém" },
          { Descricao: "Sulfitos", Categoria: 12, Valor: "Contém" },
        ],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO PEIXE",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "PEIXE ESPADA À MADEIRENSE E POLENTA ",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO DIETA",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "PEIXE ESPADA GRELHADO COM BATATA, ESPINAFRES E ALHO FRANCÊS ",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [
          { Descricao: "Crustáceos", Categoria: 2, Valor: "Contém" },
          { Descricao: "Peixes", Categoria: 4, Valor: "Contém" },
          { Descricao: "Moluscos", Categoria: 14, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO CARNE",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "FEIJOADA À BRASILEIRA E ARROZ BRANCO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO VEGETARIANO",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "MIGAS DE COUVE GALEGA,FEIJÃO FRADE E BROA DE MILHO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Jantar",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO CARNE",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "CARBONARA DE FRANGO E MASSA",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Jantar",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO VEGETARIANO",
    Refeitorios: ["ESTGA"],
    Componentes: [
      {
        Nome: "MIGAS DE COUVE GALEGA,FEIJÃO FRADE E BROA DE MILHO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO PEIXE",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO DIETA",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "PEIXE ESPADA GRELHADO COM BATATA, ESPINAFRES E ALHO FRANCÊS ",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [
          { Descricao: "Crustáceos", Categoria: 2, Valor: "Contém" },
          { Descricao: "Peixes", Categoria: 4, Valor: "Contém" },
          { Descricao: "Moluscos", Categoria: 14, Valor: "Contém" },
        ],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO CARNE",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "FEIJOADA À BRASILEIRA E ARROZ BRANCO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Almoço",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO VEGETARIANO",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "MIGAS DE COUVE GALEGA,FEIJÃO FRADE E BROA DE MILHO",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Jantar",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO CARNE",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "CARBONARA DE FRANGO E MASSA",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
    ],
  },
  {
    Periodo: "Jantar",
    Data: "2026-02-26T00:00:00",
    Nome: "PRATO VEGETARIANO",
    Refeitorios: ["Santiago"],
    Componentes: [
      {
        Nome: "SOPA ALHO FRANCÊS",
        TipoString: "Sopa",
        Tipo: 2,
        Alergenicos: [
          { Descricao: "Glúten", Categoria: 1, Valor: "Contém" },
          { Descricao: "Ovos", Categoria: 3, Valor: "Contém" },
        ],
      },
      {
        Nome: "CARIL DE GRÃO DE BICO COM MAÇA E ARROZ INTEGRAL",
        TipoString: "Prato",
        Tipo: 1,
        Alergenicos: [],
      },
    ],
  },
];

export default ementas
const horarios = [
  {
    id: "santiago",
    nome: "Cantina de Santiago",
    localizacao: "Entre a Biblioteca e o Departamento de Matemática. Entrada pelas catacumbas.",
    horarios: [
      { id: "santiago-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "11:45 – 14:30" },
      { id: "santiago-2", periodo: "Dias úteis", refeicao: "Jantar", horario: "18:30 - 20:30" },
      { id: "santiago-3", periodo: "Fins de semana e feriados", refeicao: "Almoço", horario: "13:00 - 14:30" },
      { id: "santiago-4", periodo: "Fins de semana e feriados", refeicao: "Jantar", horario: "19:00 - 20:30" },
    ],
  },
  {
    id: "crasto",
    nome: "Cantina do Crasto",
    localizacao: "Edifício da Cantina do Crasto",
    horarios: [
      { id: "crasto-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "11:45 - 14:30" },
    ],
  },
  {
    id: "tresde",
    nome: "TrêsDê",
    localizacao: "Edifício da Cantina do Crasto",
    horarios: [
      { id: "tresde-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "11:45 - 14:30" },
    ],
  },
  {
    id: "campi",
    nome: "Campi Grelhados",
    localizacao: "Junto ao Complexo Residencial de Santiago",
    horarios: [
      { id: "campi-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "11:45 - 14:30" },
    ],
  },
  {
    id: "vegetariano",
    nome: "Restaurante Vegetariano",
    localizacao: "Edifício da Cantina do Crasto",
    horarios: [
      { id: "vegetariano-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "12:30 - 14:30" },
    ],
  },
  {
    id: "estga",
    nome: "Cantina ESTGA",
    localizacao: "Edifício da ESTGA.",
    horarios: [
      { id: "estga-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "11:45 - 14:30" },
      { id: "estga-2", periodo: "Dias úteis", refeicao: "Jantar", horario: "18:30 - 20:30" },
    ],
  },
  {
    id: "universitario",
    nome: "Restaurante Universitário",
    localizacao: "Junto ao Complexo Residencial de Santiago",
    horarios: [
      { id: "universitario-1", periodo: "Dias úteis", refeicao: "Almoço", horario: "12:00 - 14:30" },
    ],
  },
];

export default horarios;
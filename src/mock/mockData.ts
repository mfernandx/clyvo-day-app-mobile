import { AcompanhamentoClinico } from "../model/AcompanhamentoClinico";

export const timelineMock = [

  {
    id: 1,
    titulo: "Consulta clínica",
    descricao:"Avaliação geral e controle de peso.",
    data: "10/05/2026",
  },

  {
    id: 2,
    titulo: "Vacinação",
    descricao:"Vacina V10 aplicada.",
    data: "15/05/2026",
  },

  {
    id: 3,
    titulo: "Recomendação alimentar",
    descricao:"Aumentar ingestão hídrica.",
    data: "18/05/2026",
  },
];

export const recomendacaoMock = [

  {
    id: 1,
    titulo:"Continuar protocolo alimentar",
    prioridade: "MEDIA",
  },

  {
    id: 2,
    titulo:"Retorno clínico em 30 dias",
    prioridade: "ALTA",
  },
];

export const acompanhamentoMock:AcompanhamentoClinico[] = [

  {
    id: 1,
    petNome: "Thor",
    tutorNome: "João",
    tipo: "MONITORAMENTO",
    titulo:"Redução de atividade física",
    descricao:"Tutor relatou menor disposição nas últimas 48h.",
    data: "Hoje • 09:42",
    status: "ATENCAO",
  },

  {
    id: 2,
    petNome: "Luna",
    tutorNome: "Marina",
    tipo: "ADESAO",
    titulo: "Boa adesão terapêutica",
    descricao: "Medicação administrada corretamente durante 7 dias.",
    data: "Hoje • 08:15",
    status: "NORMAL",
  },

  {
    id: 3,
    petNome: "Max",
    tutorNome: "Carlos",
    tipo: "ALERTA",
    titulo: "Alteração comportamental",
    descricao: "Tutor reportou irritabilidade e agressividade.",
    data: "Ontem • 18:20",
    status: "CRITICO",
  },

  {
    id: 4,
    petNome: "Mel",
    tutorNome: "Fernanda",
    tipo: "ROTINA",
    titulo: "Novo check-in diário",
    descricao: "Monitoramento diário preenchido pelo tutor.",
    data: "Ontem • 14:10",
    status: "NORMAL",
  },
];
interface AcompanhamentoClinico {
  id: number;
  petNome: string;
  tutorNome: string;
  tipo: "ALERTA" | "MONITORAMENTO" | "ADESAO" | "ROTINA";
  titulo: string;
  descricao: string;
  data: string;
  status: "NORMAL" | "ATENCAO" | "CRITICO";
}
export {AcompanhamentoClinico};
interface Monitoramento {
    id: number;
    petId: number;
    dataHora: string;
    humor: "MUITO_FELIZ" | "BEM" | "NORMAL" | "TRISTE" | "APATICO" | "AGITADO" | "IRRITAVEL" | "AGRESSIVO";   
    pesoAtual: number;
    alimentacao: string;
    atividadeRecente: string;
    observacao?: string;
}

export { Monitoramento };
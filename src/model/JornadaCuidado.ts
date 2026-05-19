interface JornadaCuidado {
    id: number;
    petId: number;
    resumoAtual: string;
    nivelRisco: "BAIXO" | "MEDIO" | "ALTO";
    adesaoTratamento: number;
    dataUltimaAtualizacao: string;
}

export {JornadaCuidado};
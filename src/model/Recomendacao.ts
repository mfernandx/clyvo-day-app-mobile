interface Recomendacao {
    id: number;
    petId: number;
    veterinarioId: number;
    titulo: string;
    descricao: string;
    prioridade: "BAIXA" | "MEDIA" | "ALTA";
    criadaEm: string;
    tipoRecomendacao: "ALIMENTACAO" | "EXERCICIO" | "MEDICACAO" | "EXAME" | "HIGIENE";
}

export {Recomendacao};
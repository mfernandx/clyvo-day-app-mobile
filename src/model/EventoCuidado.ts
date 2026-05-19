interface EventoCuidado {   
    id: number;
    petId: number;
    titulo: string;
    descricao: string;
    dataEvento: string;
    tipoEvento: "CONSULTA" | "VACINACAO" | "MEDICACAO" | "EXAME" | "ALIMENTACAO";
    concluido: boolean;
}

export {EventoCuidado};
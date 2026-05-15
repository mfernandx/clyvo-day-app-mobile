interface Pet {
    id: number;
    nome: string;
    especie: string;
    raca: string;
    idade: number;
    peso: number;
    tutorId: number;
    veterinarioId?: number;
    faseVida: "FILHOTE" | "ADULTO" | "IDOSO";
    scoreSaude: number;
    foto?: string;
}

export {Pet};
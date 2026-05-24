interface Paciente {
    id: number;
    petNome: string;
    tutorNome: string;
    especie: string;
    faseVida: string;
    scoreSaude: number;
    adesao: number;
    risco: "BAIXO" | "MODERADO" | "ALTO";
    ultimoMonitoramento: string;
}
export { Paciente };
import { Usuario } from "./Usuario";

interface Veterinario extends Usuario {
    crmv: string;
    especialidade: string;
    clinica: string;
    avaliacao: number;
    petsAcompanhadosIds: number[];
}

export { Veterinario };
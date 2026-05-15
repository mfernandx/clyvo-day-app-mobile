import { Usuario } from "./Usuario";

interface Tutor extends Usuario {
    petsId: number[];
    scoreEngajamento: number;
}

export {Tutor};
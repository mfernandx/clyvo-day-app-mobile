interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    tipoUsuario: "TUTOR" | "VETERINÁRIO";
    telefone: string;
    endereco?: string;
    criadoEm: string;
}

export {Usuario};
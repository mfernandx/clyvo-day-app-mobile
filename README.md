# 🐾 Clyvo Day App

> Plataforma mobile de continuidade de cuidado veterinário desenvolvida com React Native, Expo e TypeScript.

O **ClyvoDay** é um aplicativo mobile criado para fortalecer o relacionamento longitudinal entre **tutores**, **veterinários** e **pets**, permitindo o acompanhamento contínuo da saúde e bem-estar dos animais através de monitoramentos diários, eventos clínicos e indicadores de cuidado.

---

## 📖 Sobre o Projeto

O projeto foi desenvolvido como um MVP acadêmico com foco em **Saúde Digital Veterinária** e **Continuidade de Cuidado**.

A proposta é oferecer um ambiente onde:

- Tutores podem acompanhar e registrar informações importantes sobre seus pets;
- Veterinários podem monitorar pacientes remotamente;
- O histórico de cuidados fica centralizado e organizado;
- O acompanhamento ocorre de forma contínua e não apenas durante consultas presenciais.

---

## 🎯 Objetivos

- Simular uma plataforma de monitoramento veterinário.
- Aplicar conceitos de React Native e Expo.
- Utilizar persistência local com AsyncStorage.
- Trabalhar com componentização e arquitetura organizada.
- Desenvolver uma experiência mobile moderna e intuitiva.

---

# 🚀 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Bottom Tabs Navigator
- AsyncStorage
- Expo Vector Icons
- React Hooks (`useState`, `useEffect`)

---

# 📱 Funcionalidades

O sistema possui dois tipos de perfis:

### ❤️ Tutor

Funcionalidades:

- cadastro e login;
- cadastro de pet;
- visualização dos pets vinculados;
- monitoramento diário do pet;
- visualização de dados do perfil;
- acompanhamento de informações básicas de saúde.

### 🩺 Veterinário

Funcionalidades:

- dashboard clínico;
- visualização de pacientes acompanhados;
- visualização de eventos clínicos;
- acompanhamento de indicadores como risco, adesão e score de saúde;
- perfil profissional.

---

# 🏗️ Arquitetura do Projeto

```text
src/
│
├── components/
├── mock/
├── model/
├── screens/
|   ├── tutor/
│   └── veterinarian/
|
└── services/
```

---

# 🧭 Navegação

O projeto utiliza **React Navigation** com:

- Stack Navigator;
- Bottom Tab Navigator;
- navegação condicional por tipo de usuário.

## Fluxo Inicial

```text
Login
│
├── Cadastro
│   └── Cadastro do Veterinário
│   └── Cadastro do Tutor
|   └── Cadastro do Pet
│
├── Tutor
│   ├── Home
│   ├── Meus Pets
│   ├── Monitoramento
│   └── Perfil
│
└── Veterinário
    ├── Dashboard
    ├── Pacientes
    ├── Eventos
    └── Perfil
```

---

# 💾 Persistência Local

O projeto utiliza **AsyncStorage** para armazenamento local.

Dados persistidos:

- Usuários
- Sessão de login
- Pets
- Monitoramentos
- Relacionamento Tutor ↔ Pet

---

# 🔗 Relacionamento entre Entidades

## Tutor

```ts
{
  id: number;
  nome: string;
  email: string;
}
```

## Pet

```ts
{
  id: number;
  tutorId: number;
  nome: string;
  especie: string;
}
```

O relacionamento é feito através do campo:

```ts
tutorId
```

permitindo que cada tutor visualize apenas os seus próprios pets.

---

# 🎨 Conceito de Design

O aplicativo foi projetado para transmitir:

- Cuidado
- Confiança
- Bem-estar
- Acompanhamento contínuo

A paleta visual utiliza tons de azul para reforçar a identidade relacionada à saúde e ao cuidado animal.

---

# 📊 Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- Componentização
- Tipagem forte com TypeScript
- Arquitetura organizada
- Persistência local
- Navegação entre telas
- UX Mobile
- Saúde Digital
- Continuidade de Cuidado
- Monitoramento Longitudinal

---

# 🧪 Como Executar

## 1. Clonar o repositório

```bash
git clone https://github.com/mfernandx/clyvo-day-app-mobile.git
```

## 2. Acessar a pasta do projeto

```bash
cd clyvo-day-app-mobile
```

### Instalar dependências

```bash
npm install
```

### Executar projeto

```bash
npx expo start
```

### Executar em dispositivo físico

Instale o aplicativo:

- Expo Go (Android)
- Expo Go (iOS)

e escaneie o QR Code gerado pelo Expo.

---

# 👩‍💻 Autor

Desenvolvido por **Maria Fernanda Santos Mendes**.

Para o curso de Análise e Desenvolvimento de Sistemas.

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos.

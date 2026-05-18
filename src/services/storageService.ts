import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "@clyvoday_user";

export async function salvarUsuario(user: any) {
  try {
    await AsyncStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );
  } catch (error) {
    console.log("Erro ao salvar usuário");
  }
}

export async function carregarUsuario() {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return null;
  } catch (error) {
    console.log("Erro ao buscar usuário");
  }
}

export async function removerUsuario() {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.log("Erro ao remover usuário");
  }
}
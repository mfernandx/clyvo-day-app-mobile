import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "../model/Usuario";

const USERS_KEY = "@clyvoday_users";

const SESSION_KEY = "@clyvoday_session";

export async function registrarUsuario(user: Usuario) {

  const users = await carregarUsuarios();

  users.push(user);

  await AsyncStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );
}

export async function carregarUsuarios(): Promise<Usuario[]> {

  const data =
    await AsyncStorage.getItem(USERS_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export async function login(email: string, senha: string) {

  const users = await carregarUsuarios();

  const user = users.find(
    (u) =>
      u.email === email &&
      u.senha === senha
  );

  if (!user) {
    return null;
  }

  await AsyncStorage.setItem(
    SESSION_KEY,
    JSON.stringify(user)
  );

  return user;
}

export async function carregarSessao() {

  const data =
    await AsyncStorage.getItem(
      SESSION_KEY
    );

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export async function logout() {

  await AsyncStorage.removeItem(
    SESSION_KEY
  );
}
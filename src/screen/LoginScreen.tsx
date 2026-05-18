import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,} from "react-native";
import { login } from "../services/autenticacaoService";


export default function LoginScreen({navigation,}: any) {

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  async function handleLogin() {

    const user =
      await login(email, senha);

    if (!user) {

      Alert.alert(
        "Erro",
        "Credenciais inválidas"
      );

      return;
    }

    if (
      user.tipoUsuario === "TUTOR"
    ) {

      navigation.replace(
        "TutorHome"
      );

    } else {

      navigation.replace(
        "VetHome"
      );
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>CLYVO DAY</Text>

      <Text style={styles.subtitle}>Aplicativo de continuidade de cuidado.</Text>

      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>

      <TextInput placeholder="Senha" secureTextEntry style={styles.input} value={senha} onChangeText={setSenha}/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>

        <Text style={styles.buttonText}>Entrar</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>

        <Text style={styles.registerText}>Criar conta</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: "center",

    padding: 24,

    backgroundColor: "#F4F8F6",
  },

  title: {
    fontSize: 38,

    fontWeight: "bold",

    color: "#1f6ae1",

    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,

    marginBottom: 30,

    color: "#666",
  },

  input: {
    backgroundColor: "#FFF",

    borderRadius: 12,

    padding: 16,

    marginBottom: 16,
  },

  button: {
    backgroundColor: "#1f6ae1",

    padding: 18,

    borderRadius: 12,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",

    fontSize: 16,

    fontWeight: "bold",
  },

  registerText: {
    textAlign: "center",

    marginTop: 20,

    color: "#1f6ae1",

    fontWeight: "600",
  },
});
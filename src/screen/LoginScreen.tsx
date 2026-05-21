import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert, ImageBackground,Image} from "react-native";
import { login } from "../services/autenticacaoService";


export default function LoginScreen({navigation,}: any) {

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  async function handleLogin() {

    const user = await login(email, senha);

    if (!user) {

      Alert.alert(
        "Erro",
        "Credenciais inválidas"
      );

      return;
    }

    if (user.tipoUsuario === "TUTOR") {

      navigation.replace("TutorHome");

    } else {

      navigation.replace("VetHome");
    }
  }

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../../assets/header-login-background.png")} style={styles.header} resizeMode="cover"></ImageBackground>

      <View style={styles.login}>

      <Image source={require("../../assets/logo-clyvoday.png")} style={styles.logo} resizeMode="contain"/>

      <Text style={styles.subtitulo}>A jornada do cuidado começa aqui.</Text>

      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>

      <TextInput placeholder="Senha" secureTextEntry style={styles.input} value={senha} onChangeText={setSenha}/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>

        <Text style={styles.buttonText}>Entrar</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>

        <Text style={styles.textoCadastro}>Criar conta</Text>

      </TouchableOpacity>

      </View>

      <ImageBackground source={require("../../assets/footer-login-background.png")} style={styles.footer} resizeMode="cover"></ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    //justifyContent: "center",
    //padding: 24,
    backgroundColor: "#F4F8F6",
  },

  login: {
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    width: 220,
    height: 120,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: -30,
  },

  header: {
    height: 300,
    width: "100%",
    justifyContent: "center",
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 30,
    color: "#3b365f",
    textAlign: "center",
    marginTop: -40,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  button: {
    //backgroundColor: "#1f6ae1", //botão azul original
    //backgroundColor: "#529dfe", //botão azul mais claro
    //backgroundColor: "#3b365f", //botão cinza para o login
    backgroundColor: "#446cac", //botão azul intermediário (até agora o mais bonito)
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  textoCadastro: {
    textAlign: "center",
    marginTop: 20,
    //color: "#1f6ae1", //cor original
    //color: "#529dfe", //cor azul mais clara
    //color: "#3b365f", //cor cinza para o texto de registro
    color: "#446cac", //cor azul intermediária (até agora a mais bonita)
    fontWeight: "600",
  },

  footer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
  }
});
import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert, ImageBackground,} from "react-native";
import { login, registrarUsuario } from "../services/autenticacaoService";

export default function CadastroScreen({navigation,}: any) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState<"TUTOR" | "VETERINÁRIO">("TUTOR");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  async function handleCadastro() {

    if (!nome || !email || !senha || !telefone) {

      Alert.alert(
        "Erro",
        "Preencha todos os campos"
      );

      return;
    }

    const novoUsuario = {
      id: Math.floor(Math.random() * 100000),
      nome,
      email,
      senha,
      tipoUsuario,
      telefone,
      endereco,
      criadoEm:new Date().toISOString(),
    };

    await registrarUsuario(novoUsuario);

    await login(email, senha);

    Alert.alert(
      "Sucesso",
      "Usuário cadastrado!"
    );

    if (tipoUsuario === "TUTOR") {

        navigation.replace("CadastroPet",{tutorId: novoUsuario.id,});

    } else {

        navigation.replace("Login");
    }
    
  }

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../../assets/header-cadastro-background.png")} style={styles.header} resizeMode="cover"></ImageBackground>
      
      <View style={styles.cadastro}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome}/>

      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>

      <TextInput placeholder="Senha" secureTextEntry style={styles.input} value={senha} onChangeText={setSenha}/>

      <TextInput placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone}/>

      <TextInput placeholder="Endereço (opcional)" style={styles.input} value={endereco} onChangeText={setEndereco}/>

      <View style={styles.tipoUsuarioContainer}>

        <TouchableOpacity
          style={[styles.tipoUsuarioButton,tipoUsuario === "TUTOR" && styles.tipoUsuarioSelecionado]}
          onPress={() => setTipoUsuario("TUTOR")}
        >
          <Text>Tutor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tipoUsuarioButton,tipoUsuario === "VETERINÁRIO" && styles.tipoUsuarioSelecionado]}
          onPress={() => setTipoUsuario("VETERINÁRIO")}
        >
          <Text>Veterinário</Text>
        </TouchableOpacity>


      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>

        <Text style={styles.buttonText}>Cadastrar</Text>

      </TouchableOpacity>

    </View>

    <ImageBackground source={require("../../assets/footer-cadastro-background.png")} style={styles.footer} resizeMode="cover"></ImageBackground>
    
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
  },

  header: {
    height: 125,
    width: "100%",
    justifyContent: "center",
  },

  cadastro: {
    justifyContent: "center",
    padding: 24,
    marginTop: 20
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#446cac",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  tipoUsuarioContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },

  tipoUsuarioButton: {
    flex: 1,
    padding: 16,
    backgroundColor: "#DDD",
    borderRadius: 12,
    alignItems: "center",
  },

  tipoUsuarioSelecionado: {
    backgroundColor: "#d3e5ff",
  },

  button: {
    backgroundColor: "#446cac",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    height: 125,
    width: "100%",
    justifyContent: "center",
  }
});
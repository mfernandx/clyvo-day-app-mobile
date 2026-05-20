import React, {useEffect,useState,} from "react";
import {View,Text,StyleSheet,} from "react-native";
import Header from "../components/Header";
import {carregarSessao,} from "../services/autenticacaoService";

export default function VetPerfilScreen() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {carregaUser();}, []);

  async function carregaUser() {

    const session = await carregarSessao();

    setUser(session);
  }

  if (!user) {
    return null;
  }

  return (

    <View style={styles.container}>

      <Header
        title="Meu Perfil"
        subtitle=" Informações do médico veterinário"
      />

      <View style={styles.card}>

        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>{user.nome}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.valor}>{user.email}</Text>

        <Text style={styles.label}>Tipo de usuário</Text>
        <Text style={styles.valor}>{user.tipoUsuario}</Text>

        <Text style={styles.label}>Cadastro</Text>
        <Text style={styles.valor}>{new Date(user.criadoEm).toLocaleDateString()}</Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
  },

  label: {
    fontWeight: "bold",
    marginTop: 14,
    color: "#666",
  },

  valor: {
    fontSize: 18,
    marginTop: 4,
  },
});
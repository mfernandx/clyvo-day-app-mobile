import React, {useState,} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Alert,} from "react-native";
import { salvaPet } from "../services/petService";

export default function CadastroPetScreen({navigation,route,}: any) {

  const { tutorId } = route.params;
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [faseVida, setFaseVida] = useState<"FILHOTE"| "ADULTO"| "IDOSO">("ADULTO");

  async function handleCadastroPet() {

    if (!nome ||!especie ||!raca ||!idade ||!peso) {

      Alert.alert(
        "Erro",
        "Preencha todos os campos"
      );

      return;
    }

    const novoPet = {
      id: Math.floor(Math.random() * 100000),
      nome,
      especie,
      raca,
      idade: Number(idade),
      peso: Number(peso),
      tutorId,
      faseVida,
      scoreSaude: 100,
    };

    console.log(novoPet);

    await salvaPet(novoPet);

    Alert.alert(
      "Sucesso",
      "Pet cadastrado!"
    );

    navigation.replace("TutorHome");
  }

  return (

    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 40,}}>

      <Text style={styles.titulo}>Agora, nos conte sobre seu pet 🐾</Text>

      <Text style={styles.subtitulo}>Vamos iniciar a jornada de cuidado contínuo.</Text>

      <TextInput placeholder="Nome do pet" style={styles.input} value={nome} onChangeText={setNome}/>

      <TextInput placeholder="Espécie" style={styles.input} value={especie} onChangeText={setEspecie}/>

      <TextInput placeholder="Raça" style={styles.input} value={raca} onChangeText={setRaca}/>

      <TextInput placeholder="Idade" keyboardType="numeric" style={styles.input} value={idade} onChangeText={setIdade}/>

      <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} value={peso} onChangeText={setPeso}/>

      <Text style={styles.label}>Fase da vida</Text>

      <View style={styles.containerFase}>

        {["FILHOTE","ADULTO","IDOSO",].map((fase) => (

          <TouchableOpacity
            key={fase}
            style={[styles.buttonFase,faseVida === fase && styles.faseVidaSelecionada,]}
            onPress={() => setFaseVida(fase as any)}
          >
            <Text>
              {fase}
            </Text>
          </TouchableOpacity>

        ))}

      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastroPet}>

        <Text style={styles.buttonText}>Finalizar Cadastro</Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
    padding: 24,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#446cac",
    marginTop: 100,
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
  },

  containerFase: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 10,
  },

  buttonFase: {
    flex: 1,
    backgroundColor: "#DDD",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  faseVidaSelecionada: {
    backgroundColor: "#d3e5ff",
  },

  button: {
    backgroundColor: "#446cac",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
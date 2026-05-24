import React, {useEffect,useState,} from "react";
import {ScrollView,Text,StyleSheet,View,} from "react-native";
import Header from "../components/Header";
import {carregarSessao} from "../services/autenticacaoService";
import {buscaPetPorTutor,} from "../services/petService";
import { Pet } from "../model/Pet";

export default function TutorPetsScreen() {

  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {carregarPets();}, []);

  async function carregarPets() {

    const user = await carregarSessao();

    if (!user) return;

    const tutorPets = await buscaPetPorTutor(user.id);

    setPets(tutorPets);
  }

  return (

    <ScrollView style={styles.container}>

      <Header
        tituloPagina="Meus Pets"
        titulo="Tudo sobre seus pets"
        subtitulo="Visualize dados completos, fase de vida, peso e indicadores importantes de cada pet."
      />

      <View style={styles.conteudoPagina}>

        {pets.map((pet) => (

          <View key={pet.id} style={styles.card}>

            <Text style={styles.nome}>{pet.nome}</Text>

            <Text style={styles.label}>Espécie:</Text>
            <Text style={styles.valor}>{pet.especie}</Text>

            <Text style={styles.label}>Raça:</Text>
            <Text style={styles.valor}>{pet.raca}</Text>

            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.valor}>{pet.idade} anos</Text>

            <Text style={styles.label}>Peso:</Text>
            <Text style={styles.valor}>{pet.peso} kg</Text>

            <Text style={styles.label}>Fase da vida:</Text>
            <Text style={styles.valor}>{pet.faseVida}</Text>

            <Text style={styles.label}>Score de saúde:</Text>
            <Text style={styles.valor}>{pet.scoreSaude}</Text>

          </View>

      ))}

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
  },

  conteudoPagina: {
    padding: 20,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
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
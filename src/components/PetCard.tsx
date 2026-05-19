import React from "react";
import {View,Text,StyleSheet,} from "react-native";


interface Props {
  nome: string;
  especie: string;
  scoreSaude: number;
  faseVida: string;
}

export default function PetCard({nome, especie, scoreSaude, faseVida}: Props) {

  return (

    <View style={styles.card}>

      <View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.info}>{especie}</Text>

        <Text style={styles.info}>Fase: {faseVida}</Text>

      </View>

      <View style={styles.scoreContainer}>

        <Text style={styles.score}>{scoreSaude}</Text>

        <Text style={styles.scoreTexto}>Saúde</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#88a3ce",
  },

  info: {
    marginTop: 4,
    color: "#666",
  },

  scoreContainer: {
    alignItems: "center",
  },

  score: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#485274",
  },

  scoreTexto: {
    color: "#666",
  },
});
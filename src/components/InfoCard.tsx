import React from "react";
import {View,Text,StyleSheet,} from "react-native";

interface Props {
  titulo: string;
  valor: string | number;
}

export default function InfoCard({titulo,valor,}: Props) {

  return (

    <View style={styles.card}>

      <Text style={styles.valor}>{valor}</Text>

      <Text style={styles.titulo}>{titulo}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    margin: 6,
    elevation: 3,
  },

  valor: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  titulo: {
    color: "#666",
  },
});
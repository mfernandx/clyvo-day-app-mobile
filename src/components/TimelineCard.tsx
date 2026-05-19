import React from "react";
import {View,Text,StyleSheet,} from "react-native";

interface Props {
  titulo: string;
  descricao: string;
  data: string;
}

export default function TimelineCard({titulo,descricao,data,}: Props) {

  return (

    <View style={styles.card}>

      <Text style={styles.data}>{data}</Text>

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descricao}>{descricao}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },

  data: {
    color: "#999",
    marginBottom: 8,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },

  descricao: {
    color: "#666",
  },
});
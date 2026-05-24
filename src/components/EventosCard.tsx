import React from "react";
import {View,Text,StyleSheet,} from "react-native";
import {MaterialCommunityIcons,} from "@expo/vector-icons";

interface Props {
  petNome: string;
  tutorNome: string;
  titulo: string;
  descricao: string;
  data: string;
  status: "NORMAL" | "ATENCAO" | "CRITICO";
}

export default function EventosCard({petNome,tutorNome,titulo,descricao,data,status}: Props) {

  function getStatusColor() {

    switch (status) {

      case "CRITICO":
        return "#E53935";

      case "ATENCAO":
        return "#FB8C00";

      default:
        return "#43A047";
    }
  }

  function getStatusIcon() {

    switch (status) {

      case "CRITICO":
        return "alert-circle";

      case "ATENCAO":
        return "alert";

      default:
        return "check-circle";
    }
  }

  return (

    <View style={styles.card}>

      <View style={styles.header}>

        <View style={[styles.statusIcon,{backgroundColor: getStatusColor(),}]}>

          <MaterialCommunityIcons name={getStatusIcon() as any} size={20} color="#FFF"/>

        </View>

        <View style={styles.info}>

          <Text style={styles.nomePet}>{petNome}</Text>

          <Text style={styles.tutor}>Tutor: {tutorNome}</Text>

        </View>

      </View>

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descricao}>{descricao}</Text>

      <Text style={styles.data}>{data}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  statusIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    marginLeft: 14,
  },

  nomePet: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  tutor: {
    color: "#777",
    marginTop: 2,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  descricao: {
    color: "#666",
    lineHeight: 22,
  },

  data: {
    marginTop: 14,
    color: "#AAA",
    fontSize: 12,
  },
});
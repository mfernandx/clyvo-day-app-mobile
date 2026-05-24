import React from "react";
import {View,Text,StyleSheet,} from "react-native";


interface Props {
  tituloPagina?: string;
  titulo: string;
  subtitulo?: string;
}

export default function Header({tituloPagina,titulo,subtitulo,}: Props) {

  return (

    <View style={styles.container}>

      <View style={styles.topHeader}>
        <Text style={styles.tituloPagina}>{tituloPagina}</Text>
      </View>

      <View style={styles.conteudo}>
      <Text style={styles.titulo}>{titulo} </Text>

      {subtitulo && (
        <Text style={styles.subtitulo}>
          {subtitulo}
        </Text>
      )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginBottom: 10,
  },

  topHeader: {
    backgroundColor: "#446cac",
    paddingVertical: 18,
    paddingHorizontal: 20,
  },

  tituloPagina: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  conteudo: {
    backgroundColor: "#fff",
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  subtitulo: {
    fontSize: 16,
    marginTop: 4,
    color: "#666",
  },
});
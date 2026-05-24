import React from "react";
import {View,Text,StyleSheet,} from "react-native";
import {MaterialCommunityIcons,} from "@expo/vector-icons";

interface Props {
  petNome: string;
  tutorNome: string;
  especie: string;
  faseVida: string;
  scoreSaude: number;
  adesao: number;
  risco: "BAIXO" | "MODERADO" | "ALTO";
  ultimoMonitoramento: string;
}

export default function PacienteCard({petNome,tutorNome,especie,faseVida,scoreSaude,adesao,risco,ultimoMonitoramento,}: Props) {

  function getCorRisco() {

    switch (risco) {

      case "ALTO":
        return "#E53935";

      case "MODERADO":
        return "#FB8C00";

      default:
        return "#43A047";
    }
  }

  return (

    <View style={styles.card}>

      <View style={styles.header}>

        <View style={styles.petInfo}>

          <MaterialCommunityIcons name="paw" size={30} color={"#1f6ae1"}/>

          <View style={styles.texto}>

            <Text style={styles.nomePet}>{petNome}</Text>
            <Text style={styles.tutor}>Tutor: {tutorNome}</Text>

          </View>

        </View>

        <View style={[styles.campoRisco,{backgroundColor:getCorRisco(),}]}>

          <Text style={styles.textoRisco}>{risco}</Text>

        </View>

      </View>

      <View style={styles.metricas}>

        <View style={styles.metricaBox}>

          <Text style={styles.metricaValor}>{scoreSaude}</Text>
          <Text style={styles.metricaLabel}>Saúde</Text>

        </View>

        <View style={styles.metricaBox}>

          <Text style={styles.metricaValor}>{adesao}%</Text>
          <Text style={styles.metricaLabel}>Adesão</Text>

        </View>

      </View>

      <View style={styles.footer}>

        <Text style={styles.footerTexto}>{especie} • {faseVida}</Text>
        <Text style={styles.footerTexto}>Último check-in:{" "}{ultimoMonitoramento}</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  petInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  texto: {
    marginLeft: 14,
  },

  nomePet: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  tutor: {
    color: "#666",
    marginTop: 4,
  },

  campoRisco: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  textoRisco: {
    color: "#FFF",
    fontWeight: "bold",
  },

  metricas: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: 20,
  },

  metricaBox: {
    flex: 1,
    backgroundColor: "#F4F8F6",
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 4,
    alignItems: "center",
  },

  metricaValor: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  metricaLabel: {
    marginTop: 6,
    color: "#777",
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 16,
  },

  footerTexto: {
    color: "#777",
    marginBottom: 4,
  },
});
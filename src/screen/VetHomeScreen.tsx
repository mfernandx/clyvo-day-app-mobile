import React from "react";
import {ScrollView,Text,StyleSheet,View,} from "react-native";
import Header from "../components/Header";


export default function VetHomeScreen() {

  return (

    <ScrollView style={styles.container}>

      <Header
        title="Olá, Veterinário 👋"
        subtitle="Visão longitudinal dos pacientes"
      />

      <View style={styles.infoContainer}>

        

      </View>

      <View style={styles.infoContainer}>

       

      </View>

      <Text style={styles.sectionTitle}>
        Dashboard Clínico
      </Text>

      <Text style={styles.sectionTitle}>
        Eventos Recentes
      </Text>


      <Text style={styles.sectionTitle}>
        Recomendações Clínicas
      </Text>

      

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
    padding: 20,
  },

  infoContainer: {
    flexDirection: "row",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
  },
});
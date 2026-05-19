import React from "react";
import {View,Text,StyleSheet,ScrollView,} from "react-native";
import Header from "../components/Header";


export default function TutorHomeScreen() {

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Header
        title="Olá, Tutor 👋"
        subtitle="Acompanhe a jornada de cuidado"
      />

      <View style={styles.infoContainer}>

        

      </View>

      <Text style={styles.sectionTitle}>
        Seus Pets
      </Text>

      

      <Text style={styles.sectionTitle}>
        Timeline de Cuidado
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
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 10,
  },
});
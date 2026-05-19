import React from "react";
import {View,Text,StyleSheet,ScrollView,} from "react-native";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import PetCard from "../components/PetCard";
import TimelineCard from "../components/TimelineCard";
import { petsMock, timelineMock } from "../mock/mockData";


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
        <InfoCard titulo="Pets" valor={2}/>

        <InfoCard titulo="Engajamento" valor="92%"/>
      </View>
      

      <Text style={styles.tituloSessao}>Seus Pets</Text>

      {petsMock.map((pet) => (

        <PetCard
          key={pet.id}

          nome={pet.nome}

          especie={pet.especie}

          faseVida={pet.faseVida}

          scoreSaude={pet.scoreSaude}
        />
      ))}

      
      <Text style={styles.tituloSessao}>Timeline de Cuidado</Text>

      {timelineMock.map((item) => (

        <TimelineCard
          key={item.id}

          titulo={item.titulo}

          descricao={item.descricao}

          data={item.data}
        />
      ))}

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

  tituloSessao: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 10,
  },
});
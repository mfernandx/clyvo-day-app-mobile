import React from "react";
import {ScrollView,Text,StyleSheet,View,} from "react-native";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import TimelineCard from "../components/TimelineCard";
import { recomendacaoMock, timelineMock } from "../mock/mockData";


export default function VetHomeScreen() {

  return (

    <ScrollView style={styles.container}>

      <Header
        title="Olá, Veterinário 👋"
        subtitle="  Visão longitudinal dos pacientes"
      />

      <Text style={styles.tituloSessao}>Dashboard Clínico</Text>

      <View style={styles.infoContainer}>

        <InfoCard titulo="Pets" valor={18}/>

        <InfoCard titulo="Em risco" valor={3}/>

      </View>


      <View style={styles.infoContainer}>

        <InfoCard titulo="Adesão" valor="86%"/>

        <InfoCard titulo="Eventos" valor={12}/>

      </View>


      <Text style={styles.tituloSessao}>Eventos Recentes</Text>

      {timelineMock.map((event) => (

        <TimelineCard
          key={event.id}

          titulo={event.titulo}

          descricao={event.descricao}

          data={event.data}
        />
      ))}


      <Text style={styles.tituloSessao}>Recomendações Clínicas</Text>

      {recomendacaoMock.map((item) => (

        <TimelineCard
          key={item.id}

          titulo={item.titulo}

          descricao={"Prioridade: " + item.prioridade}

          data={"Hoje"}
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
  },

  tituloSessao: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
  },
});
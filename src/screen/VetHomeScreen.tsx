import React, { useEffect, useState } from "react";
import {ScrollView,Text,StyleSheet,View,} from "react-native";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import TimelineCard from "../components/TimelineCard";
import { recomendacaoMock, timelineMock } from "../mock/mockData";
import { carregarSessao } from "../services/autenticacaoService";


export default function VetHomeScreen() {

  const [userName, setUserName] =useState("");

  useEffect(() => {carregaDadosVet();}, []);

  async function carregaDadosVet() {
  
      const user = await carregarSessao();
      console.log(user);
  
      if (!user) return;
  
      setUserName(user.nome);
  
    }

  return (

    <ScrollView style={styles.container}>

      <Header
        tituloPagina="Início"
        titulo={`Olá, ${userName} 👋`}
        subtitulo="Visualize seus pacientes, eventos recentes e indicadores importantes para continuidade do cuidado."
      />

      <View style={styles.conteudoPagina}>

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

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F8F6",
  },

  conteudoPagina: {
    padding: 20,
  },

  infoContainer: {
    flexDirection: "row",
  },

  tituloSessao: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    color: "#1f6ae1"
  },
});
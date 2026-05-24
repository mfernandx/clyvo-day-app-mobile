import React from "react";
import {ScrollView,StyleSheet,Text,View,} from "react-native";
import Header from "../components/Header";
import EventosCard from "../components/EventosCard";
import { acompanhamentoMock } from "../mock/mockData";

export default function VetEventosScreen() {

  return (

    <ScrollView style={styles.container}>

      <Header
        tituloPagina="Eventos Clínicos"
        titulo="Atualizações recentes"
        subtitulo="Acompanhe alterações no comportamento dos pacientes, monitoramentos e novos eventos compartilhados pelos tutores."
      />

      <View style={styles.conteudoPagina}>

        {acompanhamentoMock.map(
          (event) => (

          <EventosCard
            key={event.id}
            petNome={event.petNome}
            tutorNome={event.tutorNome}
            titulo={event.titulo}
            descricao={event.descricao}
            data={event.data}
            status={event.status}
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

});
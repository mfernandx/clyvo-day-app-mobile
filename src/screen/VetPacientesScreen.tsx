import React from "react";
import {ScrollView,StyleSheet,TextInput,View,} from "react-native";
import Header from "../components/Header";
import PacienteCard from "../components/PacienteCard";
import { vetPacientesMock } from "../mock/mockData";

export default function VetPacientesScreen() {

  return (

    <ScrollView style={styles.container}>

      <Header
        tituloPagina="Pacientes"
        titulo="Pets em acompanhamento"
        subtitulo="Visualize indicadores importantes, adesão terapêutica e monitoramentos recentes dos pacientes."
      />

      <View style={styles.conteudoPagina}>

        <TextInput placeholder="Buscar paciente..." style={styles.campoBusca}/>

        {vetPacientesMock.map(
          (paciente) => (

          <PacienteCard
            key={paciente.id}
            petNome={paciente.petNome}
            tutorNome={paciente.tutorNome}
            especie={paciente.especie}
            faseVida={paciente.faseVida}
            scoreSaude={paciente.scoreSaude}
            adesao={paciente.adesao}
            risco={paciente.risco}
            ultimoMonitoramento={paciente.ultimoMonitoramento}
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

  campoBusca: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,
    fontSize: 16,
  },
});
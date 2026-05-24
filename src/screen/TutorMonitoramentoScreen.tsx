import React, {useState,} from "react";
import {ScrollView,StyleSheet,Text,View,TextInput,TouchableOpacity,} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import Header from "../components/Header";
import HumorCard from "../components/HumorCard";
import PesoCard from "../components/PesoCard";



export default function TutorMonitoramentoScreen() {

  const [humor, setHumor] = useState("");
  const [pesoAtual, setPesoAtual] = useState("");
  const [alimentacao, setAlimentacao] = useState("");
  const [atividadeRecente, setAtividadeRecente] = useState("");
  const [observacao, setObservacao] = useState("");

  const moods = [

    {
      key: "MUITO_FELIZ",
      label: "Muito feliz",
      icon: "emoticon-excited-outline",
    },

    {
      key: "BEM",
      label: "Bem",
      icon:"emoticon-happy-outline",
    },

    {
      key: "NORMAL",
      label: "Normal",
      icon: "emoticon-neutral-outline",
    },

    {
      key: "TRISTE",
      label: "Triste",
      icon: "emoticon-sad-outline",
    },

    {
      key: "APATICO",
      label: "Apático",
      icon: "sleep",
    },

    {
      key: "AGITADO",
      label: "Agitado",
      icon: "alert-outline",
    },

    {
      key: "IRRITAVEL",
      label: "Irritável",
      icon: "emoticon-angry-outline",
    },

    {
      key: "AGRESSIVO",
      label: "Agressivo",
      icon: "dog-side",
    },
  ];

  return (

    

    <ScrollView style={styles.container}>

      <Header
        tituloPagina="Monitoramento Diário"
        titulo="Como seu pet está hoje?"
        subtitulo="Registre informações sobre comportamento, alimentação e bem-estar para acompanharmos sua evolução."
      />

      <View style={styles.conteudoPagina}>

        <View style={styles.sectionTituloHumor}>

        <FontAwesome6 name="heart-circle-plus" size={26} color={"#1f6ae1"}/>
        <Text style={styles.cardTitulo}>1. Humor do pet</Text>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {moods.map((item) => (

            <HumorCard key={item.key} icon={item.icon as any} label={item.label}

              selected={humor === item.key}
              onPress={() => setHumor(item.key)}/>

          ))}

        </ScrollView>

        <PesoCard value={pesoAtual} onChangeText={setPesoAtual}/>

        <View style={styles.card}>

          <View style={styles.sectionTituloCard}>
            <FontAwesome6 name="bowl-food" size={26} color={"#1f6ae1"} />
            <Text style={styles.cardTitulo}>3. Alimentação Principal</Text>
          </View>

          <TextInput style={styles.input} placeholder="Ex: Ração Golden" value={alimentacao} onChangeText={setAlimentacao}/>
        
        </View>


        <View style={styles.card}>

          <View style={styles.sectionTituloCard}>
            <Foundation name="guide-dog" size={40} color={"#1f6ae1"} />
            <Text style={styles.cardTitulo}>4. Atividade Física</Text>
          </View>

          <TextInput style={styles.input} placeholder="Ex: Caminhada" value={atividadeRecente} onChangeText={setAtividadeRecente}/>
        
        </View>

        <View style={styles.card}>
          <View style={styles.sectionTituloCard}>
            <AntDesign name="edit" size={28} color={"#1f6ae1"} />
            <Text style={styles.cardTitulo}>5. Observações</Text>
          </View>

          <TextInput style={[styles.input,{height: 120,}]}multiline value={observacao} onChangeText={setObservacao} placeholder="Como foi o dia do seu pet? Algum comportamento diferente?"/>

        </View>

        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>Salvar Monitoramento</Text>

        </TouchableOpacity>

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

  sectionTituloHumor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginLeft: 20,
  },

  sectionTituloCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },

  cardTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f6ae1",
    marginLeft: 12,
  },

  input: {
    backgroundColor: "#F4F8F6",
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#446cac",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
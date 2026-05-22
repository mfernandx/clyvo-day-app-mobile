import React from "react";
import {View,Text,TextInput,StyleSheet,} from "react-native";
import {MaterialCommunityIcons,} from "@expo/vector-icons";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function PesoCard({value,onChangeText,}: Props) {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <MaterialCommunityIcons name="scale-bathroom" size={26} color={"#1f6ae1"}/>
        <Text style={styles.titulo}>2. Peso Atual</Text>

      </View>

      <View style={styles.inputContainer}>

        <TextInput style={styles.input} keyboardType="numeric" value={value} onChangeText={onChangeText} placeholder="0,0"/>

        <Text style={styles.kg}>kg</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    marginTop: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#1f6ae1",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F8F6",
    borderRadius: 20,
    padding: 20,
  },

  input: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  kg: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#666",
  },
});
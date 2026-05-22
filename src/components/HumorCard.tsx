import React from "react";
import {TouchableOpacity,Text,StyleSheet,View} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


interface Props {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  selected: boolean;
  onPress: () => void;
}

export default function HumorCard({icon,label,selected,onPress,}: Props) {

  return (

    <TouchableOpacity style={[styles.card,selected && styles.selected]} onPress={onPress}>

      <MaterialCommunityIcons name={icon} size={34} color={selected ? "#FFF" : "#1f6ae1"}/>

      <Text style={[styles.label,selected && styles.selectedText]}>{label}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: 95,
    height: 110,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    borderWidth: 2,
    borderColor: "#EEE",
  },

  selected: {
    backgroundColor:"#1f6ae1",
    borderColor:"#1f6ae1",
  },

  label: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },

  selectedText: {
    color: "#FFF",
  },
});
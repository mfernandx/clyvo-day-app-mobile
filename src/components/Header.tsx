import React from "react";
import {View,Text,StyleSheet,} from "react-native";


interface Props {
  title: string;
  subtitle?: string;
}

export default function Header({title,subtitle,}: Props) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}> {title} </Text>

      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f6ae1",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 4,
    color: "#666",
  },
});
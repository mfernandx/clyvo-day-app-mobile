import React from "react";
import {createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import {Ionicons,} from "@expo/vector-icons";
import VetHomeScreen from "../screen/VetHomeScreen";
import VetPacientesScreen from "../screen/VetPacientesScreen";
import VetEventosScreen from "../screen/VetEventosScreen";
import VetPerfilScreen from "../screen/VetPerfilScreen";


const Tab = createBottomTabNavigator();

export default function VetTabNavigator() {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor:"#1f6ae1",

        tabBarInactiveTintColor:"#999",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarIcon: ({color,size,}) => {

          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") {
            iconName = "home";
          }

          else if (route.name === "Pacientes") {
            iconName = "paw";
          }

          else if (route.name === "Eventos") {
            iconName = "calendar";
          }

          else if (route.name === "Perfil") {
            iconName = "person";
          }

          return (
            <Ionicons name={iconName} size={size} color={color}/>
          );
        },
      })}
    >

      <Tab.Screen name="Home" component={VetHomeScreen}/>

      <Tab.Screen name="Pacientes" component={VetPacientesScreen}/>

      <Tab.Screen name="Eventos" component={VetEventosScreen}/>

      <Tab.Screen name="Perfil" component={VetPerfilScreen}/>

    </Tab.Navigator>

  );
}
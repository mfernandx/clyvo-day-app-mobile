import React from "react";
import {createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import {Ionicons,} from "@expo/vector-icons";
import TutorHomeScreen from "../screen/TutorHomeScreen";
import TutorPetsScreen from "../screen/TutorPetsScreen";
import TutorPerfilScreen from "../screen/TutorPerfilScreen";
import TutorMonitoramentoScreen from "../screen/TutorMonitoramentoScreen";


const Tab = createBottomTabNavigator();

export default function NavegadorTutor() {

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

          else if (route.name === "Monitoramento") {
            iconName = "bar-chart";
          }

          else if (route.name === "Pets") {
            iconName = "paw";
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

      <Tab.Screen name="Home" component={TutorHomeScreen}/>

      <Tab.Screen name="Monitoramento" component={TutorMonitoramentoScreen}/>

      <Tab.Screen name="Pets" component={TutorPetsScreen}/>

      <Tab.Screen name="Perfil" component={TutorPerfilScreen}/>

    </Tab.Navigator>
  );
}
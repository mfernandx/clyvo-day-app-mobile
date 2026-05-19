import React from "react";
import LoginScreen from "./src/screen/LoginScreen";
import CadastroScreen from "./src/screen/CadastroScreen";
import TutorHomeScreen from "./src/screen/TutorHomeScreen";
import VetHomeScreen from "./src/screen/VetHomeScreen";
import { NavigationContainer,} from "@react-navigation/native";
import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import NavegadorTutor from "./src/components/NavegadorTutor";
import NavegadorVet from "./src/components/NavegadorVet";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
        <Stack.Navigator screenOptions={{headerShown: false,}}>
    
            <Stack.Screen name="Login" component={LoginScreen}/>
    
            <Stack.Screen name="Cadastro" component={CadastroScreen}/>
    
            {/* <Stack.Screen name="TutorHome" component={TutorHomeScreen}/> */}

            <Stack.Screen name="TutorHome" component={NavegadorTutor}/>
    
            {/* <Stack.Screen name="VetHome" component={VetHomeScreen}/> */}

            <Stack.Screen name="VetHome" component={NavegadorVet}/>

            
        </Stack.Navigator>
    
        </NavigationContainer>
  );
}



//instalou o npm install @expo/vector-icons
//instalou o npx expo install @react-native-async-storage/async-storage
//instalou o npm install @react-navigation/native
//instalou o npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
//instalou o npm install @react-navigation/native-stack
//instalou o npm install @react-navigation/bottom-tabs
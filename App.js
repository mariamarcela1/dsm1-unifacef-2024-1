import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import SobreMim from "./src/SobreMim";
import Curso from "./src/Curso";
import Instituicao from "./src/Instituicao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
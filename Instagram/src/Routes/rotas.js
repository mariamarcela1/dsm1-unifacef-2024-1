import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
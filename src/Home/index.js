import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";

export default function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <Pressable
        title="Sobre Mim"
        onPress={() => navigation.navigate("SobreMim")}
        style={styles.button}
      >
        <Text style={styles.text}>Sobre Mim</Text>
      </Pressable>

      <Pressable
        title="Curso"
        onPress={() => navigation.navigate("Curso")}
        style={styles.button}
      >
        <Text style={styles.text}>Curso</Text>
      </Pressable>

      <Pressable
        title="Instituição"
        onPress={() => navigation.navigate("Instituicao")}
        style={styles.button}
      >
        <Text style={styles.text}>Instituição</Text>
      </Pressable>
    </View>
  );
}
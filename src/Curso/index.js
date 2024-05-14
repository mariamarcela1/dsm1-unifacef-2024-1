import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Curso({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/meu_curso.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Sistemas de Informação</Text>
   
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
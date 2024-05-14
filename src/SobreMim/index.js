import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Image
        source={require("../../assets/me.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Maria Marcela Sousa</Text>
      <Text style={styles.text}>(16) 99134-0728</Text>
      <Text style={styles.text}>maria.marcela.sousa@gmail.com</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

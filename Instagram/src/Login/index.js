import React from "react";
import { TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import { styles } from "./style";

const CustomTextInput = ({ placeholder, style }) => (
  <TextInput style={style} placeholder={placeholder} />
);

CustomTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

const LoginScreen = ({ navigation }) => {
  const {
    container,
    gradient,
    arrow,
    language,
    logoInstagram,
    input,
    btnLogin,
    btnTextLogin,
    passwordAlert,
    btnCreateAccount,
    btnTextCreateAccount,
    logoMeta,
  } = styles;

  return (
    <View style={container}>
      <LinearGradient
        colors={["#FFF4DD", "#FFE6DD", "#E1EDFF"]}
        locations={[0, 0.2, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={gradient}
      />
      <Image source={require("../../assets/voltar.png")} style={arrow} />
      <Text style={language}>Português (Brasil)</Text>
      <Image
        source={require("../../assets/instagram-logo.png")}
        style={logoInstagram}
      />
      <CustomTextInput
        style={input}
        placeholder="Nome de usuário, email ou número"
      />
      <CustomTextInput style={input} placeholder="Senha" />
      <TouchableOpacity
        style={btnLogin}
        onPress={() => navigation.navigate("home-screen")}
      >
        <Text style={btnTextLogin}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgot-password")}>
        <Text style={passwordAlert}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={btnCreateAccount}
        onPress={() => navigation.navigate("create-account-screen")}
      >
        <Text style={btnTextCreateAccount}>Criar nova conta</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/meta-logo.png")} style={logoMeta} />
    </View>
  );
};

CustomTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;

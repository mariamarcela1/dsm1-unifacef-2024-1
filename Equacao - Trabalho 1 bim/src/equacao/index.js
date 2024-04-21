// Importando os módulos necessários do React e do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Keyboard } from 'react-native';
// Importando os estilos definidos no arquivo styles.js
import styles from './styles';

// Definindo o componente funcional Equacao
export default function Equacao() {
  // Definindo o estado inicial utilizando useState
  const [state, setState] = useState({
    a: '',
    b: '',
    c: '',
    delta: null,
    x1: null,
    x2: null,
  });

  // Destruturando os valores do estado
  const { a, b, c, delta, x1, x2 } = state;

  // Handlers para atualizar o estado quando os coeficientes são alterados
  const handleAChangeText = (text) => setState({ ...state, a: text });
  const handleBChangeText = (text) => setState({ ...state, b: text });
  const handleCChangeText = (text) => setState({ ...state, c: text });

// Função para calcular as raízes da equação do segundo grau e delta
  const calcular = () => {
    Keyboard.dismiss(); // Oculta o teclado
    
    // Convertendo os coeficientes para números
    const A = Number(a);
    const B = Number(b);
    const C = Number(c);

    // Calculando o valor do delta
    const delta = Math.pow(B, 2) - 4 * A * C;

    if (delta < 0) {
     // Exibindo um alerta caso não haja raízes reais
      Alert.alert('Sem Raízes Reais', 'Esta equação não possui raízes reais.');
      setState({ ...state, delta: null, x1: null, x2: null }); // Atualizando o estado para limpar os valores das raízes e do delta
    } else { 
      // Calculando as raízes utilizando a fórmula de Bhaskara
      const x1Valor = (-B + Math.sqrt(delta)) / (2 * A);
      const x2Valor = (-B - Math.sqrt(delta)) / (2 * A);
      setState({ ...state, delta: delta, x1: x1Valor, x2: x2Valor }); // Atualizando o estado com os valores do delta e das raízes
    }
  };

// Estrutura JSX do componente
  return (
    <View>
      <Text style={styles.title}>Calculadora de Equação do Segundo Grau</Text>
      <View style={styles.horizontal}>
        <Text>A:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleAChangeText}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>B:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleBChangeText}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.horizontal}>
        <Text>C:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleCChangeText}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.horizontal}>
        <Button title="Calcular" onPress={calcular} />
      </View>
      <View style={styles.horizontal}>
        <Text>Delta: {delta}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text>(x1): {x1}</Text>
      </View>
      <View style={styles.horizontal}>
        <Text>(x2): {x2}</Text>
      </View>
    </View>
  );
}
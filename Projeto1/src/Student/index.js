import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Student = ({ nomeAluno, grade1, grade2 }) => {
  const media = ((grade1 + grade2) / 2).toFixed(2);

  return (
    <View style={styles.aluno}>
      <View style={styles.titleContainer}>
        <Text style={styles.nome}>{nomeAluno}</Text>
      </View>
      <Text style={styles.grades}>
        Informe a nota do 1º Bim: <Text style={styles.gradeAzul}>{grade1}</Text>
      </Text>
      <Text style={styles.grades}>
        Informe a nota do 2º Bim: <Text style={styles.gradeAzul}>{grade2}</Text>
      </Text>
      <Text style={styles.grades}> 
      Média: <Text style={styles.gradeAzul}>{(grade1 + grade2) / 2}</Text>
      </Text>
    </View>
  );
};

export default Student;

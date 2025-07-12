import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PHQ9_QUESTIONS, GAD7_QUESTIONS, DASS21_QUESTIONS } from '../data/questionnaires';
import { scorePHQ9, scoreGAD7, scoreDASS21 } from '../utils/scoring';

export default function QuestionScreen({ route, navigation }) {
  const { type } = route.params;
  const questions = type === 'PHQ9' ? PHQ9_QUESTIONS : type === 'GAD7' ? GAD7_QUESTIONS : DASS21_QUESTIONS;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));

  const next = value => {
    const updated = [...answers];
    updated[index] = value;
    if (index + 1 < questions.length) {
      setAnswers(updated);
      setIndex(index + 1);
    } else {
      finish(updated);
    }
  };

  const back = () => index > 0 && setIndex(index - 1);

  const finish = allAnswers => {
    let result;
    if (type === 'PHQ9') result = scorePHQ9(allAnswers);
    else if (type === 'GAD7') result = scoreGAD7(allAnswers);
    else result = scoreDASS21(allAnswers);
    navigation.navigate('Result', { type, result });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>{`Question ${index + 1} of ${questions.length}`}</Text>
      <Text style={styles.question}>{questions[index]}</Text>
      <View style={styles.row}>
        {[0,1,2,3].map(val => (
          <Button key={val} title={String(val)} onPress={() => next(val)} />
        ))}
      </View>
      <Button title="Back" onPress={back} disabled={index === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  progress: { textAlign: 'center', marginBottom: 20 },
  question: { fontSize: 18, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }
});

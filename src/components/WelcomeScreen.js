import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mental Health Assessment</Text>
      <Text style={styles.text}>Please select the questionnaire you wish to answer.</Text>
      <Button title="PHQ-9" onPress={() => navigation.navigate('Questionnaire', { type: 'PHQ9' })} />
      <Button title="GAD-7" onPress={() => navigation.navigate('Questionnaire', { type: 'GAD7' })} />
      <Button title="DASS-21" onPress={() => navigation.navigate('Questionnaire', { type: 'DASS21' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  text: { textAlign: 'center', marginBottom: 20 },
});

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { type, result } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results for {type}</Text>
      {type === 'DASS21' ? (
        <View>
          <Text>Depression: {result.totals.depression} ({result.categories.depression})</Text>
          <Text>Anxiety: {result.totals.anxiety} ({result.categories.anxiety})</Text>
          <Text>Stress: {result.totals.stress} ({result.categories.stress})</Text>
        </View>
      ) : (
        <Text>Score: {result.total} ({result.category})</Text>
      )}
      <Button title="Start Over" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 }
});

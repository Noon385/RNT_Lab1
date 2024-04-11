import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const P6 = () => {
  return (
    <ScrollView style={styles.container}>
      {Array.from({ length: 15 }, (_, i) => (
        <View key={i} style={styles.square}>
          <Text style={styles.text}>Square {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default P6;
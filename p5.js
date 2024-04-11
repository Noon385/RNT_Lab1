import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square1}>
        <Text style={styles.text}>Square 1</Text>
      </View>
      <View style={styles.square2}>
        <Text style={styles.text}>Square 2</Text>
      </View>
      <View style={styles.square3}>
        <Text style={styles.text}>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  square1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  square2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  square3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:'center'
  },
});

export default App;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const P9 =()=>{
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default P9;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 24,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '33.33%',
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
  },
});
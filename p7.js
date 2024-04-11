import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function P7() {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  }

  

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
      />
      <Button title="Submit" onPress={()=>alert(`hello ${name}`)} />
    </View>
  );
}

export default P7;
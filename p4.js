import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const P4 = () => {
  const [clickCount, setClickCount] = useState(0);

  const handlePress = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Number of clicks: {clickCount}</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default P4;
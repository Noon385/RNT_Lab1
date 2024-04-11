import { StyleSheet, View, Alert,Button } from 'react-native';
import React from "react";
const P2 = () => {
 
  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={()=>alert("Hello")} style={styles.button}></Button>
    </View>
  );
}

export default P2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: '#51C4E9',
    color: '#fff',
    padding: 12,
    borderRadius: 4,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  }
});
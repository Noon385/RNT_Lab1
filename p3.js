import React from 'react';
import { View, Alert, StyleSheet, TouchableOpacity ,Text} from 'react-native';

const P3 = () => {


  return (
    <View style={styles.container}>
      <Button text="say hello" onPress={()=>alert("Hello")} buttonStyle={{backgroundColor:"#97FFF4"}}>
        
      </Button>
      <Button text="say goodbye" onPress={()=>alert("Goodbye")} buttonStyle={{backgroundColor:"#F11A7B"}}>
       
      </Button>
    </View>
  );
}
const Button= (props)=>(
    <TouchableOpacity
    onPress={props.onPress}

    style={{
    alignContent:'center',
    justifyContent:'center',
    marginVertical: 10,
    padding: 10,
    width: "50%",
    ...props.buttonStyle,}}

    >
        <Text style={{color:"#fff",textAlign:'center'}}>{props.text}</Text>
    </TouchableOpacity>
    
)
    
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
 
});

export default P3;
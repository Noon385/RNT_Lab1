import {StyleSheet,View,Text} from 'react-native';
import React from "react";
const P1 =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.box}> <Text >Hello, world! </Text></View>
            
        </View>


    );
}
export default P1;
const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#fff',
      alignItems:"center",
      justifyContent:"flex-start"
    },
    box:{
       width:200,
       height:200,
       borderRadius:8,
       marginTop:30,
       backgroundColor:"#51C4E9",
       justifyContent: 'center',
       alignItems: 'center'
     }
});
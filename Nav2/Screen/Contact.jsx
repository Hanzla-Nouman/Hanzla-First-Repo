import React from 'react'
import {Text, View,StyleSheet,Button} from "react-native"
const Contact = ({navigation}) => {
  return (
    <View style={StyleSheet.cont}>
   <Text>Contact Page</Text>
   <Button title='Navigate' onPress={()=>navigation.navigate("About")}/>
   </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    cont:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
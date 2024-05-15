import React from "react";
import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <>
      <View>
        <Text style={{fontSize:20,color:"#fff"}}>Hi, {name}</Text>
      </View>
    </> 
  );
}

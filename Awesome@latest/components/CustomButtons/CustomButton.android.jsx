import {
    Pressable,
    Text,
  } from "react-native";

  export default function HomeScreen() {
    const btnPressed = ()=>{
        alert("Android Pressed")
    }
    return (
        <>
<Pressable onPress={btnPressed} style={{
    justifyContent:"center",
    alignItems:"center",
    background:"Yellow",
    padding:10
}}>
  <Text style={{color:"white",fontSize: 20}}>Android</Text>
</Pressable>
        </>
    )}
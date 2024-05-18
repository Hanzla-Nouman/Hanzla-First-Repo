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
    backgroundColor:"Yellow",
    padding:10
}}>
  <Text style={{color:"white",fontSize: 20}}>Android</Text>
</Pressable>
        </>
    )}
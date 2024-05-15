import {
    Pressable,
    Text,
  } from "react-native";

  export default function HomeScreen() {
    const btnPressed = ()=>{
        alert("IOS Pressed")
    }
    return (
        <>
<Pressable onPress={btnPressed} style={{
    justifyContent:"center",
    alignItems:"center",
    background:"lightBlue",
    padding:10
}}>
  <Text style={{color:"cyan",fontSize: 20}}>IOS</Text>
</Pressable>
        </>
    )}
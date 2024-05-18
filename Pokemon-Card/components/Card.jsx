import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
const Card = ({name,hp,ability,moves,weakness,image}) => {
      const { borderColor, emoji } = getTypeDetails(ability);
  return (
    <>
    <View style={styles.container}>
        <View style={styles.flex}>
        <Text style={styles.textHead}>{name} </Text>
        <Text style={styles.textSubHead}>❤️HP: {hp}</Text>
        </View>
        <View style={[styles.abiltityCont,{borderColor: borderColor}]}>
        <Text style={styles.textHead}>{emoji}  {ability}</Text>
        </View>
        <Image style = {styles.image} source={image}/>
        <View style={{width:"100%"}}>
        <Text style={[styles.textleft,styles.textSubHead]}>Moves: {moves.join(", ")}</Text>
        </View>
        <View style={{width:"100%"}}>
        <Text style={[styles.textleft,styles.textSubHead]}>Weakness: {weakness.join(", ")}</Text>
        </View>
    </View>
    </>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
   borderWidth: 3,
   borderColor:"black",
   borderRadius: 10,
   padding: 10,
   marginHorizontal: 30,
   marginVertical: 8,
   backgroundColor: "white",
   shadowColor: "black",
   justifyContent:"center",
   alignItems:"center",
    },
    textHead:{
        fontSize: 30,
        fontWeight:"bold"
    },
    textSubHead:{
        fontSize: 18,
        fontWeight:"bold",
    },
    flex:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"   
    },
    abiltityCont:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 4,
        borderColor: "red",
        borderRadius: 18,
        margin: 10,
        backgroundColor: "white",
        shadowColor: "black",
        width: "auto",
        paddingHorizontal: 10
    },
    textleft:{
        textAlign: "left",
    }
    ,image:{
        width: 200,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        
    }
})
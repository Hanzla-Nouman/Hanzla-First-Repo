import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Platform
} from "react-native";
import Box from "../../components/Box";
import CustomButton from "../../components/CustomButtons/CustomButton"
export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={"black"} />
      <ScrollView style={styles.container}>
        <View style={styles.flexL}>
          <Box content={"Box 1"} stylesI={{ backgroundColor: "yellow",flex:1 }} />
          <Box content={"Box 2"} stylesI={{ backgroundColor: "orange" ,flex:0.9}}/>
          <Box content={"Box 3"} stylesI={{ backgroundColor: "white",flex:0.8 }} />
          <Box content={"Box 4"} stylesI={{ backgroundColor: "green",flex:0.7 }} />
          <Box content={"Box 5"} stylesI={{ backgroundColor: "cyan",flex:0.6}} />
          <Box content={"Box 6"} stylesI={{ backgroundColor: "blue",flex:0.5 }} />
          <Box content={"Box 7"} stylesI={{ backgroundColor: "lightblue",flex:0.4 }} />
        </View>
        <View style={styles.center}>
          <Text style={styles.text}>Testing Specific OS</Text>
        </View>
        <View style={styles.center}>
          <View style={[styles.box1, styles.box1Shadow]}></View>
        </View>
        <CustomButton/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f0f0f",
    marginVertical:20
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: Platform.OS === "android" ? "red" : "white",
    fontSize: 20,
    marginVertical: 20,
  },
  box1: {
    ...Platform.select({
      ios:{height: 200,
        width: 300,
        backgroundColor: "brown",
        borderRadius: 10},
        android:{
          height: 200,
        width: 300,
        backgroundColor: "yellow",
        borderRadius: 5}
        
    })
    
  },
  box1Shadow: {
    shadowColor: "red",
    elevation: 10,
  },
  box1ShadowiOS: {
    shadowColor: "red",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  flexL: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    height: 800,
    // rowGap:10,
    // columnGap:10,
    gap:7
  },
});

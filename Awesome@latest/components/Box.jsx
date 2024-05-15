import {useEffect,useState} from "react"
import {View,Text,StyleSheet,Dimensions,useWindowDimensions,SafeAreaView,StatusBar} from "react-native"
const Box = ({content,stylesI}) => {
  // const [dimensions , setDimensions] = useState({
    //   window: Dimensions.get("window")
    // })
    // useEffect(()=>{
      //   const sub = Dimensions.addEventListener("change",({window})=>{
        //     setDimensions({window})
        //   })
        //   return ()=> sub?.remove()
        // })
        // const { window } = dimensions;
        // const windowWidth = window.width
        // const windowHeight = window.height
        
        const windowWidth = useWindowDimensions().width
        const windowHeight = useWindowDimensions().height
        return (
   <>
   <StatusBar backgroundColor={"blue"}/>
<SafeAreaView style = {styles.safearea}>
   <View style={[styles.container,stylesI]}>
    <Text style={{color : windowWidth > 437 ? "white": "brown"}}> Contents {content} {windowWidth} </Text>
   </View>
   </SafeAreaView>
   </>
  )
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safearea:{
  flex:1
  },
    container:{
        justifyContent:"center",
        alignItems:"center",
        width: "auto",
        color: "#fff"
    },
    // textSize:{
    //   // color : windowWidth > 437 ? "white": "brown",
    //   // fontSize : windowWidth < 300 ? 12: 20  
    // } 
})
export default Box
 
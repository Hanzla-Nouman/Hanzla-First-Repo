// import { NavigationContainer } from '@react-navigation/native';
// import { Image, StyleSheet, Platform,Text,StatusBar } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from "../Screen/Home"
// import About from "../Screen/About"
// import Contact from "../Screen/Contact"
// export default function HomeScreen() {
//   const Stack = createNativeStackNavigator()
//   return (
//     <>
//     <StatusBar />
//     <NavigationContainer independent={true}>
//        <Stack.Navigator   screenOptions={{headerStyle:{backgroundColor:"blue"}}}>
//         <Stack.Screen name='Contact' component={Contact} options={
//           {title:"Contact Us",headerTintColor:"white",headerTitleStyle:{fontWeight:"800"},headerStyle:{backgroundColor:"red"}, headerRight:()=>(<Text>Right</Text>)}  
//         } />
//         <Stack.Screen name='Home' component={Home} initialParams={{
//           name: "Guest"
//         }}  />
//         <Stack.Screen name='About' component={About} />
//        </Stack.Navigator>
//     </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   text: {
//     color:"black",
//     fontSize:45
//   },
// });
import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "../Screen/Home"
import About from "../Screen/About"
import Contact from "../Screen/Contact"
const Drawer = createDrawerNavigator()
export default function HomeScreen() {
  return (
    <>
    <NavigationContainer independent={true}>
        <Drawer.Navigator>

            {/* <Drawer.Screen name='Home' component={Home}/> */}
            <Drawer.Screen name="About" component={About} options={{
              title:"My About",drawerLabel:"Drawer About",drawerActiveTintColor:"blue", drawerActiveBackgroundColor:"black",drawerContentStyle:{
                backgroundColor:"#f4f5ef"
              }
            }}/>  
            <Drawer.Screen name="Contact" component={Contact}/>
        </Drawer.Navigator>
    </NavigationContainer>
  
    </>
  );
}


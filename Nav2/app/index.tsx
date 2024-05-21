import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Platform,Text,StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screen/Home"
import About from "../Screen/About"
import Contact from "../Screen/Contact"
export default function HomeScreen() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar />
    <NavigationContainer independent={true}>
       <Stack.Navigator >
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
       </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  text: {
    color:"black",
    fontSize:45
  },
});

import { Image, StyleSheet,Text,View,SafeAreaView,StatusBar,ScrollView ,TextInput} from 'react-native';

import Card from '@/components/Card';

export default function HomeScreen() {
  return (
   <>
   <StatusBar/>
   <SafeAreaView style={styles.safearea}>
    <ScrollView>
   <View>
    <Card name={"Pikachu"} hp={67} ability={"Fire"} moves={["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"]} weakness= {["Ground"]} image={require('../../assets/pikachu.png')}/>
    <Card name={"Charmander"} hp={34} ability={"Water"} moves={["Scratch", "Ember", "Growl", "Leer"]} weakness= {["Water", "Rock"]} image={require('../../assets/charmander.png')}/>
    <Card name={"Squirtle"} hp={73} ability={"Grass"} moves={["Tackle", "Vine Whip", "Growl", "Leech Seed"]} weakness= {["Fire", "Ice", "Flying", "Psychic"]} image={require('../../assets/squirtle.png')}/>
    <Card name={"Bulbasaur"} hp={73} ability={"Electric"} moves={["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"]} weakness= {["Water", "Rock"]} image={require('../../assets/bulbasaur.png')}/>
   </View>
   </ScrollView>
   </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color:"black"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  safearea: {
    flex:1,
    marginTop:25,
    backgroundColor:"#f0f0f2"
  },
});

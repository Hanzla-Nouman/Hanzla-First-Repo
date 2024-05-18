import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,View,Text ,ScrollView,SafeAreaView,FlatList} from 'react-native';
import pokemonList from './data.json'

export default function TabTwoScreen() {
  return (
   <>
   <SafeAreaView style={styles.safeArea}>
   {/* <ScrollView>
   {
    pokemonList.map(pokemon => {
      return(
      <View key={pokemon.id} style={styles.flex}>
      <Text style={styles.text}> {pokemon.type}</Text>
      <Text style={styles.text}> {pokemon.name}</Text>
     </View>)
    })
   }
   </ScrollView> */}
   <FlatList data={pokemonList}  keyExtractor={(item)=> item.id.toString()} renderItem={({item})=>{return(
      <View key={item.id} style={styles.flex}>
      <Text style={styles.text}> {item.type}</Text>
      <Text style={styles.text}> {item.name}</Text>
     </View>)}} ListEmptyComponent={<Text>No items found</Text>} ListHeaderComponent={<Text style={styles.text}>Pokemon Lists</Text>} ListFooterComponent={<Text style={styles.text}>End of List</Text>}/>
   </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    marginTop:25,
    backgroundColor:"#f5f5f5",
    flex: 1,
    
  },
  flex:{
  borderWidth:2,
  borderColor:"black",
  padding: 10,
  margin: 15,
  borderRadius: 10
  },
  text:{
    fontSize:25,
    fontWeight:"bold"
  }
});

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button
} from "react-native";
import { useState, useEffect } from "react";
import { isLoading } from "expo-font";

export default function TabTwoScreen() {
  const [postList, setpostList] = useState([]);
  const [loading, setloading] = useState(true);
  const [refreshing, setRefreshing] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isPosting, setisPosting] = useState(false)
  const [errors, seterrors] = useState("")
  const fetchData = async (limit = 10) => {
    try{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setpostList(data);
    setloading(false);
  }catch(err){
    setloading(false)
    console.log("Error in fetching Data",err)
    seterrors("Error in fetching Data")
  }
  };
  const handleRefresh = ()=>{
    setRefreshing(true)
    fetchData(20)
      setRefreshing(false)
    
  }
  const handleSubmitPost = async ()=>{
    try{
    setisPosting(true)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
      
    })
   const newPost  = await response.json()
   setpostList([newPost,...postList])
   setTitle("")
   setBody("")
   setisPosting(false)
  }catch(err){
    setisPosting(false)
    console.log("Error in posting Data",err)
    seterrors("Error in posting Data")
  }}
  useEffect(() => {
    fetchData();
  }, []);
  if(loading){
    return(
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        {errors && <View style={styles.errCont}><Text style={styles.errText}>{errors}</Text></View>}
      <View style={styles.formCont}>
       <Text style={styles.text}>Title</Text>
       <TextInput
       style={styles.input}
       placeholder="Title"
       onChangeText={setTitle}
       value={title}                   

       />
       <Text style={[styles.text,{marginTop:15}]}>Body</Text>
       <TextInput
       style={styles.input}
       placeholder="Body"
       onChangeText={setBody}   
       value={body}                   
       />
       <View style={{marginTop:20,marginBottom:10}}>
       <Button title={isPosting?"Adding..." : "Add Post"} onPress={handleSubmitPost} disabled={isPosting} />
       </View>
   </View>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textBody}>{item.body}</Text>
              </View>
            );
          }}ListEmptyComponent={<Text style={styles.textTitle}>No Post Found</Text>} ListHeaderComponent={<Text style={styles.textTitle}>Hanzla is making mobile apps</Text>} ListFooterComponent={<Text style={styles.textTitle}>End of List</Text>} refreshing={refreshing} onRefresh={handleRefresh}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20, 
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textBody: {
    fontSize: 16,
    color: "#808080",
  },
  card:{
    borderWidth: 2,
    borderColor:"black",
    borderRadius:15,
    padding:15,
    marginVertical: 10
  },text:{
    fontSize:20,
    fontWeight:"bold",
    color:"#000000"
  },
  formCont:{
    backgroundColor:"#f0f0f0",
    padding: 20,
    borderRadius:15
  },
  input:{
    height:40,
    // margin:12,
    padding:10,
    borderWidth:2,
    borderRadius:10,
    borderColor:"gray"
  },
  errCont:{
    backgroundColor:"red",
    padding: 20,
    borderRadius:15
  },
  errText:{
    color:"white",
    fontWeight:"bold"
  }
});

import { useState } from 'react';
import { Image, StyleSheet, Text,SafeAreaView,StatusBar,View,Switch,TextInput,Button,KeyboardAvoidingView,ScrollView } from 'react-native';



export default function HomeScreen() {
  const [darkmode,setDarkmode] = useState(false)
  const [password,setpassword] = useState("")
  const [username,setusername] = useState("")
  const [errors,seterrors] = useState({})

  const validateForms = ()=>{
    let errors = {};
    if(!username) errors.username = "Username is required";
    if(!password) errors.password = "Password is required";
    seterrors(errors);
    return Object.keys(errors).length === 0;
  }
  const handleSubmit =()=>{
    if(validateForms()){
      console.log(username,password)
      setpassword("")
      setusername("")
      seterrors({})
    }
  } 
  return ( 
   <>
   {/* <SafeAreaView style={styles.container}> */}
   <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={160} style={styles.container}>
  
   
   {/* <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
   <Text style={styles.text}>Hanzla Nouman</Text> 
   <Switch value={darkmode} onChange={()=>setDarkmode(!darkmode)} trackColor={
     {false:"gray",true:"plum"}
    } thumbColor={"#000"}/>
   </View> */}
   <View style={styles.formCont}>
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
    <Text style={styles.text}>Hanzla Nouman</Text> 
       <Text style={styles.text}>Username</Text>
    {errors.username && <Text style={styles.texterror}>{errors.username}</Text>}
       <TextInput
       style={styles.input}
       placeholder="Username"
       onChangeText={setusername}
       value={username}
       />
       <Text style={[styles.text,{marginTop:15}]}>Password</Text>
       {errors.password && <Text style={styles.texterror}>{errors.password}</Text>}
       <TextInput
       style={styles.input}
       placeholder="Password"
       secureTextEntry
       onChangeText={setpassword}
       value={password}
       />
       <View style={{marginTop:20,marginBottom:10}}>
       <Button title='Login' onPress={handleSubmit} />
       </View>
   </View>
  
   </KeyboardAvoidingView>
   {/* </SafeAreaView> */}
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    paddingTop:StatusBar.currentHeight,
    paddingHorizontal:20,
    justifyContent:"center"
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
text:{
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
texterror:{
  color:"red",
  fontWeight:"bold"
}
});

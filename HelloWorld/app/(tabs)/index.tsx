import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Greet from "./Greet";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
const logoImage = require("../../assets/images/icon.png");

export default function App() {
  const [openModel, setOpenModal] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor="#0e0eed"
        //  hidden
      />

      <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: "#000", marginTop: 50 }}>
          <Text style={{ color: "white" }}>
            Hanxla is learninfg react native
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
            height: 70,
            width: 200,
            marginVertical: 20,
          }}
        ></View>
        <Image source={logoImage} style={{ height: 100, width: 200 }}></Image>
        <ActivityIndicator
          size="large"
          color="#fff"
          //  animating={false}
        />

        <Pressable onPress={() => console.log("Image Pressed")}>
          <ImageBackground
            source={{ uri: "https://picsum.photos/300" }}
            style={{ height: 100, width: 200 }}
          >
            <Text style={{ color: "white" }}>hanzla</Text>
          </ImageBackground>
        </Pressable>

        <View style={{ margin: 10 }}>
          <Button
            title="Submit"
            color={"black"}
            onPress={() => console.log("Button Pressed")}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "orange", padding: 60,borderRadius:20,marginHorizontal:70 ,borderColor:"red",borderWidth:3}}>
          <Button
            title="Open Model"
            color={"black"}
            onPress={() => setOpenModal(true)}
          />

          <Modal
            visible={openModel}
            onRequestClose={() => setOpenModal(false)}
            // animationType="fade"
            animationType="slide"
            // presentationStyle="pageSheet" on ios only
          >
            <View
              style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}
            >
              <Text>Modal content</Text>
              <Button
                title="Close"
                color={"black"}
                onPress={() => setOpenModal(false)}
              />
            </View>
          </Modal>
        </View>
        <View style={{ marginTop: 10 }}></View>
        <Button
          title="Alert"
          onPress={() => Alert.alert("You are learning React native!")}
        />
        <View style={[styles.alertBtn,styles.alert1]}></View>
        <Button
    
          title="Alert2"
          onPress={() =>
            Alert.alert("Making Career??", "You are learning React native!")
          }
        />
        <View style={[styles.alertBtn,styles.alert2]}></View>
        {/* Android has limit for 3 button in alert */}
        <Button
          title="Alert3"
          onPress={() =>
            Alert.alert("Making Career??", "You are learning React native!", [
              { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
              { text: "Ok", onPress: () => console.log("ok Pressed") },
              { text: "Reload", onPress: () => console.log("reload Pressed") },
            ])
          }
        />
        <Text style={{ color: "green", fontSize: 20 }}>
          possimus eligendi id debitis voluptates, excepturi incidunt ducimus
          nostrum ipsa illum enim tempore! Quas laudantium expedita id deleniti
          vel, voluptates nesciunt totam? Impedit, porro?
        </Text>
        <View>
          <Greet name={"hanzla"} />
        </View>

        <Text>
          Hanzla <Text style={{ color: "white", fontSize: 20 }}>Nouman</Text>
        </Text>
        <Pressable onPressOut={() => console.log("Long Pressed")}>
          <Text>Onling</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "plum",
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  alertBtn: {
    margin: 10
  },
  alert2:{
   marginTop:20
  },
  alert1:{
    marginTop:30
  }
});

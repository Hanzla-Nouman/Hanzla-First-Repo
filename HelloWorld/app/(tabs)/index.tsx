import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
const logoImage = require("../../assets/images/icon.png");

export default function App() {
  const [openModel, setOpenModal] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: "plum",
        paddingTop: 25,
        paddingBottom: 5,
        paddingHorizontal: 5,
      }}
    >
      <StatusBar backgroundColor="#f0f0f0"
      //  hidden
        />
      <View style={{ backgroundColor: "green", height: 200, width: 200 }}>
        <Image source={logoImage} style={{ height: 100, width: 200 }}></Image>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          height: 200,
          width: 200,
          padding: 16,
        }}
      >
        <Text>Hanl</Text>
      </View>
      <Pressable onPress={() => console.log("Image Pressed")}>
        <ImageBackground
          source={{ uri: "https://picsum.photos/300" }}
          style={{ height: 100, width: 200 }}
        >
          <Text style={{ color: "white" }}>hanzla</Text>
        </ImageBackground>
      </Pressable>
      <ScrollView>
        <View style={{ margin: 10 }}>
          <Button
            title="Submit"
            color={"black"}
            onPress={() => console.log("Button Pressed")}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "orange", padding: 60 }}>
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
        <Text style={{ color: "green", fontSize: 20 }}>
          possimus eligendi id debitis voluptates, excepturi incidunt ducimus
          nostrum ipsa illum enim tempore! Quas laudantium expedita id deleniti
          vel, voluptates nesciunt totam? Impedit, porro?
        </Text>
      </ScrollView>
      <Text>
        Hanzla <Text style={{ color: "white", fontSize: 20 }}>Nouman</Text>
      </Text>
      <Pressable onPressOut={() => console.log("Long Pressed")}>
        <Text>Onling</Text>
      </Pressable>
    </ScrollView>
  );
}

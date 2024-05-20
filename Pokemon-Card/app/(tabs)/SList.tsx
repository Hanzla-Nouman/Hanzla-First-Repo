import React, { useState } from "react";
import {
  Text,
  SectionList,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Switch
} from "react-native";
import groupedList from "./grouped-data.json";
const SList = () => {
  const [name, setName] = useState("");
  return (
    <>
      <ScrollView style={styles.container}>
        <SectionList
          sections={groupedList}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.textHead}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => (
            <Text style={styles.text}>Seperateor</Text>
          )}
          SectionSeparatorComponent={() => (
            <Text style={styles.text}>Section Seperateor</Text>
          )}
        />
       
        <Text>{name}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="John Doe"
        />
        <TextInput
          style={styles.input}
          value={name}
          keyboardType="numeric"
          onChangeText={setName}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={[styles.input,styles.multiline]}
          value={name}
          keyboardType="numeric"
          onChangeText={setName}
          placeholder="Message"
          multiline
        />
        
      </ScrollView>
    </>
  );
};

export default SList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
  },
  text: { color: "white" },
  textHead: { color: "white", fontWeight: "bold", fontSize: 20 },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
  },
  multiline:{
    minHeight: 100,
    verticalAlign:"top"
  }
});

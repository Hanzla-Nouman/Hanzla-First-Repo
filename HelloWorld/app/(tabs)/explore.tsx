import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <>
   {/* <Text>A best developer</Text> */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.headerImage} >Hanzla Nouman</ThemedText>
      </ThemedView>
    
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.headerImage} >Asad ullah</ThemedText>
      </ThemedView>

    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.headerImage} >Asad ullah</ThemedText>
      </ThemedView>
   
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.headerImage} >Asad ullah</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#ffffff',
    textAlign:"center",
   top:30
  },
  titleContainer: {
    color: '#ffffff',

    flexDirection: 'row',
    gap: 8,
  },
});

import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   
        <ThemedText type="title" style={styles.headerImage} >Hanzla Nouman</ThemedText>
      
  );
}

const styles = StyleSheet.create({

  headerImage: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

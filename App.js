import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddd52f']}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" imageStyle={styles.backgroundImage} style={styles.rootScreen}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});

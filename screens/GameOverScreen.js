import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';

export default function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  }
});

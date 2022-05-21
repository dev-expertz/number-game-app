import { Pressable, View, Text, StyleSheet } from "react-native";

export default function PrimaryButton(props) {
  function pressHandler() {
    props.onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressedStyle, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: '#640233'}}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressedStyle: {
    opacity: 0.25,
    color: "#640233",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

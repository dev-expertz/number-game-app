import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: screenWidth < 380 ? 3 : 4,
        borderColor: Colors.accent500,
        padding: screenWidth < 380 ? 16 : 24,
        margin: screenWidth < 380 ? 16 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: screenWidth < 380 ? 150 : 250
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: 36,
        color: Colors.accent500,
        textAlign: 'center'
    }
});
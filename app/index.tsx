import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={Styles.mainText}>Hello</Text>
      <StatusBar hidden={false} style="dark" />
    </View>
  );
}

const Styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});

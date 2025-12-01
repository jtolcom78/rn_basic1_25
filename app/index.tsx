import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar translucent={true} />
      <View style={[Styles.container]}>
        <View style={Styles.header}>
          <View style={Styles.headerTop}>
            <Text style={Styles.cityName}>Ansan</Text>
          </View>
          <View style={Styles.headerBottom}>
            <Text style={Styles.regDate}>일요일 2025-12-01</Text>
            <Text style={Styles.weather}>맑음</Text>
          </View>
        </View>
        <View style={Styles.mainWrap}></View>
        <View style={Styles.footer}></View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fee142",
  },
  header: {
    flex: 1,
    backgroundColor: "#fee142",
    borderWidth: 3,
    borderBottomColor: "red",
  },
  headerTop: {
    flex: 1,
    justifyContent: "center",
  },

  headerBottom: {
    flex: 4,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  regDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fee142",
    backgroundColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  weather: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },

  mainWrap: {
    flex: 2,
    backgroundColor: "#fee142",
    borderWidth: 3,
    borderBottomColor: "blue",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fee142",
    borderWidth: 3,
    borderBottomColor: "green",
  },
});

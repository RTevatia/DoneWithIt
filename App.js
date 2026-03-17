import { useDeviceOrientation } from "@react-native-community/hooks";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "100%",
            height: useDeviceOrientation() === "landscape" ? "100%" : "30%",
          }}
        ></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

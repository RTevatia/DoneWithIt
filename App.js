import { Button, StyleSheet, Alert, Platform, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          title="Click Me"
          onPress={() =>
            Alert.prompt("Enter a value", "Type something below", (text) =>
              console.log(text),
            )
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const containerStyle = {
  backgroundColor: "orange",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

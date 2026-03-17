import { StatusBar, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "dodgerblue", flex: 1 }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: StatusBar.currentHeight,
  },
});

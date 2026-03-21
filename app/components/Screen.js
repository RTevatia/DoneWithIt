import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;

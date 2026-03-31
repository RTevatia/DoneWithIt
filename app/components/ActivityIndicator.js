import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.contianer}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animation: {
    width: 650,
    height: 650,
  },
});

export default ActivityIndicator;

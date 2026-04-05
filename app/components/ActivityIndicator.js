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
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});

export default ActivityIndicator;

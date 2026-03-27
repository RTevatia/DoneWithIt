import { Text } from "react-native";

import styles from "./styles";

function AppText({ children, style, ...otherPorps }) {
  return (
    <Text style={[styles.text, style]} {...otherPorps}>
      {children}
    </Text>
  );
}

export default AppText;

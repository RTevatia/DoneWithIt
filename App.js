import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      }
    </GestureHandlerRootView>
  );
}

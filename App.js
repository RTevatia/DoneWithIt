import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
        </NavigationContainer>
      }
    </GestureHandlerRootView>
  );
}

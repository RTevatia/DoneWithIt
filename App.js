import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        {
          <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
          </NavigationContainer>
        }
      </GestureHandlerRootView>
    </>
  );
}

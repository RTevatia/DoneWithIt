import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        {
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        }
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

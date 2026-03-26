import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <ListEditScreen />
      }
    </GestureHandlerRootView>
  );
}

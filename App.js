import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessageScreen from "./app/screens/MessageScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <MessageScreen />
      }
    </GestureHandlerRootView>
  );
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));

      const value = await AsyncStorage.getItem("person");
      const person = JSON.stringify(value);

      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>{}</GestureHandlerRootView>
  );
}

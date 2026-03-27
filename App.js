import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Button from "./app/components/Button";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading image ", error);
    }
  };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <Screen>
          <Button title="select" onPress={selectImage}/>
          <ImageInput imageUri={imageUri}/>
        </Screen>
      }
    </GestureHandlerRootView>
  );
}

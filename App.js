import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <Screen>
          <ImageInput
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
        </Screen>
      }
    </GestureHandlerRootView>
  );
}

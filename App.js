import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <Screen>
          <ImageInputList
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
          />
        </Screen>
      }
    </GestureHandlerRootView>
  );
}

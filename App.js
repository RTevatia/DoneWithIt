import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import Icon from "./app/components/AppText/Icon";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <Screen>
          <ListItem
            title="My title"
            // subTitle="My subtitle"
            ImageComponent={<Icon name="email" />}
          />
        </Screen>
      }
    </GestureHandlerRootView>
  );
}

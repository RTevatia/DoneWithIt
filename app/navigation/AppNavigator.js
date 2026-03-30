import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListEditScreen from "../screens/ListEditScreen";
import AccountNavigator from "./AccountNavigation";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListEditScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;

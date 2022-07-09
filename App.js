import { NavigationContainer, StackRouter } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "./src/MainHeader";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Chat3dot from "./src/chats/chartOptions/Chat3dot";
import Status3dot from "./src/status/statusOptions/Status3dot";
import { useState } from "react";
import Calls3dot from "./src/calls/callsOptions/Calls3dot";

export default function App() {
  const StackNavigator = createStackNavigator();
  const [visibile, setVisible] = useState(true);

  function getMenu(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "chats";
    switch (routeName) {
      case "chats":
        return <Chat3dot />;
      case "status":
        return <Status3dot />;
      case "calls":
        return <Calls3dot />;
    }
  }
  function headVisible(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "chats";
    console.log(routeName);
    switch (routeName) {
      case "camera":
        console.log("yes");
        return false;
    }
  }

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="charheader"
        screenOptions={{
          headerTintColor: "#ddd",
          headerStyle: {
            backgroundColor: "#075E54",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <StackNavigator.Screen
          name="chatheader"
          component={MainHeader}
          options={({ navigation, route }) => ({
            headerShown:
              getFocusedRouteNameFromRoute(route) == "camera" ? false : true,
            headerRight: (props) => getMenu(route),
            headerTitle: "WhatsApp",
            backgroundColor: "#075E54",
          })}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

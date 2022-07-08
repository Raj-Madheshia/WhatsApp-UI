import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Charts from "./Chats";
import Calls from "../calls/Calls";
import Camera from "../camera/Camera";
import Status from "../status/Status";
import { Entypo } from "@expo/vector-icons";

export default function ChartHeader() {
  const TopTabNavigator = createMaterialTopTabNavigator();
  return (
    <TopTabNavigator.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, color: "#25D366" },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: "#075E54" },
      }}
    >
      <TopTabNavigator.Screen
        name="camera"
        component={Camera}
        options={{
          tabBarIcon: () => <Entypo name="camera" size={24} color="#25D366" />,
          tabBarShowIcon: true,
          tabBarShowLabel: false,
          tabBarStyle: { width: 0, height: 0 },
        }}
      />

      <TopTabNavigator.Screen
        name="chats"
        component={Charts}
        options={({ navigation, route }) => ({})}
      />
      <TopTabNavigator.Screen name="status" component={Status} options={{}} />
      <TopTabNavigator.Screen name="calls" component={Calls} options={{}} />
    </TopTabNavigator.Navigator>
  );
}

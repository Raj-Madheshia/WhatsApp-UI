import React from "react";
import { Text, View } from "react-native";
import ChatHeader from "./ChatHeader";

function OpenChat({ navigation, route }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ChatHeader {...route.params} />,
    });
  }, [navigation]);
  return (
    <View>
      <Text>Hello There</Text>
    </View>
  );
}

export default OpenChat;

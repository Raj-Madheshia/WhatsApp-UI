import React, { useState } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

function Chat3dot() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <View style={{ paddingRight: 10 }}>
      <Menu
        visible={visible}
        anchor={
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
            onPress={showMenu}
          />
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>New Group</MenuItem>
        <MenuItem onPress={hideMenu}>New broadcast</MenuItem>
        <MenuItem onPress={hideMenu}>Linked devices</MenuItem>
        <MenuItem onPress={hideMenu}>Starred messages</MenuItem>
        <MenuItem onPress={hideMenu}>Payments</MenuItem>
        <MenuItem onPress={hideMenu}>Settings</MenuItem>
      </Menu>
    </View>
  );
}

export default Chat3dot;

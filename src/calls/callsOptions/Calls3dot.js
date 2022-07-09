import React, { useState } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
function Calls3dot() {
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
            color="#ADB7C0"
            onPress={showMenu}
          />
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Clear call logs</MenuItem>
        <MenuItem onPress={hideMenu}>Settings</MenuItem>
      </Menu>
    </View>
  );
}

export default Calls3dot;

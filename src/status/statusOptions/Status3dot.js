import React, { useState } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
function Status3dot() {
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
        <MenuItem onPress={hideMenu}>Status privacy</MenuItem>
        <MenuItem onPress={hideMenu}>Settings</MenuItem>
      </Menu>
    </View>
  );
}

export default Status3dot;

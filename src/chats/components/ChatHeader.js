import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ChatHeader({ name, image, lastSeen }) {
  return (
    <View style={styles.main}>
      <Image style={styles.tinyLogo} source={image} />
      <View style={styles.texts}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.statusText}>Last Seen {lastSeen}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  texts: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameText: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  statusText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 10,
  },
});

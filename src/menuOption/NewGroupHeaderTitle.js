import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewGroupHeaderTitle() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.mainText}>New Group</Text>
        <Text style={styles.subText}>Add Participants</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  mainText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  subText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});

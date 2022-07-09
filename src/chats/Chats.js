import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Charts({ navigation }) {
  const count = 20;
  return (
    <ScrollView
      style={styles.main}
      contentContainerStyle={{ shadowColor: "#FFFFFF" }}
      indicatorStyle="white"
    >
      {[...Array(count)].map((e, i) => (
        <TouchableOpacity
          key={i}
          extraButtonProps={{ rippleColor: "#ADB7C0" }}
          activeOpacity={0.2}
        >
          <View style={styles.eachChat}>
            <View style={styles.logoView}>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/Image/yooda.jpg")}
              />
            </View>
            <View style={styles.chatDetails}>
              <View style={styles.top_bottom}>
                <View style={styles.name}>
                  <Text style={styles.nameText}>Shreyas</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.timeText}>Yesterday</Text>
                </View>
              </View>
              <View style={styles.top_bottom}>
                <View style={styles.chat}>
                  <Text style={styles.chatText}>Great Thanks...</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "#111C22",
  },
  eachChat: {
    height: 70,
    width: "100%",
    backgroundColor: "#111C22",
    flexDirection: "row",
    elevation: 0,
    shadowOpacity: 0,
    paddingVertical: 10,
  },
  logoView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  chatDetails: {
    flex: 0.8,
  },
  top_bottom: {
    flex: 0.5,
    justifyContent: "center",
    marginLeft: 10,
    flexDirection: "row",
  },
  name: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: { color: "#ADB7C0", fontSize: 12 },
  chat: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  chatText: {
    color: "#ADB7C0",
    fontSize: 14,
  },
});

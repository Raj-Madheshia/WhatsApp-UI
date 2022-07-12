import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ChatData } from "../assets/dummy/dummyChat";
import ProfileModal from "./components/ProfileModal";

// Image, name, lastMsgTime, lastMsg

export default function Charts({ navigation, route }) {
  const count = 20;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    require("../assets/Image/jerry-min.png")
  );
  const ImagesList = {
    1: require("../assets/Image/tom-min.png"),
    2: require("../assets/Image/nobita-min.jpg"),
    3: require("../assets/Image/yooda-min.jpg"),
    4: require("../assets/Image/doremon-min.png"),
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ProfileModal
        navigation={navigation}
        route={route}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        currentImage={currentImage}
      />
      <ScrollView
        style={styles.main}
        contentContainerStyle={{ shadowColor: "#FFFFFF" }}
        indicatorStyle="white"
      >
        {ChatData.map((d, i) => (
          <View key={i}>
            <View style={styles.eachChat}>
              <View style={styles.logoView}>
                <TouchableOpacity
                  extraButtonProps={{ rippleColor: "#ADB7C0" }}
                  activeOpacity={0.2}
                  onPress={() => {
                    setModalVisible(true);
                    console.log("yes");
                    setCurrentImage(d["image"]);
                  }}
                >
                  <Image style={styles.tinyLogo} source={d["image"]} />
                </TouchableOpacity>
              </View>
              <Pressable
                style={styles.chatDetails}
                onPress={() =>
                  navigation.navigate("openChat", {
                    name: d["name"],
                    image: d["image"],
                    lastSeen: d["lastSeen"],
                  })
                }
              >
                <View style={styles.top_bottom}>
                  <View style={styles.name}>
                    <Text style={styles.nameText}>{d["name"]}</Text>
                  </View>
                  <View style={styles.time}>
                    <Text style={styles.timeText}>{d["lastMsgTime"]}</Text>
                  </View>
                </View>
                <View style={styles.top_bottom}>
                  <View style={styles.chat}>
                    <Text style={styles.chatText}>{d["lastMsg"]}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* New */}
      {/* <SafeAreaView style={{ width: "100%", height: "100%" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.eachChat}>
            <View style={styles.logoView}>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/Image/tom-min.png")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "#111C22",
    width: "100%",
    height: "100%",
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

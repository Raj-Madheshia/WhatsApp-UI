import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ChatData } from "../assets/dummy/dummyChat";

// Image, name, lastMsgTime, lastMsg

export default function Charts({ navigation }) {
  const count = 20;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.openDp} source={currentImage} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Profile</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
              <View style={styles.chatDetails}>
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
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  openDp: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },
});

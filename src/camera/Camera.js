// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { Camera as Cam, CameraType } from "expo-camera";
// import { useIsFocused } from "@react-navigation/native";

// export default function Camera({ navigation }) {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(CameraType.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Cam.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//     console.log(hasPermission);
//   }, [navigation]);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <Cam style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
//                 type === CameraType.back ? CameraType.front : CameraType.back
//               );
//             }}
//           >
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Cam>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: "transparent",
//     flexDirection: "row",
//     margin: 20,
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     color: "white",
//   },
// });

import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
  Platform,
  TouchableHighlight,
} from "react-native";
import { Camera as Cam, CameraType, FlashMode } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Camera({ navigation, route, active }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [refCamera, setRefCamera] = useState(null);
  const isFocused = useIsFocused();

  // Screen Ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [flashOn, setFlashOn] = useState(FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Cam.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  async function prepareRatio() {
    let desiredRatio = "4:3"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await refCamera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  }
  // the camera must be loaded in order to access the supported ratios
  async function setCameraReady() {
    if (!isRatioSet) {
      await prepareRatio();
    }
  }

  async function _takePhoto() {
    const photo = await refCamera.takePictureAsync();
    console.log(photo);
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
      }}
    >
      {isFocused && (
        <Cam
          style={{
            flex: 0.9,
            marginTop: imagePadding,
            marginBottom: imagePadding,
          }}
          type={type}
          onCameraReady={setCameraReady}
          ratio={ratio}
          ref={(ref) => {
            setRefCamera(ref);
          }}
          flashMode={flashOn == "off" ? FlashMode.off : FlashMode.torch}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-around",
              alignItems: "flex-end",
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.3}
              extraButtonProps={{ rippleColor: "#2bb093" }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="flash"
                size={30}
                color="white"
                onPress={() =>
                  setFlashOn((oldState) =>
                    oldState == "off" ? FlashMode.on : FlashMode.off
                  )
                }
                style={{
                  color: flashOn == "off" ? "white" : "yellow",
                }}
              />
            </TouchableOpacity>
            <Feather
              name="circle"
              size={70}
              color="white"
              onPress={_takePhoto}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              extraButtonProps={{ rippleColor: "#2bb093" }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="camera-flip"
                size={30}
                color="white"
                onPress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              />
            </TouchableOpacity>
          </View>
        </Cam>
      )}
    </View>
  );
}

// <TouchableOpacity onPress={_takePhoto}>
// <Button title="CLick" />
// </TouchableOpacity>
// <TouchableOpacity
// style={{
//   flex: 0.1,
//   alignSelf: "flex-end",
//   alignItems: "center",
// }}
// onPress={() => {
//   setType(
//     type === CameraType.back ? CameraType.front : CameraType.back
//   );
// }}
// >
// <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
//   {" "}
//   Flip{" "}
// </Text>
// </TouchableOpacity>

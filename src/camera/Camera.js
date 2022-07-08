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
import { Text, View, TouchableOpacity, Button } from "react-native";
import { Camera as Cam, CameraType } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

export default function Camera({ navigation, route, active }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const ref = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Cam.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  async function _takePhoto() {
    const photo = await ref.current.takePictureAsync();
    console.log(photo);
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {isFocused && (
        <Cam style={{ flex: 1 }} type={type} ref={ref}>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={_takePhoto}>
              <Button title="CLick" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </Cam>
      )}
    </View>
  );
}

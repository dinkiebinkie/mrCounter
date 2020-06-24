import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Button,
  Animated,
  Image,
  Dimensions,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Eye1 from "../assets/Eye1.svg";
import Eye2 from "../assets/Eye2.svg";
import Eye3 from "../assets/Eye3.svg";
import Eye4 from "../assets/Eye4.svg";
import MrCounter1 from "../assets/MrCounter1.png";
import { hide } from "expo/build/launch/SplashScreen";

// import MrCounter1 from "../assets/MrCounter1.png";
const screenWidth = Math.floor(Dimensions.get("window").width);

const eyeSleep = -50;
const eyeAwake = 0;

function HomeScreen({ navigation, theme }) {
  const [isEyeAwake, setIsEyeAwake] = useState(false);
  const eyePos = useRef(new Animated.Value(50)).current;
  const eyeLidPos = useRef(new Animated.Value(1)).current;
  const eyeBgHeight = useRef(new Animated.Value(0)).current;

  const { numSelCounters } = useContext(CountersContext);

  useEffect(() => {
    if (numSelCounters === 0 && isEyeAwake !== false) {
      setIsEyeAwake(false);
      // eyeDown.setValue(50);
      Animated.timing(eyePos, {
        toValue: 50,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid moving down
      Animated.timing(eyeLidPos, {
        toValue: 1,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid bg closing
      Animated.timing(eyeBgHeight, {
        toValue: 0,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
    if (numSelCounters === 1 && isEyeAwake !== true) {
      setIsEyeAwake(true);
      // eyeUp.setValue(0);
      // Eyeball moving up
      Animated.timing(eyePos, {
        toValue: 0,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid moving up
      Animated.timing(eyeLidPos, {
        toValue: -1,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // EyeBg opening
      Animated.timing(eyeBgHeight, {
        toValue: 32,
        duration: 750,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
    if (numSelCounters >= 1) {
      setIsEyeAwake(true);
    }
    // console.log(numSelCounters, isEyeAwake);
  }, [numSelCounters]);

  // const bottom1 = eyePos1.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-50, 0]
  // });

  // const bottom2 = eyePos2.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-50, 0]
  // });

  console.log(numSelCounters > 0, eyePos);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AAA191", "rgba(170, 161, 145, 0)"]}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <View style={styles.eyeContainer}>
            <Animated.View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidTop,
                numSelCounters > 0 && styles.eyeLidAwake,
                { transform: [{ scaleY: eyeLidPos }] }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeBallCenter,
                {
                  top: eyePos
                }
              ]}
            >
              <View
                style={[
                  styles.eyeBall(theme),
                  numSelCounters > 0 && styles.eyeBallAwake
                ]}
              >
                <View style={styles.eyeBallPupil(theme)}></View>
              </View>
            </Animated.View>
            <View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidBottom,
                numSelCounters > 0 && styles.eyeLidAwake
              ]}
            ></View>
            <Animated.View
              style={[styles.eyeLid(theme), { height: eyeBgHeight }]}
            ></Animated.View>
            <View style={styles.eyeBgContainer}>
              <Animated.View
                style={[styles.eyeBg, { height: eyeLidPos }]}
              ></Animated.View>
            </View>
          </View>
          {/* {numSelCounters === 1 && <Eye2 />}
          {numSelCounters === 2 && <Eye3 />}
          {numSelCounters > 2 && <Eye4 />} */}
          <TouchableWithoutFeedback
            // onPress={eyesWakeUp}
            style={styles.mrCounterContainer}
          >
            <Image
              source={require("../assets/MrCounter1.png")}
              style={styles.mrCounter}
            />
          </TouchableWithoutFeedback>

          {/* <MrCounter1 style={styles.image} /> */}
          {/* {numSelCounters < 1 && <Eye1 />}
          {numSelCounters === 1 && <Eye2 />}
          {numSelCounters === 2 && <Eye3 />}
          {numSelCounters > 2 && <Eye4 />} */}
          <View
            style={[
              styles.eyeContainer,
              numSelCounters > 0 && styles.eyeContainerAwake
            ]}
          >
            <Animated.View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidTop,
                numSelCounters > 0 && styles.eyeLidAwake,
                numSelCounters > 0 && styles.eyeLidAwakeTop
              ]}
            ></Animated.View>
            <View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidBottom,
                numSelCounters > 0 && styles.eyeLidAwake
              ]}
            ></View>
          </View>
          <View style={styles.contentContainerOutline(theme)}></View>
          <View style={styles.settingsContainer}>
            <Image
              source={require("../assets/Settings.png")}
              style={styles.settings}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10,
    paddingBottom: 15
    // overflow: "hidden"
  },
  contentContainerOutline: theme => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: theme.colors.Beige1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }),
  eyeBall: theme => ({
    width: 14,
    height: 14,
    backgroundColor: theme.colors.MidBlue,
    borderWidth: 1,
    borderColor: theme.colors.Blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  }),
  eyeBallCenter: {
    position: "absolute",
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  // eyeBallAwake: { bottom: 0 },
  eyeBallPupil: theme => ({
    width: 8,
    height: 8,
    backgroundColor: theme.colors.Black,
    borderRadius: 50
  }),
  eyeBg: {
    width: 32,
    backgroundColor: "#FFFFFF"
  },
  eyeBgContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    borderRadius: 50,
    overflow: "hidden"
  },
  eyeContainer: {
    position: "relative",
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  eyeContainerAwake: { backgroundColor: "#FFFFFF" },
  eyeLid: theme => ({
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.colors.primary,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 16
    // overflow: "hidden"
  }),
  eyeLidTop: {
    height: 32
  },
  gradient: {
    paddingTop: 40,
    paddingBottom: 0
  },
  mrCounterContainer: {
    maxWidth: screenWidth / 2,
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  mrCounter: {
    width: screenWidth / 2,
    height: screenWidth / 16,
    resizeMode: "contain"
  },
  settingsContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: screenWidth * 0.064,
    paddingBottom: 15,
    paddingRight: 15
  },
  settings: {
    width: screenWidth * 0.064,
    height: screenWidth * 0.064,
    resizeMode: "contain"
  }
});

export default withTheme(HomeScreen);

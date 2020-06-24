import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Animated,
  Image,
  Dimensions
} from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import Eye1 from "../assets/Eye1.svg";
import Eye2 from "../assets/Eye2.svg";
import Eye3 from "../assets/Eye3.svg";
import Eye4 from "../assets/Eye4.svg";
import MrCounter1 from "../assets/MrCounter1.png";
import { hide } from "expo/build/launch/SplashScreen";

// import MrCounter1 from "../assets/MrCounter1.png";
const screenWidth = Math.floor(Dimensions.get("window").width);

function HomeScreen({ navigation, theme }) {
  const { numSelCounters } = useContext(CountersContext);
  console.log("numSelCounters", numSelCounters);
  console.log(screenWidth);
  // useEffect(() => {
  //   let newNumSelected = 0;
  //   counters.forEach(counter => (counter.selected ? newNumSelected++ : null));
  //   setNumSelected(newNumSelected);
  // });
  // let eyeSrc = Eye1;
  // if (numSelCounters > 0) eyeSrc = Eye2;
  // if (numSelCounters > 1) eyeSrc = Eye3;
  // if (numSelCounters > 2) eyeSrc = Eye4;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AAA191", "rgba(170, 161, 145, 0)"]}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <View
            style={[
              styles.eyeContainer,
              numSelCounters > 0 && styles.eyeContainerAwake
            ]}
          >
            {/* <Animated.View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidTop,
                numSelCounters > 0 && styles.eyeLidAwake,
                numSelCounters > 0 && styles.eyeLidAwakeTop
              ]}
            ></Animated.View> */}
            <View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidBottom,
                numSelCounters > 0 && styles.eyeLidAwake
              ]}
            ></View>
          </View>
          {numSelCounters === 1 && <Eye2 />}
          {numSelCounters === 2 && <Eye3 />}
          {numSelCounters > 2 && <Eye4 />}
          <View style={styles.mrCounterContainer}>
            <Image
              source={require("../assets/MrCounter1.png")}
              style={styles.mrCounter}
            />
          </View>

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
            {/* <Animated.View
              style={[
                styles.eyeLid(theme),
                styles.eyeLidTop,
                numSelCounters > 0 && styles.eyeLidAwake,
                numSelCounters > 0 && styles.eyeLidAwakeTop
              ]}
            ></Animated.View> */}
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
    // backgroundColor: "red"
    // margin: 8
    // height: "25%"
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
  eyeContainer: {
    position: "relative",
    width: 24,
    height: 24,
    borderRadius: 50
    // borderWidth: 1
    // backgroundColor: "green"
  },
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
    height: 12
    // overflow: "hidden"
  }),
  eyeLidTop: {
    transform: [{ translateY: "-100%", scaleY: -1 }]
  },
  eyeLidTopAwake: {
    transform: [{ translateY: "0", scaleY: 1 }]
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

import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Math.floor(Dimensions.get("window").width);
const eyeWidth = 32;

function HomeScreen({ navigation, theme }) {
  const { numSelCounters } = useContext(CountersContext);
  console.log("numSelCounters", numSelCounters);
  const numSel = numSelCounters.length;

  const [isEyeAwake, setIsEyeAwake] = useState(numSel > 0 ? true : false);
  const eyePos = useRef(new Animated.Value(50)).current;
  const eyeLidPos = useRef(new Animated.Value(1)).current;
  const eyeBgHeight = useRef(new Animated.Value(eyeWidth)).current;
  const eyeRingSizeOp1 = useRef(new Animated.Value(0)).current;
  const eyeRingSizeOp2 = useRef(new Animated.Value(0)).current;
  const eyeRingSizeOp3 = useRef(new Animated.Value(0)).current;
  const eyeRingSize1 = useRef(new Animated.Value(32)).current;
  const eyeRingSize2 = useRef(new Animated.Value(32)).current;
  const eyeRingSize3 = useRef(new Animated.Value(32)).current;
  const eyeRingSize4 = useRef(new Animated.Value(32)).current;
  const eyeRingSize5 = useRef(new Animated.Value(32)).current;
  const eyeRingSize6 = useRef(new Animated.Value(32)).current;

  useEffect(() => {
    console.log(numSel, isEyeAwake);
    if (numSel === 0) {
      setIsEyeAwake(false);
      Animated.timing(eyePos, {
        toValue: 50,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid moving down
      Animated.timing(eyeLidPos, {
        toValue: 1,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid bg closing (whites of eyes)
      Animated.timing(eyeBgHeight, {
        toValue: eyeWidth,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp1, {
        toValue: 0,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp2, {
        toValue: 0,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp3, {
        toValue: 0,
        useNativeDriver: false,
        duration: 400,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // make eye rings retract
      Animated.timing(eyeRingSize1, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize2, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();
      Animated.timing(eyeRingSize3, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize4, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize5, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize6, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
    if (numSel >= 1) {
      setIsEyeAwake(true);

      // Eyeball moving up
      Animated.timing(eyePos, {
        toValue: 0,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // Eyelid moving up
      Animated.timing(eyeLidPos, {
        toValue: -1,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      // EyeBg opening
      Animated.timing(eyeBgHeight, {
        toValue: 0,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp1, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp2, {
        toValue: 0,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp3, {
        toValue: 0,
        useNativeDriver: false,
        duration: 400,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize1, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize2, {
        toValue: 36,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize3, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize4, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize5, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize6, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }

    if (numSel >= 2) {
      Animated.timing(eyeRingSizeOp1, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp2, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSizeOp3, {
        toValue: 0,
        useNativeDriver: false,
        duration: 400,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize1, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize2, {
        toValue: 36,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize3, {
        toValue: 40,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize4, {
        toValue: 44,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize5, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize6, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }

    if (numSel >= 3) {
      Animated.timing(eyeRingSizeOp1, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();
      Animated.timing(eyeRingSizeOp2, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();
      Animated.timing(eyeRingSizeOp3, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize1, {
        toValue: 32,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize2, {
        toValue: 36,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize3, {
        toValue: 40,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize4, {
        toValue: 44,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize5, {
        toValue: 48,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(eyeRingSize6, {
        toValue: 52,
        useNativeDriver: false,
        duration: 600,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }

    if (numSel >= 1) {
      setIsEyeAwake(true);
    } else {
      setIsEyeAwake(false);
    }
  }, [numSel]);

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={["#AAA191", "rgba(170, 161, 145, 0)"]}
        style={styles.gradient}
      > */}
      <View style={styles.contentContainer}>
        <View style={styles.eyeContainer}>
          {/* Hide these components when outside of eye */}
          <View style={styles.eyeContainerHidden}>
            {/* eyeball and pupil */}
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
                  numSel > 0 && styles.eyeBallAwake
                ]}
              >
                <View style={styles.eyeBallPupil(theme)}></View>
              </View>
            </Animated.View>
            {/* bottom half of eyelid */}
            <View style={[styles.eyeLid(theme), styles.eyeLidBottom]}></View>
            {/* Whites of Eye */}
            <Animated.View
              style={[styles.eyeBg, { top: eyeBgHeight }]}
            ></Animated.View>
          </View>
          {/* Eye Rings - Outside of Hidden container */}
          <View style={styles.eyeRingCenter}>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize1,
                  height: eyeRingSize1,
                  opacity: eyeRingSizeOp1
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize2,
                  height: eyeRingSize2,
                  opacity: eyeRingSizeOp1
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize3,
                  height: eyeRingSize3,
                  opacity: eyeRingSizeOp2
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize4,
                  height: eyeRingSize4,
                  opacity: eyeRingSizeOp2
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize5,
                  height: eyeRingSize5,
                  opacity: eyeRingSizeOp3
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize6,
                  height: eyeRingSize6,
                  opacity: eyeRingSizeOp3
                }
              ]}
            ></Animated.View>
          </View>
        </View>

        <TouchableWithoutFeedback style={styles.mrCounterContainer}>
          <Image
            source={require("../assets/MrCounter1.png")}
            style={styles.mrCounter}
          />
        </TouchableWithoutFeedback>
        <View style={styles.eyeContainer}>
          {/* Hide these components when outside of eye */}
          <View style={styles.eyeContainerHidden}>
            {/* eyeball and pupil */}
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
                  numSel > 0 && styles.eyeBallAwake
                ]}
              >
                <View style={styles.eyeBallPupil(theme)}></View>
              </View>
            </Animated.View>
            {/* bottom half of eyelid */}
            <View style={[styles.eyeLid(theme), styles.eyeLidBottom]}></View>
            {/* Whites of Eye */}
            <Animated.View
              style={[styles.eyeBg, { top: eyeBgHeight }]}
            ></Animated.View>
          </View>
          {/* Eye Rings - Outside of Hidden container */}
          <View style={styles.eyeRingCenter}>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize1,
                  height: eyeRingSize1,
                  opacity: eyeRingSizeOp1
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize2,
                  height: eyeRingSize2,
                  opacity: eyeRingSizeOp1
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize3,
                  height: eyeRingSize3,
                  opacity: eyeRingSizeOp2
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize4,
                  height: eyeRingSize4,
                  opacity: eyeRingSizeOp2
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize5,
                  height: eyeRingSize5,
                  opacity: eyeRingSizeOp3
                }
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.eyeAwakeRing(theme),
                {
                  width: eyeRingSize6,
                  height: eyeRingSize6,
                  opacity: eyeRingSizeOp3
                }
              ]}
            ></Animated.View>
          </View>
        </View>
        <View style={styles.contentContainerOutline(theme)}></View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../assets/Settings.png")}
              style={styles.settings}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    backgroundColor: "rgba(43,44,46,0)"
  },
  contentContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10,
    paddingTop: 40,
    paddingBottom: 15
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
    zIndex: 10000,
    borderRadius: 50
  }),
  eyeBallCenter: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  eyeBallPupil: theme => ({
    width: 8,
    height: 8,
    backgroundColor: theme.colors.Black,
    borderRadius: 50
  }),
  eyeBg: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0
  },
  eyeContainer: {
    position: "relative",
    width: eyeWidth,
    height: eyeWidth,
    borderRadius: 50,
    backgroundColor: "transparent"
  },
  eyeContainerHidden: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    overflow: "hidden"
  },
  eyeContainerAwake: { backgroundColor: "#FFFFFF" },
  eyeAwakeRing: theme => ({
    position: "absolute",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.colors.DarkBeige,
    zIndex: 0
  }),
  eyeRingCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  eyeLid: theme => ({
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.colors.DarkBeige,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 16
  }),
  gradient: {
    paddingTop: 40,
    paddingBottom: 0
  },
  mrCounterContainer: {
    maxWidth: screenWidth / 2,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    zIndex: 10000
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
    paddingBottom: 10,
    paddingRight: 15
    // backgroundColor: "red"
    // zIndex: 18903289382
  },
  settings: {
    width: screenWidth * 0.064,
    height: screenWidth * 0.064,
    resizeMode: "contain"
  }
});

export default withTheme(HomeScreen);

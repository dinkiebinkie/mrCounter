import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button, Animated } from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme, Image } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import Eye1 from "../assets/Eye1.svg";
import Eye2 from "../assets/Eye2.svg";
import Eye3 from "../assets/Eye3.svg";
import Eye4 from "../assets/Eye4.svg";
import MrCounter1 from "../assets/MrCounter1.svg";
import { hide } from "expo/build/launch/SplashScreen";

// import MrCounter1 from "../assets/MrCounter1.png";

function HomeScreen({ navigation, theme }) {
  const { numSelCounters } = useContext(CountersContext);
  console.log("numSelCounters", numSelCounters);

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
            styles={[
              styles.eyeContainer,
              numSelCounters > 0 && styles.eyeContainerAwake
            ]}
          >
            <Animated.View
              styles={[
                styles.eyeLid(theme),
                styles.eyeLidTop,
                numSelCounters > 0 && styles.eyeLidAwake,
                numSelCounters > 0 && styles.eyeLidAwakeTop
              ]}
            ></Animated.View>
            <View
              styles={[
                styles.eyeLid(theme),
                styles.eyeLidBottom,
                numSelCounters > 0 && styles.eyeLidAwake
              ]}
            ></View>
          </View>
          {numSelCounters === 1 && <Eye2 />}
          {numSelCounters === 2 && <Eye3 />}
          {numSelCounters > 2 && <Eye4 />}
          <MrCounter1 style={styles.mrCounter} />
          {numSelCounters < 1 && <Eye1 />}
          {numSelCounters === 1 && <Eye2 />}
          {numSelCounters === 2 && <Eye3 />}
          {numSelCounters > 2 && <Eye4 />}
          <View style={styles.contentContainerOutline(theme)}></View>
        </View>
        {/* <View style={styles.counterContainer}>
        {counters
          ? counters.map((counter, i) => (
              <HomeCounter
                key={i}
                counter={counter}
                index={i}
                numSelected={numSelected}
              />
            ))
          : null}
      </View>
      <Button
        title="Go ->"
        style={styles.goButton}
        onPress={() => navigation.navigate("Counters", { numSelected })}
        disabled={numSelected < 1 ? true : false}
      /> */}
      </LinearGradient>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    paddingTop: 20,
    // minHeight: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center"
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
    borderRightWidth: 1
  }),
  eyeContainer: {},
  eyeLid: theme => ({
    width: 24,
    height: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    overflow: "hidden"
  }),
  eyeLidTop: {
    transform: [{ translateY: "-100%", scaleY: -1 }]
  },
  eyeLidTopAwake: {
    transform: [{ translateY: " b0", scaleY: 1 }]
  },
  gradient: { paddingTop: 20, paddingBottom: 20 },
  mrCounter: { marginLeft: 15, marginRight: 15 }
});

export default withTheme(HomeScreen);

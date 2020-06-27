import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity
} from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

const screenWidth = Math.floor(Dimensions.get("window").width);
const containerMargin = 4;

function HomeScreen({ navigation, theme }) {
  const { numSelCounters } = useContext(CountersContext);
  const goWidth = useRef(new Animated.Value(0)).current;
  const newWidth = useRef(new Animated.Value(screenWidth - containerMargin * 2))
    .current;
  const goOpacity = useRef(new Animated.Value(0)).current;

  console.log(screenWidth - containerMargin * 2);

  useEffect(() => {
    if (numSelCounters === 0) {
      Animated.timing(goWidth, {
        toValue: 100,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(newWidth, {
        toValue: screenWidth - containerMargin * 2,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(goOpacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
    if (numSelCounters === 1) {
      Animated.timing(goWidth, {
        toValue: (screenWidth - containerMargin * 2) * 0.67,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(newWidth, {
        toValue: (screenWidth - containerMargin * 2) * 0.3,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(goOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
  }, [numSelCounters]);

  return (
    <View style={styles.buttonContainer}>
      <Animated.View
        style={[
          styles.bottomButton,
          styles.newButton(theme),
          { width: newWidth }
        ]}
        onPress={() => console.log("add new counter!!")}
      >
        <View
          style={[
            styles.actionButton,
            { backgroundColor: theme.colors.MidBlue }
          ]}
        >
          <Text style={styles.buttonText}>+</Text>
        </View>
        <Text style={styles.buttonText}>New</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomButton,
          styles.goButton(theme),
          { width: goWidth, opacity: goOpacity }
        ]}
        onPress={() => navigation.navigate("Counters", { numSelCounters })}
        disabled={numSelCounters < 1 ? true : false}
      >
        <Text style={styles.buttonText}>Go Count</Text>
        <View
          style={[{ backgroundColor: theme.colors.Grey3 }, styles.actionButton]}
        >
          <Text style={styles.buttonText}>></Text>
        </View>
      </Animated.View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  actionButton: {
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomButton: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    padding: 4
  },
  buttonContainer: {
    position: "absolute",
    left: containerMargin,
    right: containerMargin,
    bottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  newButton: theme => ({
    paddingRight: 12,
    backgroundColor: theme.colors.Blue
  }),
  goButton: theme => ({
    backgroundColor: theme.colors.Grey1,
    paddingLeft: 12
  })
});

export default withTheme(HomeScreen);

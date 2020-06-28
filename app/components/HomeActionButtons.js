import React, { useContext, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

const screenWidth = Math.floor(Dimensions.get("window").width);
const containerMargin = 4;

function HomeScreen({ navigation, theme }) {
  const { numSelCounters, addCounter } = useContext(CountersContext);
  const goWidth = useRef(new Animated.Value(100)).current;
  const newWidth = useRef(new Animated.Value(screenWidth - containerMargin * 2))
    .current;
  const goOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (numSelCounters === 0) {
      Animated.timing(goWidth, {
        toValue: 100,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(newWidth, {
        toValue: screenWidth - containerMargin * 2,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(goOpacity, {
        toValue: 0,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();
    }
    if (numSelCounters === 1) {
      Animated.timing(goWidth, {
        toValue: (screenWidth - containerMargin * 2) * 0.67,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(newWidth, {
        toValue: (screenWidth - containerMargin * 2) * 0.3,
        useNativeDriver: false,
        duration: 500,
        easing: Easing.inOut(Easing.linear)
      }).start();

      Animated.timing(goOpacity, {
        toValue: 1,
        useNativeDriver: false,
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
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => addCounter()}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomButton,
          styles.goButton(theme),
          { width: goWidth, opacity: goOpacity }
        ]}
        disabled={numSelCounters < 1 ? true : false}
      >
        <Text style={styles.buttonText}>Go Count</Text>
        <View
          style={[{ backgroundColor: theme.colors.Grey3 }, styles.actionButton]}
        >
          <Text style={styles.buttonText}>></Text>
        </View>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => navigation.navigate("Counters")}
        />
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
  buttonPress: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8
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
    paddingLeft: 12,
    marginLeft: 8
  })
});

export default withTheme(HomeScreen);

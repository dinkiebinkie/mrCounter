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
const eyeWidth = 32;

function HomeScreen({ navigation, theme }) {
  // const [isEyeAwake, setIsEyeAwake] = useState(false);
  // const eyePos = useRef(new Animated.Value(50)).current;

  const { numSelCounters } = useContext(CountersContext);

  useEffect(() => {
    if (numSelCounters === 0) {
      // Animated.timing(eyePos, {
      //   toValue: 50,
      //   duration: 600,
      //   easing: Easing.inOut(Easing.linear)
      // }).start();
    }
    if (numSelCounters === 1) {
      // Animated.timing(eyePos, {
      //   toValue: 0,
      //   duration: 600,
      //   easing: Easing.inOut(Easing.linear)
      // }).start();
    }
  }, [numSelCounters]);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.bottomButton, styles.newButton(theme)]}
        onPress={() => console.log("add new counter!!")}
      >
        <View
          style={[
            styles.actionButton(theme),
            { backgroundColor: theme.colors.MidBlue }
          ]}
        >
          <Text style={styles.buttonText}>+</Text>
        </View>
        <Text style={styles.buttonText}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.bottomButton, styles.goButton(theme)]}
        onPress={() => navigation.navigate("Counters", { numSelCounters })}
        disabled={numSelCounters < 1 ? true : false}
      >
        <Text style={styles.buttonText}>Go</Text>
        <View
          style={[
            { backgroundColor: theme.colors.Grey3 },
            styles.actionButton(theme)
          ]}
        >
          <Text style={styles.buttonText}>></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  actionButton: theme => ({
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }),
  bottomButton: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    padding: 4
  },
  buttonContainer: {
    position: "absolute",
    left: 4,
    right: 4,
    bottom: "5%",
    flexDirection: "row"
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  newButton: theme => ({
    paddingRight: 12,
    flex: 2,
    backgroundColor: theme.colors.Blue
  }),
  goButton: theme => ({
    flex: 5,
    backgroundColor: theme.colors.Grey1,
    marginLeft: 8,
    paddingLeft: 12
  })
});

export default withTheme(HomeScreen);

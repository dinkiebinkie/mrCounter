import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  Dimensions
} from "react-native";
import colors from "../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

const windowHeight = Dimensions.get("window").height;

//rsf
function HomeCounter({ counter }) {
  const [compHeight, setCompHeight] = useState(0);
  const { title, count, selected } = counter;
  console.log("compHeight", compHeight);
  return (
    <View style={styles.container}>
      <View
        style={styles.count}
        onLayout={e => {
          const { height } = e.nativeEvent.layout;
          setCompHeight(height);
        }}
      >
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[
            { fontSize: compHeight * 0.9, lineHeight: compHeight * 1.1 },
            styles.countText
          ]}
        >
          {count}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableHighlight style={[styles.thButton, styles.thButton1]}>
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.thButton}>
          <Text>-</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: colors.white
  },
  count: {
    flex: 1,
    // height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "stretch",
    textAlignVertical: "center"
  },
  countText: {
    backgroundColor: "blue"
  },
  // countText: { fontSize: windowHeight * 0.05 },
  thButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  thButton1: { marginBottom: 8 }
});

export default HomeCounter;

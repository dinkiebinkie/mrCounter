import React, { useState, useContext } from "react";
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
import { CountersContext } from "../state/CountersContext";

const windowHeight = Dimensions.get("window").height;

//rsf
function HomeCounter({ counter, numSelected }) {
  const { counters, setCounters } = useContext(CountersContext);

  const [compHeight, setCompHeight] = useState(0);
  const [compWidth, setCompWidth] = useState(0);
  const { title, count, selected, id } = counter;

  const changeCount = (counters, setCounters, id, increment) =>
    setCounters(
      counters.map((counter, i) => {
        if (counter.id !== id) return counter;
        const newCounter = { ...counter };
        newCounter.count = increment
          ? (counter.count += 1)
          : (counter.count -= 1);
        return newCounter;
      })
    );

  const numString = 1.11 - count.toString().length * 0.11;

  return (
    <View style={[styles.container, { height: `${100 / numSelected}%` }]}>
      <View
        style={styles.count}
        onLayout={e => {
          const { height, width } = e.nativeEvent.layout;
          setCompHeight(height);
          setCompWidth(width);
        }}
      >
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[
            {
              fontSize: compHeight * numString
            },
            styles.countText
          ]}
        >
          {count}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableHighlight
          style={[styles.thButton, styles.thButton1]}
          onPress={() => changeCount(counters, setCounters, id, true)}
        >
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.thButton}
          onPress={() => changeCount(counters, setCounters, id, false)}
        >
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
    justifyContent: "flex-end"
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
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    // alignSelf: "flex-start",
    flexShrink: 1
  },
  countText: {
    // flex: 1,
    flexWrap: "wrap",
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

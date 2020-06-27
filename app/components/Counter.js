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

// const windowHeight = Dimensions.get("window").height;

//rsf
function HomeCounter({ counter, index }) {
  const { counters, setCounters, numSelectedCounters } = useContext(
    CountersContext
  );

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

  const numString = 1.12 - count.toString().length * 0.12;

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: numSelectedCounters === index ? 0 : "1%",
          height: `${100 / numSelectedCounters}%`
        }
      ]}
    >
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
              fontSize: 16,
              zIndex: 100
              // flex: 1
            }
            // styles.countText
          ]}
        >
          {title}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[
            {
              fontSize: compHeight * numString,
              lineHeight: compHeight * numString
            },
            styles.countText
          ]}
        >
          {count}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableHighlight
          style={(styles.thButton, { height: compHeight / 2 })}
          onPress={() => changeCount(counters, setCounters, id, true)}
        >
          <Text style={styles.incButton}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={(styles.thButton, { height: compHeight / 2 })}
          onPress={() => changeCount(counters, setCounters, id, false)}
        >
          <Text style={styles.incButton}>-</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  buttons: {
    justifyContent: "flex-start",
    flex: 1,
    height: "100%"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: colors.white
  },
  count: {
    flex: 4,
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    flexShrink: 1
  },
  countText: {
    flex: 1,
    flexWrap: "wrap",
    textAlignVertical: "center"

    // backgroundColor: "blue"
  },
  incButton: {
    backgroundColor: "rgba(0,0,0,0.1)",
    // backgroundColor: "purple",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1
  },
  thButton: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center"
  }
});

export default HomeCounter;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  CheckBox
} from "react-native";
import colors from "../config/colors";

//rsf
function HomeCounter(props) {
  const { title, count, selected } = props.counter;
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.smallText}>{title}</Text>
        <Text style={styles.bigText}>{count}</Text>
      </View>
      <CheckBox checked={selected} />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white
  },
  titles: {
    flexDirection: "column"
  },
  smallText: {
    fontSize: 18
  },
  bigText: { fontSize: 30 }
});

export default HomeCounter;

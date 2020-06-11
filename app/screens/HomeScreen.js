import React from "react";
import { StyleSheet, View, Button } from "react-native";
import HomeCounter from "../components/HomeCounter";
import colors from "../config/colors";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";

const counters = [
  {
    id: 0,
    title: "Counter 1",
    count: 0,
    selected: false,
    incrementAmount: 1
  },
  {
    id: 1,
    title: "Counter 2",
    count: 0,
    selected: false,
    incrementAmount: 1
  },
  {
    id: 2,
    title: "Counter 3",
    count: 0,
    selected: false,
    incrementAmount: 1
  }
];

//rsf
function HomeScreen({ navigation }) {
  // console.log(useDimensions()); // get dimensions regardless of orientation
  // console.log(useDeviceOrientation()); // get orientation
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        {counters.map((counter, i) => (
          <HomeCounter key={i} counter={counter} index={i} />
        ))}
      </View>
      <Button
        title="Go ->"
        style={styles.goButton}
        onPress={() => navigation.navigate("Counters", { counters })}
      />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyMid,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  counterContainer: {
    flexDirection: "column"
  },
  goButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;

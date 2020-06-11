import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Counter from "../components/Counter";
import colors from "../config/colors";

//rsf
function HomeScreen({ route }) {
  const { counters } = route.params;
  // console.log(counters);
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        {counters.map((counter, i) => (
          <Counter key={i} counter={counter} index={i} />
        ))}
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "column"
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

// (counter, i) => (
// counter.selected ? (
//   <Counter key={i} counter={counter} index={i} />
// )
// ) : null

import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Counter from "../components/Counter";
import colors from "../config/colors";

//rsf
function HomeScreen({ route }) {
  const { counters, numSelected } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        {counters.map((counter, i) =>
          counter.selected ? (
            <Counter
              key={i}
              counter={counter}
              index={i}
              numSelected={numSelected}
            />
          ) : null
        )}
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

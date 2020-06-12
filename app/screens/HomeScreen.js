import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import HomeCounter from "../components/HomeCounter";
import colors from "../config/colors";
import { CountersContext } from "../state/CountersContext";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";

//rsf
function HomeScreen({ navigation }) {
  const [numSelected, setNumSelected] = useState(0);
  const { counters } = useContext(CountersContext);

  useEffect(() => {
    let newNumSelected = 0;
    counters.forEach(counter => (counter.selected ? newNumSelected++ : null));
    setNumSelected(newNumSelected);
  });

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        {counters
          ? counters.map((counter, i) => (
              <HomeCounter
                key={i}
                counter={counter}
                index={i}
                numSelected={numSelected}
              />
            ))
          : null}
      </View>
      <Button
        title="Go ->"
        style={styles.goButton}
        onPress={() => navigation.navigate("Counters", { numSelected })}
        disabled={numSelected < 1 ? true : false}
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

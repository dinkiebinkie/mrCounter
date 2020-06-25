import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import HomeCounter from "../components/HomeCounter";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function HomeScreen({ navigation, theme }) {
  const [numSelected, setNumSelected] = useState(0);
  const { counters } = useContext(CountersContext);

  useEffect(() => {
    let newNumSelected = 0;
    counters.forEach(counter => (counter.selected ? newNumSelected++ : null));
    setNumSelected(newNumSelected);
  });

  return (
    <>
      <Header />
      <View style={styles.container(theme)}>
        <SectionTitle sectionTitle={"Most recent"} />
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
            onPress={() => navigation.navigate("Counters", { numSelected })}
            disabled={numSelected < 1 ? true : false}
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
      </View>
    </>
  );
}

//rnss
const styles = StyleSheet.create({
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
  container: theme => ({
    position: "relative",
    flex: 1,
    backgroundColor: theme.colors.primary,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8,
    paddingTop: 12
  }),
  counterContainer: {
    flexDirection: "column",
    flex: 1
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
  }),
  actionButton: theme => ({
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  })
});

export default withTheme(HomeScreen);

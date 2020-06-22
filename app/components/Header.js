import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { CountersContext } from "../state/CountersContext";
import { withTheme, Image } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import Eye1 from "../assets/Eye1.svg";
import Eye2 from "../assets/Eye2.svg";
import Eye3 from "../assets/Eye3.svg";
import Eye4 from "../assets/Eye4.svg";

import MrCounter1 from "../assets/MrCounter1.png";

function HomeScreen({ navigation, theme }) {
  console.log(typeof MrCounter1);
  console.log(MrCounter1, "MrCounter1");
  const { numSelCounters } = useContext(CountersContext);
  console.log("numSelCounters", numSelCounters);

  // useEffect(() => {
  //   let newNumSelected = 0;
  //   counters.forEach(counter => (counter.selected ? newNumSelected++ : null));
  //   setNumSelected(newNumSelected);
  // });
  // let eyeSrc = Eye1;
  // if (numSelCounters > 0) eyeSrc = Eye2;
  // if (numSelCounters > 1) eyeSrc = Eye3;
  // if (numSelCounters > 2) eyeSrc = Eye4;

  return (
    <LinearGradient
      colors={["rgba(170,161,145,0.4)", "rgba(170, 161, 145, 0)"]}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        {numSelCounters < 1 && <Eye1 />}
        {numSelCounters === 1 && <Eye2 />}
        {numSelCounters === 2 && <Eye3 />}
        {numSelCounters > 2 && <Eye4 />}
        <Image source={MrCounter1} width={50} />
        {numSelCounters < 1 && <Eye1 />}
        {numSelCounters === 1 && <Eye2 />}
        {numSelCounters === 2 && <Eye3 />}
        {numSelCounters > 2 && <Eye4 />}
        <View style={styles.contentContainerOutline(theme)}></View>
      </View>
      {/* <View style={styles.counterContainer}>
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
      /> */}
    </LinearGradient>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20
    // height: 100
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center"
    // margin: 8
    // height: "25%"
  },
  contentContainerOutline: theme => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: theme.colors.Beige1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1
  }),
  eye: {},
  header: { flex: 1, flexDirection: "column", backgroundColor: "red" }
});

export default withTheme(HomeScreen);

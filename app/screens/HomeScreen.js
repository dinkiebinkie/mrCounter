import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import HomeCounter from "../components/HomeCounter";
import HomeActionButtons from "../components/HomeActionButtons";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function HomeScreen({ navigation, theme }) {
  const { counters } = useContext(CountersContext);

  return (
    <>
      <Header />
      <View style={styles.container(theme)}>
        <SectionTitle sectionTitle={"Most recent"} />
        <View style={styles.counterContainer}>
          {counters
            ? counters.map((counter, i) => (
                <HomeCounter key={i} counter={counter} index={i} />
              ))
            : null}
        </View>
        <HomeActionButtons />
      </View>
    </>
  );
}

//rnss
const styles = StyleSheet.create({
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
  }
});

export default withTheme(HomeScreen);

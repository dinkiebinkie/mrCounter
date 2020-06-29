import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CountersContext } from "../state/CountersContext";

import { withTheme } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

function SectionTitle({ sectionTitle, theme }) {
  const { counters, settings } = useContext(CountersContext);

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title(theme)}>{sectionTitle}</Text>
      <LinearGradient
        colors={["#AAA191", "transparent"]}
        style={styles.gradient}
      ></LinearGradient>
      <Text style={styles.count(theme)}>
        {sectionTitle === "Settings" ? settings.length : counters.length}
      </Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    flexDirection: "row",
    borderColor: theme.colors.DarkBeige,
    borderTopWidth: 1,
    borderRightWidth: 1,
    marginBottom: 8
  }),
  title: theme => ({
    paddingLeft: 12,
    paddingRight: 12,
    color: theme.colors.DeepBeige,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: theme.colors.DarkBeige,
    borderTopWidth: 0
  }),
  count: theme => ({
    borderRightWidth: 1,
    paddingRight: 4,
    marginRight: 2,
    height: "100%",
    borderColor: theme.colors.DarkBeige,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    color: theme.colors.DarkBeige
  })
});

export default withTheme(SectionTitle);

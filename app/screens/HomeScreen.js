import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import Card from "../components/Card";
import HomeActionButtons from "../components/HomeActionButtons";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function HomeScreen({ navigation, theme }) {
  const { counters } = useContext(CountersContext);
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <ImageBackground
        source={require("../assets/AppBackground.png")}
        style={styles.appBg}
      >
        <Header navigation={navigation} />
        <View style={styles.container(theme)}>
          <SectionTitle sectionTitle={"Most recent"} />
          <ScrollView style={styles.counterContainer}>
            {counters
              ? counters.map((counter, i) => (
                  <Card key={i} counter={counter} index={i} />
                ))
              : null}
            <View
              style={{
                height: 70,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)"
              }}
            ></View>
          </ScrollView>
          <HomeActionButtons navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  appBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "repeat"
  },
  container: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    padding: 8,
    paddingTop: 12
  }),
  counterContainer: {
    flexDirection: "column",
    flex: 1
    // paddingBottom: 32
  },
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  })
});

export default withTheme(HomeScreen);

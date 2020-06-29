import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function SettingsScreen({ route, theme }) {
  const { settings } = useContext(CountersContext);
  return (
    <>
      <Header />
      <View style={styles.container(theme)}>
        <SectionTitle sectionTitle={"Settings"} />
        <View style={styles.counterContainer}>
          {settings
            ? settings.map((setting, i) =>
                setting.selected ? (
                  <Card key={i} setting={setting} index={i} />
                ) : null
              )
            : null}
        </View>
      </View>
    </>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.PureWhite,
    flexDirection: "column"
  }),
  counterContainer: {
    flexDirection: "column"
  },
  goButton: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withTheme(SettingsScreen);

import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { withTheme, CheckBox } from "react-native-elements";

// import { toggleSelect } from "../helpers/counterHelpers";
import colors from "../config/colors";
import { CountersContext } from "../state/CountersContext";

//rsf
function HomeCounter(props) {
  const { toggleSelect } = useContext(CountersContext);
  const { title, count, selected, id } = props.counter;
  const { numSelected, theme } = props;

  return (
    <TouchableOpacity
      style={styles.container(theme)}
      onPress={() => toggleSelect(id)}
    >
      <View style={styles.titles}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.rightContainer(theme)}>
        <Switch
          // style={styles.checkBox(theme)}
          value={selected}
          onValueChange={() => toggleSelect(id)}
          // disabled={!selected && numSelected === 3 ? true : false}
        />
        <Text style={styles.countText}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

//rnss
const styles = StyleSheet.create({
  // checkBox: theme => ({
  //   // backgroundColor: theme.colors.PureWhite,
  //   // margin: 0,
  //   // padding: 0
  // }),
  container: theme => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: theme.colors.PureWhite,
    marginBottom: 4,
    padding: 8
  }),
  titles: {
    flexDirection: "column"
  },
  titleText: { fontSize: 24 },
  countText: { fontSize: 24 },
  rightContainer: theme => ({
    width: "30%",
    borderRadius: 4,
    backgroundColor: theme.colors.LightGrey,
    margin: 0,
    padding: 8,
    display: "flex",
    alignItems: "flex-end",
    color: theme.colors.Black
  })
});

export default withTheme(HomeCounter);

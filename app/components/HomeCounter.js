import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { withTheme, CheckBox } from "react-native-elements";

// import { toggleSelect } from "../helpers/counterHelpers";
import colors from "../config/colors";
import { CountersContext } from "../state/CountersContext";

//rsf
function HomeCounter(props) {
  const { toggleSelect } = useContext(CountersContext);
  const { title, count, selected, id, selectedSlant } = props.counter;
  const { numSelected, theme } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container(theme),
        selected && styles.containerSelected,
        {
          transform: [
            {
              rotate: selected ? selectedSlant : "0deg"
            }
          ]
        }
      ]}
      onPress={() => toggleSelect(id)}
    >
      <View style={styles.titles}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View
        style={[
          styles.rightContainer(theme),
          selected && styles.rightContainerSelected(theme)
        ]}
      >
        <Switch
          trackColor={{
            false: theme.colors.LightGrey,
            true: theme.colors.MidBlue
          }}
          thumbColor={selected ? theme.colors.Blue : theme.colors.PureWhite}
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
  container: theme => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: theme.colors.PureWhite,
    marginBottom: 4,
    padding: 8
  }),
  containerSelected: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 8
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 10,
    borderRadius: 8
  },
  countText: { fontSize: 24 },
  titles: {
    flexDirection: "column"
  },
  titleText: { fontSize: 24 },
  rightContainer: theme => ({
    width: "30%",
    borderRadius: 4,
    backgroundColor: theme.colors.LightGrey,
    margin: 0,
    padding: 8,
    display: "flex",
    alignItems: "flex-end",
    color: theme.colors.Black
  }),
  rightContainerSelected: theme => ({
    backgroundColor: theme.colors.LightBlue
  })
});

export default withTheme(HomeCounter);

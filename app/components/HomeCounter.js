import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  Switch
} from "react-native";
// import { toggleSelect } from "../helpers/counterHelpers";
import colors from "../config/colors";
import { CountersContext } from "../state/CountersContext";

//rsf
function HomeCounter(props) {
  const { counters, setCounters } = useContext(CountersContext);
  const { title, count, selected, id } = props.counter;
  const { numSelected } = props;

  // map over to return new array
  // but for this item, change selected
  const toggleSelect = (counters, setCounters, id) =>
    setCounters(
      counters.map((counter, i) => {
        if (counter.id !== id) return counter;
        const newCounter = { ...counter };
        newCounter.selected = !counter.selected;
        return newCounter;
      })
    );

  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.smallText}>{title}</Text>
        <Text style={styles.bigText}>{count}</Text>
      </View>
      <Switch
        value={selected}
        onValueChange={() => toggleSelect(counters, setCounters, id)}
        disabled={!selected && numSelected === 3 ? true : false}
      />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white
  },
  titles: {
    flexDirection: "column"
  },
  smallText: {
    fontSize: 18
  },
  bigText: { fontSize: 30 }
});

export default HomeCounter;

import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import { CountersContext } from "./state/CountersContext";
import { guidGenerator } from "./helpers";
import { ThemeProvider } from "react-native-elements";
import { withTheme } from "react-native-elements";

import HomeScreen from "./screens/HomeScreen";
import CounterScreen from "./screens/CountersScreen";
// import TitleScreen from "./screens/TitleScreen";
import Header from "./components/Header";
import colors from "./config/colors";

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: "#EAE6E1",
    Beige1: "#EAE6E1",
    LightGrey: "#F2F3F3",
    Black: "#2E2B2B",
    PureWhite: "#FFFFFF",
    DeepBeige: "#897A5E",
    DarkBeige: "#AAA191",
    MidBlue: "#88BFFF",
    Blue: "1681FF"
  }
};

//rsf
function Main(props) {
  const [counters, setCounters] = useState([]);
  const [numSelCounters, setNumSelCounters] = useState(0);

  useEffect(() => {
    setCounters([
      {
        id: 0,
        title: "Counter 1",
        count: 10,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 1,
        title: "Counter 2",
        count: 100,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 2,
        title: "Counter 3",
        count: 1000,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 3,
        title: "Counter 4",
        count: 10000,
        selected: false,
        incrementAmount: 1
      }
    ]);

    countSelectedThenSet();
  }, []);

  // ensure number of selected state is accurate
  const countSelectedThenSet = newCounters => {
    let numSelected = 0;
    let useCounters = newCounters ? newCounters : counters;
    useCounters.forEach(counter =>
      counter.selected === true ? numSelected++ : null
    );
    setNumSelCounters(numSelected);
  };

  // add a new counter with a title
  const addCounter = (title, count) => {
    const newCounter = {
      title,
      count: count >= 0 ? count : 0,
      id: guidGenerator(),
      selected: false,
      incrementAmount: 1
    };

    setCounters([...counters, newCounter]);
    return countSelectedThenSet();
  };

  // find counter by id remove
  const removeCounter = id => {
    const newCounters = [...counters];
    const indexOfCounter = newCounters.findIndex(counter => counter.id === id);
    setCounters(newCounters.splice(indexOfCounter, 1));
    return countSelectedThenSet();
  };

  // find counter by id then toggle selected state
  const toggleSelect = id => {
    const newCounters = counters.map((counter, i) => {
      if (counter.id !== id) return counter;
      const newCounter = { ...counter };
      newCounter.selected = !counter.selected;
      return newCounter;
    });
    setCounters(newCounters);
    return countSelectedThenSet(newCounters);
  };

  return (
    <ThemeProvider theme={theme}>
      <CountersContext.Provider
        value={{
          counters,
          setCounters,
          numSelCounters,
          countSelectedThenSet,
          addCounter,
          removeCounter,
          toggleSelect
        }}
      >
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Counters"
                component={CounterScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </CountersContext.Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  }
});

export default withTheme(Main);

/* <Stack.Screen
  name="Title"
  component={TitleScreen}
  options={{ headerTitle: props => <Header {...props} /> }}
/> */

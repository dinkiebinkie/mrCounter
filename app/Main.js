import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import { CountersContext } from "./state/CountersContext";
import { guidGenerator } from "./helpers";
import { ThemeProvider } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { storeData, getData } from "./storage";

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

    Grey1: "#4D4D4D",
    Grey3: "#979797",
    Black: "#2E2B2B",
    PureWhite: "#FFFFFF",
    DeepBeige: "#897A5E",
    DarkBeige: "#AAA191",
    Blue: "#1681FF",
    MidBlue: "#88BFFF",
    LightBlue: "#E8F2FF"
  }
};

//rsf
function Main(props) {
  const [counters, setCounters] = useState([]);
  const [numSelCounters, setNumSelCounters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const storageState = await getData();

      setCounters(storageState.counters);
      setNumSelCounters(storageState.numSelCounters);

      countSelectedThenSet();
    }
    fetchData();
  }, []);

  const saveToStorage = () =>
    storeData({
      counters,
      numSelCounters
    });

  // ensure number of selected state is accurate
  const countSelectedThenSet = newCounters => {
    let numSelected = [];
    let useCounters = newCounters ? newCounters : counters;
    useCounters.forEach(counter =>
      counter.selected === true ? numSelected.push(counter.id) : null
    );
    setNumSelCounters(numSelected);
  };

  // add a new counter with a title
  const addCounter = (title, count) => {
    const newCounter = {
      title: title ? title : `Counter ${counters ? counters.length + 1 : 1}`,
      count: count >= 0 ? count : 0,
      id: guidGenerator(),
      selected: false,
      incrementAmount: 1,
      selectedSlant: Math.random() > 0.5 ? "-1deg" : "1deg"
    };

    setCounters([...counters, newCounter]);
    saveToStorage();
    return countSelectedThenSet();
  };

  // find counter by id remove
  const removeCounter = id => {
    const newCounters = [...counters];
    const indexOfCounter = newCounters.findIndex(counter => counter.id === id);
    setCounters(newCounters.splice(indexOfCounter, 1));
    saveToStorage();
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
    saveToStorage();
    console.log(id);
    return countSelectedThenSet(newCounters);
  };

  // edit counter by id
  const editCounter = (id, key, value) => {
    const newCounters = [...counters];
    const indexOfCounter = newCounters.findIndex(counter => counter.id === id);
    const newCounter = { ...counters[indexOfCounter] };
    newCounter[key] = value;

    newCounters[indexOfCounter] = newCounter;

    setCounters(newCounters);
    saveToStorage();
    return countSelectedThenSet();
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
          toggleSelect,
          editCounter
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

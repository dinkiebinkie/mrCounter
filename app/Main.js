import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
    primary: "#EAE6E1"
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

  const countSelectedThenSet = () => {
    let numSelected = 0;
    counters.forEach(counter => (counter.selected ? numSelected++ : null));
    setNumSelCounters(numSelected);
  };

  const addCounter = (title, count) => {
    const newCounter = {
      title,
      count,
      id: guidGenerator(),
      selected: false,
      incrementAmount: 1
    };
    setCounters([...counters, newCounter]);
    return countSelectedThenSet();
  };
  const removeCounter = id => {
    const newCounters = [...counters];
    const indexOfCounter = newCounters.findIndex(counter => counter.id === id);
    setCounters(newCounters.splice(indexOfCounter, 1));
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
          removeCounter
        }}
      >
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator>
              {/* <Stack.Screen
              name="Title"
              component={TitleScreen}
              options={{ headerTitle: props => <Header {...props} /> }}
            /> */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: props => <Header {...props} /> }}
              />
              <Stack.Screen
                name="Counters"
                component={CounterScreen}
                options={{ headerTitle: props => <Header {...props} /> }}
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

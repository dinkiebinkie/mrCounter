import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import colors from "./config/colors";
import HomeScreen from "./screens/HomeScreen";
import CounterScreen from "./screens/CountersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CountersContext } from "./state/CountersContext";

const Stack = createStackNavigator();

//rsf
function Main(props) {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    setCounters([
      {
        id: 0,
        title: "Counter 1",
        count: 0,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 1,
        title: "Counter 2",
        count: 0,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 2,
        title: "Counter 3",
        count: 0,
        selected: false,
        incrementAmount: 1
      },
      {
        id: 3,
        title: "Counter 4",
        count: 0,
        selected: false,
        incrementAmount: 1
      }
    ]);
  }, []);

  return (
    <CountersContext.Provider value={{ counters, setCounters }}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Choose Counters" }}
            />
            <Stack.Screen name="Counters" component={CounterScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </CountersContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default Main;

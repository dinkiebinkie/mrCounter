import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import colors from "./config/colors";
import HomeScreen from "./screens/HomeScreen";
import CounterScreen from "./screens/CountersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { CounterProvider } from "./app/state/CountersContext";

const Stack = createStackNavigator();

//rsf
function Main(props) {
  return (
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

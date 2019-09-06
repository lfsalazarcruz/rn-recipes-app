import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

// More performant app.
useScreens();

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

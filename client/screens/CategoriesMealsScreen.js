import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the CategoriesMealsScreen</Text>
    </View>
  );
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

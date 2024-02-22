import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ModuleListScreen")}
      >
        <Text style={styles.buttonText}>Go to List Module</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserListScreen")}
      >
        <Text style={styles.buttonText}>Go to User List</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "violet",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;

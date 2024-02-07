import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, onclick }) => {
  return (
    //Initialisations-----------------------------------------
    //State---------------------------------------------------
    //Handlers------------------------------------------------
    //View----------------------------------------------------

    <Pressable onPress={onclick} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
export const ButtonTray = ({ children }) => {
  return (
    //Initialisations-----------------------------------------
    //State---------------------------------------------------
    //Handlers------------------------------------------------
    //View----------------------------------------------------

    <View style={styles.buttonTray}>{children}</View>
  );
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    margin: 2,
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "cyan",
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    flex: 1,
    shadowColor: "grey",
    shadowOpacity: 0.6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
  },
});

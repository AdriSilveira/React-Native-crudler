import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, onClick, icon }) => {
  return (
    //Initialisations-----------------------------------------
    //State---------------------------------------------------
    //Handlers------------------------------------------------
    //View----------------------------------------------------

    <Pressable onPress={onClick} style={styles.button}>
      {icon ? icon : null}
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
    //margin: 2,
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: "#802cc9",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    gap: 5,
    //  shadowColor: "grey",
    // shadowOpacity: 0.6,
    // elevation: 3,
  },
  label: {
    fontSize: 16,
  },
});

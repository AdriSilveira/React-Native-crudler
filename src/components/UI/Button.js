import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ label, onclick }) => {
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

const styles = StyleSheet.create({
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
export default Button;

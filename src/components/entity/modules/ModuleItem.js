import { Pressable, StyleSheet, Text, View } from "react-native";

const ModuleItem = ({ module, onSelect }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode}
          {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 3,
  },
  text: {
    color: "black",
  },
});

export default ModuleItem;

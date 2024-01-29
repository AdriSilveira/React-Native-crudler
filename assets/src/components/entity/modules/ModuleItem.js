import { Pressable, StyleSheet, Text, View } from "react-native";

const ModuleItem = () => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <Pressable onPress={onselect}>
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
    borderBottonWidth: 1,
    borderColor: "lightgray",
  },
});

export default ModuleItem;

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../data/modules.js";

export const ModuleListScreen = () => {
  //Initialisation----------------------------------------
  const modules = initialModules;
  const handleSelect = () => alert("Item Selected");
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable
              key={module.ModuleCode}
              style={styles.item}
              onPress={handleSelect}
            >
              <View>
                <Text style={styles.text}>
                  {module.ModuleCode}
                  {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidt: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;

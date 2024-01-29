import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../data/modules.js";
import ModuleItem from "../components/entity/modules.js";

const ModuleListScreen = () => {
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
          return <ModuleItem module={module} onSelecte={handleSelect} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;

import { StyleSheet } from "react-native";
import Screen from "../layout/Screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { useState } from "react";
import RenderCount from "../UI/RenderCount.js";

const ModuleListScreen = ({ navigation }) => {
  //Initialisation----------------------------------------

  //State-------------------------------------------------
  //take modules and initialize using the useState
  const [modules, setModules] = useState(initialModules);

  //Handlers----------------------------------------------
  //function to navigate to the respective module
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });

  //filter the modules and delete the one that was click one.
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  //View--------------------------------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );

  const styles = StyleSheet.create({
    container: {},
  });
};
export default ModuleListScreen;

import { StyleSheet } from "react-native";
import Screen from "../layout/Screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../modules/ModuleList.js";
import { useState } from "react";
import RenderCount from "../UI/RenderCount.js";

const ModuleListScreen = () => {
  //Initialisation----------------------------------------

  //State-------------------------------------------------
  const [modules, setModules] = useState(initialModules);

  //Handlers----------------------------------------------
  const handleSelect = (module) =>
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

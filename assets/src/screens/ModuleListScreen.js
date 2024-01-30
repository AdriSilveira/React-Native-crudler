import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../data/modules.js";
import ModuleList from "../components/entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  //Initialisation----------------------------------------
  const modules = initialModules;

  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleSelect = (module) => alert(`Item${module.ModuleCode} Selected`);
  //View--------------------------------------------------

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;

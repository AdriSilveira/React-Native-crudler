import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../data/modules.js";
import ModuleList from "../components/entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  //Initialisation----------------------------------------
  let modules = initialModules;

  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleSelect = (module) => {
    module = modules.filter((item) => {
      item.ModuleID !== module.ModuleID;
    });
    console.log(
      `After deleting ${module.ModuleCode}, the array modules has length ${modules.length}`
    );
  };
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
